
// import * as React from 'react';
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
import { Add } from '../../redux/itemSlice';
import Button from '@mui/material/Button';

export default function FormattedInputs() {


    const dispatch = useDispatch();
    console.log("dispatch", dispatch);
    const [open, setOpen] = React.useState(false);

    const [price, setPrice] = React.useState('')
    const [name, setName] = React.useState('')

    const handleSaveClose2 = () => {
        const item = {
            name,
            price
        }

        dispatch(Add(item))
        // setOpen(false);
    };
    return (
        <Stack direction="row" spacing={2}>
            <TextField
                label="הכנס  name of item"
                name="dateformat"
                id="name"
                type='string'
                variant="standard"
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                label="price"
                id="standard-size-normalpriceItem"
                defaultValue="Normal"
                variant="standard"
                type='number'
                onChange={(e) => setPrice(e.target.value)}
            />
            <Button onClick={handleSaveClose2} type="submit">sumbit---</Button>
        </Stack>

    );
}
