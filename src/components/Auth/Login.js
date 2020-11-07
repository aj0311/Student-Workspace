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

      <div id="page" class="row mb-2">
        <div class="col-md-6">
          <div class="jumbotron ">
            <div id="img1">
              <svg width="6em" height="6em" viewBox="0 0 16 16" class="bi bi-book-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.5 2.687v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
            </div>

            <h1>WORKSPACE</h1>
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
              <input type="submit" id="bton" value="Login" className="btn btn-primary" />
            </div>
            
          </form>
        </div>


      </div>



    )
  }
}