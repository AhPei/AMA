import React, { Component } from "react";
import pic from "./images/mypic.jpg";

import { Link } from "react-router-dom";

class ManageAccountPackage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="flex-container">
          <div class="flex-child magenta profile-border-password">
            <img class="profile-image" src={pic} />
            <br />
            <span>Profile</span>
          </div>

          <div class="flex-child green">
            <div class="margin-border">
              <h2>Manage Account</h2>
              <h3>Please enter the details</h3>
              <hr />
              <h3>Update Personal Details</h3>
              <form method="post" action="/signup" class="row">
                <br />
                <div className="form-group" class="column-password">
                  <label for="password">Password</label>
                  <br />
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="form-control"
                    placeholder="Create Your Password"
                    Required
                  />
                </div>
                <br />
                <div className="form-group" class="column-password">
                  <label for="pass2">Confirm Password</label>
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Confirm Your Password"
                  />
                </div>
                <br />

                <div class="sign-up">
                  <Link to="/password" className="btn btn-primary">
                    Sign up
                  </Link>
                </div>
              </form>

              <hr />

              <h2>Manage Account</h2>
              <h3>Please purchase a package to use the system</h3>
              <div class="sign-up">
                <Link to="/password" className="btn btn-primary">
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageAccountPackage;
