import React, { useState } from 'react';
import Button from '@mui/material/Button';
import EventDetailsStage from './eventDetailsStage';
import MenuDetailsStage from './menuDetailsStage';
import Payment from './paymentStage';
function Form() {
  const [stage, setStage] = useState(1);

  const handleNext = () => {
    setStage(stage + 1);
  };

  const handlePrevious = () => {
    setStage(stage - 1);
  };

  return (
    <div>
      {stage === 1 && (
        <div>
          <div>
            <h2>Event details</h2>
            <EventDetailsStage />
          </div>
          <Button variant="contained" color="primary" onClick={handleNext}>Start</Button>
        </div>
      )}
      {stage === 2 && (
        <div>
          <div>
            <h2>Select Menu</h2>
            <MenuDetailsStage />
          </div>
          <Button variant="contained" color="secondary" onClick={handlePrevious}>Previous</Button>
          <Button variant="contained" color="primary" onClick={handleNext}>For payment</Button>
        </div>
      )}
      {stage === 3 && (
        <div>
          <h2>Payment</h2>
          <Payment/>
          <Button variant="contained" color="secondary" onClick={handlePrevious}>Previous</Button>
        </div>
      )}
    </div>
  );
}

export default Form;
