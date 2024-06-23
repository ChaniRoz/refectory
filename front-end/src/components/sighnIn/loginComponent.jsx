import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                sign in
            </Button>
            <Button onClick={handleClose}>Cancel</Button>

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
                    <DialogContentText>
                        enter your personal detiles
                    </DialogContentText>
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
                    />
                </DialogContent>
                <DialogContent>
                    <DialogContentText>
                        enter your Email Address
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogContent>
                    <DialogContentText>
                        enter your Phone Number
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="Phone"
                        name="PhoneNumber"
                        label="Phone Number"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogContent>
                    <DialogContentText>
                        enter your Passward
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="Passward"
                        name="Passward"
                        label="Passward"
                        type="Passward"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogContent>
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
                    <Button type="submit">sumbit</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}