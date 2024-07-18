import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import io from 'socket.io-client';
import SingaleMessageComponent from './singaleMessegeComponent'; // Assuming the correct path to the component

const clientId = 1; // Replace with the actual logic to get client ID

const socket = io('http://localhost:5000', { query: { clientId } });

export default function ClientChat() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, { text: message, author: 'Me', timestamp: new Date().toLocaleTimeString() }]);
    });
    return () => {
      socket.off('message');
    };
  }, [messages]);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('message', { text: message, id: clientId });
    setMessage('');
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
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
      <IconButton aria-label="notifications" size="large" onClick={handleClickOpen('paper')}>
        <StyledFab color="default" aria-label="add">
          <Badge badgeContent={messages.length} color="error">
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
          Talk to us
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1} width={300}>
            <div>
              {messages.map((msg, index) => (
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
            />
            <Button type="submit" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
