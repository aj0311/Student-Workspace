import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
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

/*
<Route path="/add" exact component={Addtask} />
        <Route path="/edit/:id" exact component={EditTask} />
*/

export default App;
