import React from "react";

function Payment() {
  return (
    <form className="col-10 mx-auto mt-3">
      <div className="mb-3">
        <label for="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" />
      </div>

      <div className="mb-3">
        <label for="num" className="form-label">
          Card Number
        </label>
        <input type="number" className="form-control" id="num" />
      </div>

      <div className=" d-flex gap-3">
        <div className="mb-3 col-6">
          <label for="exp" className="form-label">
            Expiry Date
          </label>
          <input type="text" className="form-control" id="exp" />
        </div>
        <div className="mb-3 col-6">
          <label for="cvv" className="form-label">
            CVV
          </label>
          <input type="number" className="form-control" id="cvv" />
        </div>
      </div>
    </form>
  );
}

export default Payment;
