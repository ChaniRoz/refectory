
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
// import {  initUser } from '../../redux/userSlice';

export default function ProfileDialog() {

    const [open, setOpen] = React.useState(true);


    const handleClose = () => {
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
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Profile</DialogTitle>
                {/* {initUser} */}
                <DialogActions>
                    <Button onClick={handleClose}>close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}