// public/app.js
const form  = document.getElementById('form');                // ← matches index.html
const input = document.getElementById('user-input');
const convo = document.getElementById('chatbot-conversation-container');

const convHistory = [];
const formatConvHistory = (messages) =>
  messages.map((m, i) => (i % 2 === 0 ? `Human: ${m}` : `AI: ${m}`)).join('\n');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const question = input.value.trim();
  if (!question) return;
  input.value = '';

  const human = document.createElement('div');
  human.className = 'speech speech-human';
  human.textContent = question;
  convo.appendChild(human);

  const ai = document.createElement('div');
  ai.className = 'speech speech-ai';
  ai.textContent = '…';
  convo.appendChild(ai);
  convo.scrollTop = convo.scrollHeight;

  try {
    const resp = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question,
        conv_history: formatConvHistory(convHistory),
      }),
    });
    const data = await resp.json();
    const answer = data.answer ?? '(no answer)';
    ai.textContent = answer;

    // keep history (human, then AI)
    convHistory.push(question);
    convHistory.push(answer);
  } catch (err) {
    ai.textContent = 'Error talking to server';
    console.error(err);
  }
});
