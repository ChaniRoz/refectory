import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useDispatch } from 'react-redux';
import { Save, initUser, initUserId } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function NameLoginDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    dispatch(Save(name));
    setOpen(false);
    handleMovePage();
  }
  const handleMovePage = () => {
    console.log("initUserId-----", initUserId);
    if (initUser == 'Chani Rozenbiom') {
      navigate('/manager');
    }
    else {
      navigate('/client');
    }
  };
  return (
    <Dialog onClose={handleClose} open={setOpen}>
      <DialogContent>
        <DialogContentText>enter your Name</DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="Name"
          type="string"
          fullWidth
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button type="submit" onClick={handleClose}>sumbit</Button>
      </DialogActions>
    </Dialog>
  );

};


export default NameLoginDialog;