import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { Add } from '../../redux/userSlice';

export default function FormDialog() {
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(true);
    const [userName, setUserName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleClose = () => {
        setOpen(false);
    };

    const handleSaveClose = () => {
        const user = {
            userName,
            email,
            phone,
            password
        }
        dispatch(Add(user))
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const name = formJson.name;
                        console.log(name);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Sign in</DialogTitle>
                <DialogContent>
                    enter your personal detiles
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="your name"
                        type="name"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <DialogContentText>
                        enter your Email Address
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <DialogContentText>
                        enter your Phone Number
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="phone"
                        name="PhoneNumber"
                        label="Phone Number"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <DialogContentText>
                        enter your Passward
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="passward"
                        name="Passward"
                        label="Passward"
                        type="Passward"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <DialogContentText>
                        enter Confirm Password
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        name="Passward"
                        fullWidth
                        variant="standard"
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSaveClose} type="submit" autoFocus>sumbit</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}