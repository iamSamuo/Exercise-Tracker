import React, { useEffect, useState } from "react";
import axios from "axios";
import Exercise from "./exercise.component";

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => setExercises(response.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data));
    setExercises(exercises.filter((el) => el._id !== id));
  };

  return (
    <div>
      <h3> Logged Exercises </h3>

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((currentexercise) => {
            return (
              <Exercise
                exercise={currentexercise}
                deleteExercise={deleteExercise}
                key={currentexercise._id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExerciseList;
