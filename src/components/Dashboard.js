import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer.component";
import "bootstrap/dist/css/bootstrap.min.css";

class Dashboard extends Component {
  state = {
    username: "Tanish",
    task: [
      { id: 1, name: "first" },
      { id: 2, name: "second" },
      { id: 3, name: "third" },
      { id: 4, name: "fourth" },
    ],
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-content">
          <div className="row">
            <div className="col-6">
              <div className="user-card row">
                <img
                  src="https://avatars3.githubusercontent.com/u/54023346?s=400&u=36bac93400be27cd1108130797251f8545ce3a97&v=4"
                  alt="user"
                  className="col-auto"
                />
                <p className="col-12 col-md-auto user-details">
                  <strong>Tanish Agarwal</strong>
                  <br /> <em>tanishagarwal81201@gmail.com</em>
                </p>
              </div>
            </div>
            <div className="col-6">hello</div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
