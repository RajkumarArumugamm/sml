import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Choose Plan',
  'Sign Up',
  'About You',
  'Success'
];

export default function HorizontalLinearAlternativeLabelStepper(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={parseInt(props.step)} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}