import React, { useState } from "react";
import StepTracker from '@tds/core-step-tracker';
import "./step.css"

const Step = () => {
  const [page, setPage] = useState(1)
  return (
    <StepTracker
      copy="en"
      current={page}
      className="stepper"
      steps={['Plans & Addons', 'Account Creation', 'Phone Information', 'Payment Setup', 'Submit', 'Confirmation']}
    />
  )
}


export default Step;
