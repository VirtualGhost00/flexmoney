import React from "react";

function Payment() {
  return (
    <form class="col-10 mx-auto mt-3">
      <div class="mb-3">
        <label for="name" class="form-label">
          Name
        </label>
        <input type="text" class="form-control" id="name" />
      </div>

      <div class="mb-3">
        <label for="num" class="form-label">
          Card Number
        </label>
        <input type="number" class="form-control" id="num" />
      </div>

      <div class=" d-flex gap-3">
        <div class="mb-3 col-6">
          <label for="exp" class="form-label">
            Expiry Date
          </label>
          <input type="text" class="form-control" id="exp" />
        </div>
        <div class="mb-3 col-6">
          <label for="cvv" class="form-label">
            CVV
          </label>
          <input type="number" class="form-control" id="cvv" />
        </div>
      </div>
    </form>
  );
}

export default Payment;
