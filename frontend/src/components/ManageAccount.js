import React, { Component } from "react";
import pic from "./images/mypic.jpg";

import { Link } from "react-router-dom";

class ManageAccount extends Component {
  state = {};
  render() {
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
              <h2>Manage Account</h2>
              <h3>Please enter the details</h3>
              <hr />
              <h3>Update Personal Details</h3>
              <form method="post" action="/signup" class="row">
                <div className="form-group" class="column">
                  <label for="username">Username</label>
                  <br />
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
                  />
                </div>
                <br />
                <div className="form-group" class="column"></div>
                <br />
                <br />
                <br />
                <br />

                <div class="next-page">
                  <Link to="/manageaccountpackage" className="btn btn-primary">
                    Next Page
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageAccount;
