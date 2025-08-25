// ingest.js
import 'dotenv/config';
import { readFile } from 'fs/promises';
import { createClient } from '@supabase/supabase-js';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase';
import { OpenAIEmbeddings } from '@langchain/openai';

const MODEL = 'text-embedding-3-small'; // 1536 dims
const sbUrl = process.env.SUPABASE_URL_LC_CHATBOT;
const sbKey = process.env.SUPABASE_API_KEY;
const openAIApiKey = process.env.OPENAI_API_KEY;

const client = createClient(sbUrl, sbKey);
const text = await readFile('netflix-info.txt', 'utf8');

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 700,
  chunkOverlap: 120,
});
const docs = await splitter.createDocuments([text]);

const embeddings = new OpenAIEmbeddings({ model: MODEL, apiKey: openAIApiKey });
const store = new SupabaseVectorStore(embeddings, {
  client,
  tableName: 'documents',
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// smaller batches to avoid timeouts
const BATCH = 10;

for (let i = 0; i < docs.length; i += BATCH) {
  const slice = docs.slice(i, i + BATCH);
  await store.addDocuments(slice);
  console.log(`Upserted ${Math.min(i + BATCH, docs.length)}/${docs.length}`);
  await sleep(200); // short pause lowers DB pressure
}
console.log('✅ Ingest complete');

