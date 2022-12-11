import React from "react";

function BasicInfo() {
  return (
    <form class="col-10 mx-auto mt-3">
      <div class="mb-3">
        <label for="name" class="form-label">
          Name
        </label>
        <input type="text" class="form-control" id="name" />
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div class="mb-3">
        <label for="age" class="form-label">
          Age
        </label>
        <input type="number" class="form-control" id="age" />
      </div>
    </form>
  );
}

export default BasicInfo;
