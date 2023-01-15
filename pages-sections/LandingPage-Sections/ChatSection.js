import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from "/components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/chatStyles.js";

const useStyles = makeStyles(styles);

function ChatSection() {
  const classes = useStyles();
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    {
      author: 'Otis',
      text: 'Hello, I am your personal assistent. Eager to help you. Ask me anything and I will tell you how I can help you as your personal assistant?',
    },
  ]);

  const handleSubmit = async event => {
    event.preventDefault();
    // Send user input to OpenAI API
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        prompt: "The following is a conversation with an AI assistant.Imagine you are a digital personal assistant SaaS product. You can do a variety of tasks that helps content creators and influencers manage their social media, accounts, contents and followers. You can automate all the repetitive tasks that content creators need in order to build content faster and grow their audience. All the tools that content creators need are concentrated in Otis so they don't need to go anywhere else. Otis as a personal assistant can do everything using AI and automatically create or do what content creators need. If you are asked anything outside this scope please avoid responding. Try as much as possible to have people subscribe to the product." + userInput,
        max_tokens: 100,
        temperature: 0.9
      }),
    });
    const json = await response.json();
    // Add user input and ChatGPT response to messages
    setMessages([
      ...messages,
      {
        author: 'Me',
        text: userInput,
      },
      {
        author: 'Otis',
        text: json.choices[0].text,
      },
    ]);
    setUserInput('');
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <b>{message.author}:</b> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
            type="text"
            InputProps={{
                classes: {
                    input: classes.whiteText,
                },
              }}
            value={userInput}
            onChange={event => setUserInput(event.target.value)}
            variant="outlined"
            focused
            fullWidth
            />
        <Button simple color="secondary" size="lg" type="submit">Send query</Button>
      </form>
    </div>
  );
}

export default ChatSection;
