import React, { useState } from 'react';

function ChatSection() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    {
      author: 'ChatGPT',
      text: 'Hello, how can I help you today?',
    },
  ]);

  const handleSubmit = async event => {
    event.preventDefault();
    // Send user input to OpenAI API
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({
        prompt: userInput,
        max_tokens: 100,
        temperature: 0.5
      }),
    });
    const json = await response.json();
    // Add user input and ChatGPT response to messages
    setMessages([
      ...messages,
      {
        author: 'User',
        text: userInput,
      },
      {
        author: 'ChatGPT',
        text: json.choices[0].text,
      },
    ]);
    setUserInput('');
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <b>{message.author}:</b> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatSection;
