import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="btn btn-outline-primary my-2 my-sm-0">
          Login
        </Link>
        <Link to="/signup" className="btn btn-outline-primary my-2 my-sm-0">
          Signup
        </Link>
      </nav>
    );
  }
}
