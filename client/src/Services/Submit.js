import React from "react";
import axios from "axios";

function Submit(data) {
  return new Promise(function (resolve, reject) {
    axios
      .post(`${process.env.REACT_API_BASE_URL}/user`, data)
      .then(() => resolve())
      .catch(function (error) {
        reject(error);
      });
  });
}

export default Submit;
