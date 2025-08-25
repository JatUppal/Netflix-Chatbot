// server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { RunnablePassthrough, RunnableSequence } from '@langchain/core/runnables';
import { createClient } from '@supabase/supabase-js';
import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MODEL = 'text-embedding-3-small';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- LLM ---
const llm = new ChatOpenAI({ model: 'gpt-4o-mini', temperature: 0.2 });

// --- Supabase retriever (matches your ingest) ---
const supabase = createClient(process.env.SUPABASE_URL_LC_CHATBOT, process.env.SUPABASE_API_KEY);
const vectorStore = new SupabaseVectorStore(new OpenAIEmbeddings({ model: MODEL }), {
  client: supabase,
  tableName: 'documents',
  queryName: 'match_documents',
});
const retriever = vectorStore.asRetriever({ k: 4 });

// Helper: combine docs to one string
const combineDocuments = (docs) => docs.map(d => d.pageContent).join('\n\n');

// --- Standalone question chain ---
const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
  `Given some conversation history (if any) and a question,
convert the question to a standalone question specifically about a Netflix catalog.

conversation history:
{conv_history}

question:
{question}

standalone question:`
);

const standaloneQuestionChain = RunnableSequence.from([
  // pass through both fields
  {
    question: (i) => i.question,
    conv_history: (i) => i.conv_history ?? '',
  },
  standaloneQuestionPrompt,
  llm,
  new StringOutputParser(),
]);

// --- Answer prompt ---
const answerPrompt = PromptTemplate.fromTemplate(
  `You are a helpful Netflix catalog assistant. Answer based ONLY on the provided context (parsed from a static dataset of Netflix titles).
If the answer isn't in the context or you're not sure, do NOT guess. Instead reply exactly:
"I'm sorry, I don't know the answer to that. Please call or text (925) 577-2263 for help."

Keep answers short and friendly.

context:
{context}

conversation history:
{conv_history}

question:
{question}

answer:`
);

// --- Full RAG chain ---
const ragChain = RunnableSequence.from([
  {
    // keep originals
    question: (i) => i.question,
    conv_history: (i) => i.conv_history ?? '',
    // build context from the *standalone* question
    context: standaloneQuestionChain.pipe(retriever).pipe(combineDocuments),
  },
  answerPrompt,
  llm,
  new StringOutputParser(),
]);

// API
app.post('/api/chat', async (req, res) => {
  try {
    const { question = '', conv_history = '' } = req.body || {};
    const answer = await ragChain.invoke({question, conv_history});
    res.json({ answer });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'RAG error' });
  }
});

app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api/')) {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ http://localhost:${PORT}`));
