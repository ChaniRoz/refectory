import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Add } from '../../redux/eventSlice';


const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

function EventDetailsStage() {
  const [diners, setDiners] = React.useState(0);
  const [date, setDate] = React.useState(0);
  const [houer, setHouer] = React.useState('0');
  const [design, setDesign] = React.useState('Black')
  const [type, setType] = React.useState('Pareve')
  const dispatch = useDispatch();

  const handleSave = () => {
    const event = {
      diners,
      date,
      houer,
      design,
      type
    }
    console.log(event);
    dispatch(Add(event)); 
  };

  return (
    <FormControl>
      <FormLabel id="type">Event Type</FormLabel>
      <RadioGroup
        defaultValue="Pareve"
        aria-labelledby="type"
        name="type-radios"
        onChange={(e) => setType(e.target.value)}
      >
        <FormControlLabel value="Fleshy" control={<BpRadio />} label="Fleshy" />
        <FormControlLabel value="Milky" control={<BpRadio />} label="Milky" />
        <FormControlLabel value="Pareve" control={<BpRadio />} label="Pareve" />
      </RadioGroup>
      <TextField
        id="number"
        label="Number of Diners"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        onChange={(e) => setDiners(e.target.value)}
      />
      <TextField
        id="date"
        label="Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        onChange={(e) => setDate(e.target.value)}
      />
      <TextField
        id="houer"
        label="Houer"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        onChange={(e) => setHouer(e.target.value)}
      />
      <FormLabel id="design">The design of the hall</FormLabel>
      <RadioGroup
        defaultValue="Black"
        aria-labelledby="demo-customized-radios"
        name="design-radios"
        onChange={(e) => setDesign(e.target.value)}
      >
        <FormControlLabel value="Black" control={<BpRadio />} label="Black" />
        <FormControlLabel value="Blue" control={<BpRadio />} label="Blue" />
        <FormControlLabel value="Beige" control={<BpRadio />} label="Beige" />
      </RadioGroup>
      <Button onClick={handleSave} type="submit">הבא</Button>
    </FormControl>

  );
}
export default EventDetailsStage;   