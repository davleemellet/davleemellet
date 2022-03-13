import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


export default function HorizontalLabelPositionBelowStepper(props) {
	const {steps, step} = props;
  return (
    // <Box sx={{ width: '100%' }}>
	<Box maxWidth='lg' m={'0 auto'} mt={4}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}