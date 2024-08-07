import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { NumericFormat } from 'react-number-format';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button, FormLabel } from '@mui/material';
import moment from 'moment';
import MenuDetailsStage from '../form/menuDetailsStage';

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

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
  { onChange, name, ...other },
  ref
) {
  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
    />
  );
});

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs() {
  const [showFinished, setShowFinished] = React.useState(false);
  const [showPrev, setShowPrev] = React.useState(false);
  // const [values, setValues] = useState({
  //   numCard: '',
  //   dateCard: '',
  //   cvc: '',
  // });
  const [numCard, setNumCard] = React.useState(0);
  const [dateCard, setDateCard] = React.useState(0);
  const [cvc, setCvc] = React.useState(0);

  const formatDate = (date) => {
    return moment(date).format('MM/YYYY');
  }
  const handlePrev = () => {
    setShowPrev(true);
  };

  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleSaveAndNext = () => {

    setShowFinished(true);
  };

  return (
    <div>
      {!showFinished && !showPrev && (
        <Stack direction="row" spacing={2}>
          <FormLabel id="type">Payment</FormLabel>
          <FormControl variant="standard">
            <InputLabel htmlFor="formatted-text-mask-input">הכנס מספר כרטיס אשראי</InputLabel>
            <Input
              onChange={(e) => setNumCard(e.target.value)}
              name="textmask"
              id="formatted-text-mask-input"
              inputComponent={TextMaskCustom}
            />
          </FormControl>
          <br />
          <br />
          <br></br>
          {/* <TextField
        label="הכנס תאריך כרטיס"
        value={values.numberformat}
        onChange={handleChange}
        name="dateformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumericFormatCustom,
        }}
        type='date'
        variant="standard"
      />
      <br />
      <br /> */}
          <TextField
            label="הכנס מספר CVC"
            // value={values.numberformat}
            onChange={(e) => setCvc(e.target.value)}
            name="dateformat"
            id="standard-size-normal"
            InputProps={{
              inputComponent: NumericFormatCustom,
            }}
            type='number'
            variant="standard"
          />
          <TextField
            label="תוקף כרטיס (חודש/שנה)"
            type="month"
            // value={values.cardExpiration} // שדה ב-state שלך לאחסון התאריך
            onChange={(e) => setDateCard(e.target.value)}
          />
          {/* <TextField
            label="Size"
            id="standard-size-normal"
            defaultValue="Normal"
            variant="standard"
            type='date'

          /> */}
          <Button variant="contained" color="primary" onClick={handleSaveAndNext}>לסיום ואישור הזמנה</Button>
          <Button variant="contained" onClick={handlePrev} sx={{ mt: 2 }}>
            Previous
          </Button>
        </Stack>
      )}
      {showFinished && (
        <div>
          <h2>הזמנתך בוצעה בהצלחה!</h2>
        </div>
      )}
      {showPrev && <MenuDetailsStage />}
    </div>
  );
}
