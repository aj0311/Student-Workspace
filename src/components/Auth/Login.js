import React, { Component } from "react";

import styles from './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    }

    console.log(user);

    this.setState({
      username: '',
      password: '',
    })
  }

  render() {
    return (

      <div  id="page" class="row mb-2">
        <div class="col-md-6">
          <div class="jumbotron">
            <h1>Navbar example</h1>
            <p class="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport.</p>
            </div>
        </div>

        <div class="col-md-6" id="login">
          <h3>Login</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <input type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="form-group">
              <label>PassWord: </label>
              <input type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
        </div>


      </div>



    )
  }
}