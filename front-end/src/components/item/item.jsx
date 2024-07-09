import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { NumericFormat } from 'react-number-format';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { Add } from '../../redux/itemSlice';


export default function FormattedInputs() {

    const dispatch = useDispatch();


    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [open, setOpen] = React.useState(false);


    const handleSaveClose = () => {
        const item = {
            name,
            price
        }
        dispatch(Add(item))
        setOpen(false);
    };
    return (
        <Stack direction="row" spacing={2}>
            <TextField
                label="enter item"
                onChange={(e) => setName(e.target.value)}
                name="item name"
                id="standard-size-normal"
                type='string'
                variant="standard"
            />
            <TextField
                label="price"
                id="standard-size-normal"
                defaultValue="Normal"
                variant="standard"
                type='number'
                onChange={(e) => setPrice(e.target.value)}
            />
            <Button onClick={handleSaveClose} type="submit">sumbit</Button>

        </Stack>
    );
}
