import React, { useState } from 'react';
import Button from '@mui/material/Button';
import EventDetailsStage from './eventDetailsStage';
import MenuDetailsStage from './menuDetailsStage';
import Payment from './paymentStage';
import FormattedInputs from "../payment/card";

function Form() {
  const [stage, setStage] = useState(1);

  const handleNext = () => {
    setStage(stage + 1);
  };

  const handlePrevious = () => {
    setStage(stage - 1);
  };

  const handleFinish = () => {

  }

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
          <FormattedInputs />
          <Button variant="contained" color="secondary" onClick={handlePrevious}>Previous</Button>
          <Button variant="contained" color="primary" onClick={handleNext}>לסיום ואישור הזמנה</Button>

        </div>
      )}
      {stage === 4 && (
        <div>
          <h2>הזמנתך בוצעה בהצלחה!</h2>
          <Button variant="contained" color="secondary" onClick={handlePrevious}>Previous</Button>
        </div>
      )}
    </div>
  );
}

export default Form;
