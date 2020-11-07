import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer.component";
import Dashboard from "./components/Dashboard";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Navbar from "./components/Navbar";
import Navbarsecond from "./components/navbar.component";
import "./components/navbar.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AuthContext } from "./components/context/AuthContext";

function App() {
  return (
    <AuthContext>
      {({ user }) => {
        return (
          <Router>
            {user ? <Navbar /> : <Navbarsecond />}
            <div>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/dashboard/:id" component={Dashboard} />
            </div>
            <Footer />
          </Router>
        );
      }}
    </AuthContext>
  );
}

export default App;
