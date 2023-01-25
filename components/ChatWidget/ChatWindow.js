import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { Button, Container, InputAdornment, TextField } from '@mui/material';
import classNames from 'classnames';


const   useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: 'white',
    borderRadius: '16px',
    overflow: 'auto',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },  
  sendButton: {
    marginLeft: '5px',
  },
  divider: {
    height: 2,
    margin: 4,
  },
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

function ChatWindow(props) {
  const classes = useStyles();
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: 'Otis',
      message: 'Hello, how are you?',
      isUser: false,
    },
    {
      id: 2,
      author: 'You',
      message: 'I am good, thank you.',
      isUser: true,
    },
    {
      id: 3,
      author: 'Otis',
      message: 'That is great to hear!',
      isUser: false,
    },
  ]);
  const [message, setMessage] = useState('');
  const listRef = useRef(null);


  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messages) {
      setMessages([...messages, { id: messages.length + 1, author: 'You', message, isUser: true }]);
      setMessage('');
    }
  };

  useEffect(() => {
    if (listRef.current) {
        listRef.current.scrollTo(0, listRef.current.scrollHeight);
    }
  }, [messages]);
  return (
    <>
    <Container ref={listRef} className={classNames(classes.mainContainer)}>
    <List>
    {messages.map((m) => (
    <ListItem divider={true}>
        <ListItemAvatar>
            <Avatar alt={m.author} src="/img/otis-personal-assistent.png" />
        </ListItemAvatar>
        <ListItemText 
                primary={m.author}
                secondary={m.message}
                style={{ textAlign: m.isUser ? 'right' : 'left' }}
                className={m.isUser ? classes.userMessage : classes.otherMessage}
              />
    </ListItem>))}
    
      <ListItem>
        <form onSubmit={handleSendMessage}>
        <Container className={classes.inputContainer} fullWidth>
            <TextField
                placeholder="Ask me what I can do for you"
                value={message}
                fullWidth
                onChange={(e) => setMessage(e.target.value)}
                variant="filled"
                endAdornment={
                    <InputAdornment position="start">
                        <IconButton aria-label='send message' 
                                    type='submit'
                                    edge="end">
                            <SendIcon />
                        </IconButton>
                    </InputAdornment>}
            />
{/*                         <Button type="submit" className={classes.sendButton} variant="contained">
                            <SendIcon />
                        </Button> */}
            
            </Container>
        </form>
    </ListItem>
    </List>
    </Container>
    </>
);
}

export default ChatWindow;

