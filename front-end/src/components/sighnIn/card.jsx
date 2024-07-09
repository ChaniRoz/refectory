import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { NumericFormat } from 'react-number-format';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(
  { onChange, name, ...other },
  ref
) {
  return (
    <IMaskInput
      {...other}
      mask="0000 - 0000 - 0000"
      definitions={{

      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};




export default function FormattedInputs(props) {
  console.log("i am in card an my props is :",props);
  const [values, setValues] = useState({
    numCard: '',
    dateCard: '',
    cvc: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Stack direction="row" spacing={2}>
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">הכנס מספר כרטיס אשראי</InputLabel>
        <Input
          // value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
    
      <TextField
        onChange={handleChange}
        name="dateformat"
        id="standard-size-normal"
        type='number'
        variant="standard"
      />
  
    
    </Stack>
  );
}
