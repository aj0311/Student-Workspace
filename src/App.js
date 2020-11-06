import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Footer from "./components/Footer.component";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
