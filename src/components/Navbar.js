import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Student Workspace
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/" className="nav-link">
                  Home<span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" className="nav-link">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
