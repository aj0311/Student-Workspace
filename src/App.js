import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router, Route} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navbar from "./components/navbar.component"
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
/*import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
*/

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/login"  component={Login} />
      <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
}

export default App;
