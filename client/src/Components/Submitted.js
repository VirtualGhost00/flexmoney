import React from "react";
import Lottie from "react-lottie";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import animationData from "../Animation/submitted.json";

const animationOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Submitted({ item }) {
  return (
    <div className="d-flex flex-column align-items-center gap-5">
      <Lottie
        options={animationOptions}
        width={500}
        isClickToPauseDisabled={true}
      />
      <Typography variant="h3">{item} Completed</Typography>
      <Button variant="contained" component={Link} to="/">
        Go to HomePage
      </Button>
    </div>
  );
}

export default Submitted;
