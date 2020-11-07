import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    id: 0,
    username: "Tanish",
  };
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className="btn btn-outline-primary my-2 my-sm-0">
          Hello, {this.state.username}
        </Link>
        <Link to="/" className="btn btn-outline-primary my-2 my-sm-0">
          Logout
        </Link>
      </nav>
    );
  }
}
