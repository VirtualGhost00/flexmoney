import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PageWrapper from "./Animation/PageWrapper";
import Stepper from "./Components/Stepper";
import BasicInfo from "./Components/BasicInfo";
import Batch from "./Components/Batch";

import Submit from "./Services/Submit";

function Form() {
  let navigate = useNavigate();

  const [activeStep, setStep] = useState(0);
  const [data, setData] = useState({});

  const prevStep = () => {
    setStep(activeStep - 1);
  };

  const nextStep = () => {
    if (activeStep < 1) setStep(activeStep + 1);
    else console.log(process.env.REACT_API_BASE_URL);
  };

  const submit = () => {
    Submit(data)
      .then(() => {
        console.log("Successfully Sent");
        navigate("/submitted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PageWrapper>
      <Stepper activeStep={activeStep} />
      <div className="d-flex flex-column align-items-center">
        {activeStep == 0 && <BasicInfo setData={setData} />}
        {activeStep == 1 && <Batch setData={setData} />}
        <div className="d-flex gap-4 col-6 justify-content-center mt-5">
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
            {activeStep == 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Form;
