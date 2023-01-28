import React from "react";
import { Link } from "react-router-dom";

function Exercise({
  exercise: { username, description, duration, date, _id },
  deleteExercise,
}) {

  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + _id}>edit</Link> |
        <a href="#" onClick={() => deleteExercise(_id)}>
          delete
        </a>
      </td>
    </tr>
  );
}

export default Exercise;
