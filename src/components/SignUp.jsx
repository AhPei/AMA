import React, { Component } from "react";
import pic from "./images/mypic.jpg";

import { Link } from "react-router-dom";


class SignUp extends Component {
  state = {};
  render() {
    return (
      <div>
            <div class="flex-container">

              <div class="flex-child magenta profile-border">
              <img class="profile-image" src={pic} />    
              <br/>            
              <span>Profile</span>
              </div>
              
              <div class="flex-child green">
                <h2>Sign Up</h2>
                <h3>Please enter the details</h3>
                <hr />

                <form method="post" action="/signup" class="row">
                <div className="form-group" class="column">
                  <label for="username">Username</label><br />
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder=""
                    Required
                  />
                </div>
                <br />
                <div className="form-group" class ="column">
                  <label for="fname">First Name</label><br />
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    name="fname"
                    placeholder="Enter Your First Name"
                    Required
                  />
                </div>

                <br />
                <div className="form-group" class ="column">
                  <label for="lname">Last Name</label><br />
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    name="lname"
                    placeholder="Enter Your Last Name"
                    Required
                  />
                </div>
                <br />
                <div className="form-group" class ="column">
                  <label for="email">Email</label><br />
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    Required
                  />
                </div>
                <br />
                <div className="form-group" class ="column"> 
                  <label for="pass1">Password</label><br />
                  <input
                    type="password"
                    className="form-control"
                    id="pass1"
                    name="pass1"
                    placeholder="Create Your Password"
                    Required
                  />
                </div>
                <br />
                <div className="form-group" class ="column">
                  <label for="pass2">Confirm Password</label><br />
                  <input
                    type="password"
                    className="form-control"
                    id="pass2"
                    name="pass2"
                    placeholder="Confirm Your Password"
                    Required
                  />
                </div>
                <br />
                {/* <NavLink className="navbar-brand" to="/Password">
                <button type="submit" className="btn btn-primary">
                  Sign Up                
                </button>
                </NavLink> */}
                <Link to="/password" className="btn btn-primary">Sign up</Link>                </form>
              </div>
              
            </div>
      </div>
    );
  }
}

export default SignUp;
