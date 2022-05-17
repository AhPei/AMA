import React, { Component } from "react";
import requestOptions from "../requestOptions";
// import csrftoken from "../csrftoken";

// import { login, signup, signedin, logout } from "./AuthContext";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginButtonPressed = this.handleLoginButtonPressed.bind(this);
    // this.handleEmail = this.handleEmail.bind(this);
    // this.handlePassword = this.handlePassword.bind(this);
    // this.handleLogoutButtonPressed = this.handleLogoutButtonPressed.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // handleEmail(e) {
  //   this.setState({ email: e.target.value });
  // }

  // handlePassword(e) {
  //   this.setState({ password: e.target.value });
  // }

  // Login Button
  async handleLoginButtonPressed() {
    // // Login with react firebase
    // if (await signedin()) {
    //   console.log("Logout");
    //   return logout();
    //   // return this.props.history.push("/");
    // }

    // try {
    //   const email = this.state.email,;
    //   const password = this.state.password;
    //   await login(email, password);
    //   return this.props.history.push("/");
    // } catch {
    //   console.log("failed to login");
    // }
    // ---------------------
    const body = {
      email: this.state.email,
      password: this.state.password,
    };
    await fetch("/api/signin", requestOptions("POST", body))
      .then((response) => {
        if (response.ok) this.props.history.push("/");
        return response.json();
      })
      .then((data) => {
        console.log(data["Message"]);
      })
      .catch((err) => console.log(err));
    // sessionStorage.setItem("Auth Token", data);
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <div className="mb-2">
          <div className="form-group">
            <label for="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter Your Email"
              Required
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label for="password">Password*</label>
            <input
              type="password"
              id="Password"
              name="password"
              className="form-control"
              placeholder="Enter Your Password"
              Required
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleLoginButtonPressed}
          >
            Log In
          </button>
          {/* <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleLogoutButtonPressed}
          >
            Log Out
          </button> */}
        </div>
      </div>
    );
  }
}
