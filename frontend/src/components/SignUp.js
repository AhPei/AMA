import React, { Component } from "react";
import pic from "./images/mypic.jpg";
import requestOptions from "../requestOptions";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      uname: null,
      fname: null,
      lname: null,
      phone: null,
      current_step: 1,
      total_steps: 2,
    };
    // this.handleEmail = this.handleEmail.bind(this);
    // this.handlePassword = this.handlePassword.bind(this);
    // this.handleUname = this.handleUname.bind(this);
    // this.handleFname = this.handleFname.bind(this);
    // this.handleLname = this.handleLname.bind(this);
    // this.handlePhone = this.handlePhone.bind(this);
    this.handleRegisterButtonPressed =
      this.handleRegisterButtonPressed.bind(this);
    this.goToNextClick = this.goToNextClick.bind(this);
    this.goToPreviousClick = this.goToPreviousClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleEmail(e) {
  //   this.setState({
  //     email: e.target.value,
  //   });
  // }

  // handlePassword(e) {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // }
  // handleUname(e) {
  //   this.setState({
  //     uname: e.target.value,
  //   });
  // }

  // handleFname(e) {
  //   this.setState({
  //     fname: e.target.value,
  //   });
  // }
  // handleLname(e) {
  //   this.setState({
  //     lname: e.target.value,
  //   });
  // }

  // handlePhone(e) {
  //   this.setState({
  //     phone: e.target.value,
  //   });
  // }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  goToNextClick(e) {
    this.setState({ current_step: this.state.current_step + 1 });
  }

  goToPreviousClick(e) {
    this.setState({ current_step: this.state.current_step - 1 });
  }

  // Register Button
  async handleRegisterButtonPressed() {
    const body = {
      email: this.state.email,
      password: this.state.password,
      uname: this.state.uname,
      fname: this.state.fname,
      lname: this.state.lname,
      phone: this.state.phone,
    };
    await fetch("/api/signup", requestOptions("POST", body))
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
    const current_step = this.state.current_step;
    const total_steps = this.state.total_steps;

    let SignUpForm;
    SignUpForm = (
      <div>
        <div style={{ display: current_step === 2 ? "none" : "block" }}>
          <div className="form-group" class="column">
            <label for="uname">Username</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="username"
              name="uname"
              placeholder="Enter Your Username"
              Required
              value={this.state.uname}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group" class="column">
            <label for="fname">First Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              placeholder="Enter Your First Name"
              Required
              value={this.state.fname}
              onChange={this.handleChange}
            />
          </div>

          <br />
          <div className="form-group" class="column">
            <label for="lname">Last Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="lname"
              name="lname"
              placeholder="Enter Your Last Name"
              Required
              value={this.state.lname}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group" class="column">
            <label for="email">Email</label>
            <br />
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter Your Email Address"
              Required
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group" class="column">
            <label for="phone">Contact Number </label>
            <br />
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Phone number"
              Required
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
        </div>
        {/* ----------Page 2-------------- */}
        <div style={{ display: current_step === 2 ? "block" : "none" }}>
          <div className="form-group" class="column-password">
            <label for="password">Password</label>
            <input
              type="password"
              id="Password"
              name="password"
              className="form-control"
              placeholder="Create Your Password"
              Required
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group" class="column-password">
            <label for="pass2">Confirm Password</label>
            <br />
            <input
              type="password"
              className="form-control"
              id="pass2"
              name="pass2"
              placeholder="Confirm Your Password"
              Required
              // value={this.state.password}
              // onChange={this.handlePassword}
            />
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <div class="flex-container">
          <div class="flex-child magenta profile-border">
            <img class="profile-image" src={pic} />
            <br />
            <span>Profile</span>
          </div>

          <div class="flex-child green">
            <div class="margin-border">
              <h2>Sign Up</h2>
              <h3>Please enter the details</h3>
              <hr />

              <div class="row">
                {SignUpForm}
                <div class="next-page">
                  <button
                    disabled={current_step === 1}
                    onClick={this.goToPreviousClick}
                  >
                    Back Page
                  </button>
                  <button
                    disabled={current_step === total_steps}
                    onClick={this.goToNextClick}
                  >
                    Next Page
                  </button>
                </div>
                <button onClick={this.handleRegisterButtonPressed}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
