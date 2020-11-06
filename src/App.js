
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router, Route} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navbar from "./components/navbar.component"
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>

      <div className="container">
      <Navbar />
      <br/>
      <Route path="/login"  component={Login} />
      <Route path="/signup" component={Signup} />
      </div>
      <Navbar />
      <br />
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/workspace/:id" exact component={Dashboard} />
      </div>
      <br />
      <Footer />
    </Router>
  );
}

export default App;
