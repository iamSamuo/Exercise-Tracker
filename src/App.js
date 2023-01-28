import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exerciseList.component";
import EditExercise from "./components/editexercise.component";
import CreateExercise from "./components/createExercise.component";
import CreateUser from "./components/createUser.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element={<ExerciseList />}></Route>
          <Route path="/edit/:id" element={<EditExercise />}></Route>
          <Route path="/create" element={<CreateExercise />}></Route>
          <Route path="/user" element={<CreateUser />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
