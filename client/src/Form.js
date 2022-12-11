import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PageWrapper from "./Animation/PageWrapper";
import Stepper from "./Components/Stepper";
import BasicInfo from "./Components/BasicInfo";
import Batch from "./Components/Batch";
import Payment from "./Components/Payment";

function Form() {
  let navigate = useNavigate();

  const [activeStep, setStep] = useState(0);

  const prevStep = () => {
    setStep(activeStep - 1);
  };

  const nextStep = () => {
    if (activeStep < 2) setStep(activeStep + 1);
    else navigate("/submitted");
  };

  return (
    <PageWrapper>
      <Stepper activeStep={activeStep} />
      <div class="d-flex flex-column align-items-center">
        {activeStep == 0 && <BasicInfo />}
        {activeStep == 1 && <Batch />}
        {activeStep == 2 && <Payment />}
        <div class="d-flex gap-4 col-6 justify-content-center mt-5">
          {activeStep > 0 && (
            <Button
              variant="contained"
              sx={{ width: "50%" }}
              onClick={prevStep}
            >
              Back
            </Button>
          )}
          <Button variant="contained" sx={{ width: "50%" }} onClick={nextStep}>
            {activeStep == 2 ? "Make Payment" : "Next"}
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Form;
