import React from "react";
import { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [username, setUsername] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    const user = {
      username: username,
    };
    console.log(user)
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    setUsername("");
  };

  return (
    <div>
      <h3>Create New User </h3>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label>
            Username: <br />
          </label>
          <input
            type="text"
            value={username}
            required
            onChange={onChangeUsername}
            className="form-control"
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
