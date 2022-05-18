import React, { Component } from "react";
import requestOptions from "../requestOptions";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginButtonPressed = this.handleLoginButtonPressed.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Login Button
  async handleLoginButtonPressed() {
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
        </div>
      </div>
    );
  }
}
