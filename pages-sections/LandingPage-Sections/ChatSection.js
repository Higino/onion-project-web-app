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
    const response = await fetch('https://x1l19h8hn6.execute-api.eu-west-1.amazonaws.com/otis/users/chat', {
      method: 'POST',
      crossorigin: true,    
      mode: 'no-cors',
      body: JSON.stringify({
        prompt: userInput,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      }
    }).then((response) => {
      console.log(response)
    })
    .catch((error) => {    
      console.error(error);   
      console.log("error"); 
    });

    // Add user input and ChatGPT response to messages
    setMessages([
      ...messages,
      {
        author: 'Me',
        text: userInput,
      },
      {
        author: 'Otis',
        text: "json.response",
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
        <Button simple color="primary" size="lg" type="submit">Send query</Button>
      </form>
    </div>
  );
}

export default ChatSection;
