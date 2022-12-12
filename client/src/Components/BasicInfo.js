import React from "react";

function BasicInfo({ setData }) {
  return (
    <form className="col-10 mx-auto mt-3">
      <div className="mb-3">
        <label for="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className="mb-3">
        <label for="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          onChange={(e) =>
            setData((prev) => ({ ...prev, age: e.target.value }))
          }
        />
      </div>

      <div className="mb-3">
        <label for="age" className="form-label">
          Gender
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          value="0"
          onChange={(e) =>
            setData((prev) => ({ ...prev, gender: e.target.value }))
          }
        >
          <option value="0">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="Not wish to share">Does Not Wish to Share</option>
        </select>
      </div>
    </form>
  );
}

export default BasicInfo;
