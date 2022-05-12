import React, { Component } from "react";
import pic from "./images/mypic.jpg";


import { Link } from "react-router-dom";


class Password extends Component {
  state = {};
  render() {
    return (
      <div>
            <div class="flex-container">

              <div class="flex-child magenta profile-border-password">
              <img class="profile-image" src={pic} />    
              <br/>            
              <span>Profile</span>
              </div>
              
              <div class="flex-child green">
                <div class="margin-border">
                  <h2>Sign Up</h2>
                  <h3>Please enter the details</h3>
                  <hr />
                  <h3>Account Details</h3> 
                  <form method="post" action="/signup" class="row">
                  <br />
                  <div className="form-group" class ="column-password"> 
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
                  <div className="form-group" class ="column-password">
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
                  
                  <div class="sign-up">
                    <Link to="/password" className="btn btn-primary">Sign up</Link> 
                  </div>

                  </form>
                </div>
              </div>
              
            </div>
      </div>
    );
  }
}

export default Password;
