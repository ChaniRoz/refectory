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
import UserPage from './userDetiles'
import { useDispatch } from 'react-redux';
import { Get } from '../../redux/userSlice';


const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('')

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    // onClose(setOpen);
  };

  const handleGetDetiles = () => {
    const userDetails = {
      email: email,
  
    }    
    console.log("---i hehehehehehe");

 dispatch(Get(userDetails))
    setOpen(false);
    // UserPage(z)
};

  // const handleListItemClick = (value) => {
  //   onClose(value);
  // };
 
  return (
    <Dialog onClose={handleClose} open={setOpen}>
      {/* <DialogTitle>Set backup account</DialogTitle> */}
      {/* <List sx={{ pt: 0 }}> */}
      {/* {emails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))} */}
      {/* <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem> */}
      {/* </List> */}
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
        />
      </DialogContent>

      <DialogActions>
        {/* <Button onClick={handleClose}>Cancel</Button> */}
        <Button type="submit" onClick={handleGetDetiles}>sumbit</Button>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  //   onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        // selectedValue={selectedValue}
        open={open}
      // onClose={handleClose}
      />
    </div>
  );
}
