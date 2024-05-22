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
import ChatComponent from './chatComponent';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';

export default function ChatBtn() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSend=()=>{
    //dispatch
  }
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
    top:30,
    left: 30,
    margin: '0 auto',
  });
  return (
    <React.Fragment>
        <IconButton aria-label="notifications" size="large" onClick={handleClickOpen('paper')}>
          <StyledFab color="default" aria-label="add">
          <Badge badgeContent={17} color="error">
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
        <IconButton aria-label="exit"  onClick={handleClose}>
        <CloseIcon />
      </IconButton>
          Talk to us
           </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            minWidth={300} h
          >
            <ChatComponent />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          input
          <Button onClick={handleSend}>Send<SendIcon /></Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
