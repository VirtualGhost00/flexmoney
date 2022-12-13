import React from "react";
import axios from "axios";

function Submit(id) {
  return new Promise(function (resolve, reject) {
    var data = JSON.stringify({
      id: id,
    });

    var config = {
      method: "post",
      url: "http://localhost:3001/find",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => resolve(response.data))
      .catch(function (error) {
        reject(error);
      });
  });
}

export default Submit;