import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useDispatch } from 'react-redux';
import { Get } from '../../redux/userSlice';
import ChatBtn from '../chat/manager/chatManager';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export default function SimpleDialog() {

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('')

  const [pasward, setPasward] = React.useState('')

  const handleSaveClose = () => {
    const user = email;
    const pass = pasward;
    if (user == '6967460@gmail.com') {

      console.log("you are manage$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
      handleDetailsManager()
      // return 

    }
    // dispatch(Get(user))
    setOpen(false);
  };
  const handleDetailsManager = () => {
    console.log("herere");
    ChatBtn();

  }

  return (
    <Dialog
      open={setOpen}
    >
      <DialogContent>
        <DialogContentText>enter your Email Address</DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}

        />
        <DialogContentText>enter your Password</DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="password"
          name="password"
          label="password"
          type="password"
          fullWidth
          variant="outlined"
          onChange={(e) => setPasward(e.target.value)}

        />
      </DialogContent>

      <DialogActions>
        <Button type="submit" onClick={handleSaveClose}>sumbit</Button>
      </DialogActions>
    </Dialog>
  );
}

