import React, { Component } from "react";
import Navbar from "../navbar.component";
import Footer from "../Footer.component";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeemailID = this.onChangeemailID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      emailID: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeemailID(e) {
    this.setState({
      emailID: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      emailID: this.state.emailID,
      password: this.state.password,
    };

    console.log(user);

    this.setState({
      username: "",
      emailID: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <div className="main-content">
          <h3>Signup</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="form-group">
              <label>EmailID: </label>
              <input
                type="password"
                required
                className="form-control"
                value={this.state.emailID}
                onChange={this.onChangeemailID}
              />
            </div>
            <div className="form-group">
              <label>PassWord: </label>
              <input
                type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Signup" className="btn btn-primary" />
            </div>
          </form>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}
