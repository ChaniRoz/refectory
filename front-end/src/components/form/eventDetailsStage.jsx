import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Save } from '../../redux/eventSlice';
import MenuDetailsStage from './menuDetailsStage';
import { init } from '../../redux/eventSlice';

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
  const eventData = init;
  const [diners, setDiners] = React.useState(eventData.diners);
  const [date, setDate] = React.useState(eventData.date);
  const [hour, setHour] = React.useState(eventData.hour);
  const [design, setDesign] = React.useState(eventData.design)
  const [type, setType] = React.useState(eventData.type)
  const [showMenuDetailsStage, setShowMenuDetailsStage] = React.useState(false);
  const dispatch = useDispatch();

  const handleSaveAndNext = (e) => {
    const event = {
      diners,
      date,
      hour,
      design,
      type
    }
    dispatch(Save(event));
    setShowMenuDetailsStage(true);
  };


  return (
    <div>
      {!showMenuDetailsStage && (
        <Box component="form" height={200}
          width={200}
          my={4}
          onSubmit={handleSaveAndNext}>
          <FormLabel id="type">Event Type</FormLabel>
          <RadioGroup
            defaultValue="Pareve"
            aria-labelledby="type"
            name="type-radios"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <FormControlLabel value="Fleshy" control={<BpRadio />} label="Fleshy" />
            <FormControlLabel value="Milky" control={<BpRadio />} label="Milky" />
            <FormControlLabel value="Pareve" control={<BpRadio />} label="Pareve" />
          </RadioGroup>
          <TextField
            required
            id="number"
            label="number of diners"
            type="number"
            value={diners}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={(e) => setDiners(e.target.value)}
          />
          <TextField
            required
            id="date"
            label="Date"
            type="date"
            value={date}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            required
            id="hour"
            label="Houer"
            type="time"
            value={hour}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={(e) => setHour(e.target.value)}
          />
          <br />
          <FormLabel id="design">The design of the hall</FormLabel>
          <RadioGroup
            defaultValue="Black"
            aria-labelledby="demo-customized-radios"
            name="design-radios"
            value={design}
            onChange={(e) => setDesign(e.target.value)}
          >
            <FormControlLabel value="Black" control={<BpRadio />} label="Black" />
            <FormControlLabel value="Blue" control={<BpRadio />} label="Blue" />
            <FormControlLabel value="Beige" control={<BpRadio />} label="Beige" />
          </RadioGroup>
          <Button type="submit">Start</Button>
        </Box>
      )}
      {showMenuDetailsStage && (
        <div>
          <MenuDetailsStage />
        </div>)}
    </div>

  );
}
export default EventDetailsStage;   