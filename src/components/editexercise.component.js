import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";

function EditExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/" + params.id)
      .then((response) => {
        setUsername(response.data.username)
          setDescription(response.data.description)
          setDuration(response.data.duration)
          setDate(new Date(response.data.date))
      })

      .catch((err) => console.log(err));

    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        setUsers(response.data.map((user) => user.username));
        setUsername(response.data[0].username);
      }
    });
  }, [params.id]);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeDescripton = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };
  const onChangeDate = (date) => {
    setDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };
    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/update/" + params.id, exercise)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  return (
    <div>
      <h1>Edit New Exercise Log</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            onChange={onChangeUsername}
            value={username}
          >
            {users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            value={description}
            onChange={onChangeDescripton}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label> Duration (in minutes): </label>
          <input
            type="text"
            required
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>

        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>
        <br />
        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default EditExercise;
