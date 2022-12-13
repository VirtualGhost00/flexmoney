import axios from "axios";

function Submit(dataItems) {
  return new Promise(function (resolve, reject) {
    var data = JSON.stringify(dataItems);

    var config = {
      method: "post",
      url: "http://localhost:3001/user",
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
