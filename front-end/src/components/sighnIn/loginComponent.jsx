import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl } from '@mui/material';

export default function FormDialog() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSaveClose = () => {
        // save data
        setOpen(false);
    };

    return (
        <React.Fragment>
             <Dialog
                open={open}
            > 
               <FormControl>
                <DialogTitle>Sign in</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Personal detiles
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
                         Email Address
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
                         Phone Number
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
                         Passward
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
                        Confirm Password
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
                    <Button type="submit" onClick={handleSaveClose}>sumbit</Button>
                </DialogActions>
                </FormControl>
            </Dialog>
        </React.Fragment> 
    );
}