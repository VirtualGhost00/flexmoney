import React from "react";
import { Link } from "react-router-dom";
import { Button, Paper, Typography } from "@mui/material";
import Lottie from "react-lottie";

import PageWrapper from "./Animation/PageWrapper";
import animationData from "./Animation/yoga.json";

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Home() {
  return (
    <PageWrapper>
      <div class="d-flex mx-3 align-items-center h-100">
        <Lottie options={animationOptions} class="col-6" />
        <div class="col-6">
          <div class="d-flex flex-column align-items-center gap-3">
            <Typography variant="h3">Join Our Club</Typography>
            <Typography variant="h2">Yoga for you Healthy Life</Typography>
            <Button
              variant="contained"
              component={Link}
              to="registration"
              sx={{ width: "50%" }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
