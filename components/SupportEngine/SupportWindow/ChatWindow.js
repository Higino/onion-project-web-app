import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Avatar, Button, Container, IconButton, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@mui/icons-material/Send';
import { AccountCircle } from '@mui/icons-material';
import { styles } from "../styles";


const   useStyles = makeStyles((theme) => ({
  userMessage: {
    background: '#42A5F5',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    background: '#E0E0E0',
    color: 'black',
    borderRadius: '20px',
    padding: '10px',
    alignSelf: 'flex-start',
  },
}));

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
  }));

export default function ChatWindow(props) {
  const classes = useStyles();
  const ref = useRef(null);
  const [loading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      author: 'Otis',
      message: 'Hello, I can answer any quetions about me. Ask anything and I will tell you how I can help you in the context of social media management and content creation.',
      isUser: false,
    },
  ]);
  const [message, setMessage] = useState('');


  const handleSendMessage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let response = await getOtisResponse(message)

    if (messages) {
      setMessages([...messages,
        { id: messages.length + 1, author: 'You', message, isUser: true },
        { id: messages.length + 2, author: 'Otis', message: response, isUser: false }]);
      setMessage('');
      setIsLoading(false);
    }
  };

  async function getOtisResponse(question) {
    /*  TODO: Remove hard coded endpoint. Should be a configuration */    
    let response = await fetch('https://api.media-personal-assistant.com/api/v1/chat', {
      method: 'POST',
      body: JSON.stringify({
        prompt: question,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
    });

    const data = await response.response;
    return data;
  }

  useEffect(() => {
    if (ref.current) {
        ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);

  return (
    <Box ref={ref} padding={2} sx={{ maxHeight: '530px', width: '100%', overflow: 'scroll' }}>
      <Stack >
        {messages.map((m) => (
          <Item>
              {!m.isUser && <Avatar alt={m.author} src="/img/otis-personal-assistent.png" />}
              {m.isUser && <Avatar alt={m.author} src="" />}
            <ListItemText primary={m.author}
                         secondary={m.message}
                         style={{ textAlign: m.isUser ? 'right' : 'left' }}
                         className={m.isUser ? classes.userMessage : classes.otherMessage}/>
          </Item>
        ))}
        <form onSubmit={handleSendMessage}>
          <Box padding={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField disabled={loading}  fullWidth value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Hi Otis,  can you help me grow my channels?" 
              label="Ask me what I can do for you"
              id="input-with-sx" 
              variant="standard" />
          <IconButton disabled={loading} type="submit" aria-label="send" >
            <SendIcon sx={{ color: loading? 'color.inactive' : 'blue', mr: 1, my: 0.5 }} />
          </IconButton>
          </Box>
        </form>
      </Stack>
    </Box>
  );
}