import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import io from 'socket.io-client';
import SingaleMessageComponent from './singaleMessegeComponent';

const socket = io('http://localhost:5000', { query: { clientId: 'admin' } });

export default function AdminChat() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({});
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    socket.on('message', ({ clientId, text }) => {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [clientId]: [
          ...(prevMessages[clientId] || []),
          { text, author: 'client', timestamp: new Date().toLocaleTimeString() },
        ],
      }));
    });

    socket.on('clients', (clients) => {
      setClients(clients);
    });

    return () => {
      socket.off('message');
      socket.off('clients');
    };
  }, []);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (selectedClient) {
      socket.emit('message-admin', { clientId: selectedClient, text: message });

      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedClient]: [
          ...(prevMessages[selectedClient] || []),
          { text: message, author: 'admin', timestamp: new Date().toLocaleTimeString() },
        ],
      }));
      setMessage('');
    }
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    bottom: -700,
    left: 30,
    margin: '0 auto',
  });

  return (
    <React.Fragment>
      <IconButton aria-label="admin chat" size="large" onClick={handleClickOpen('paper')}>
        <StyledFab color="primary" aria-label="admin-chat">
          <Badge badgeContent={clients.length} color="secondary">
            <ChatIcon />
          </Badge>
        </StyledFab>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <IconButton aria-label="exit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          Admin Chat
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1} width={300}>
            <div>
              {clients.map((client, index) => (
                <Button key={index} onClick={() => setSelectedClient(client)}>
                  {client}
                </Button>
              ))}
              {selectedClient && messages[selectedClient] && messages[selectedClient].map((msg, index) => (
                <SingaleMessageComponent key={index} message={msg} />
              ))}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box component="form" onSubmit={sendMessage} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
            <TextField
              id="outlined-multiline-flexible"
              label="Message"
              multiline
              maxRows={4}
              style={{ width: '350px' }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={!selectedClient}
            />
            <Button type="submit" endIcon={<SendIcon />} disabled={!selectedClient}>
              Send
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
