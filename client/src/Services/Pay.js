import axios from "axios";

function Pay(id) {
  return new Promise(function (resolve, reject) {
    var data = JSON.stringify({
      id: id,
    });

    var config = {
      method: "post",
      url: "https://flexmoney-assignment.onrender.com/fee",
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

export default Pay;
