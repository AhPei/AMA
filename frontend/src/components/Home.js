import React, { Component } from "react";
import "./style/Home.scss";
import { NavLink } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogoutButtonPressed = this.handleLogoutButtonPressed.bind(this);
  }

  // Logout Button
  async handleLogoutButtonPressed() {
    await fetch("/api/signout")
      .then((response) => {
        if (response.ok) this.props.history.push("/login");
        return response.json();
      })
      .then((data) => {
        console.log(data["Message"]);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Automated Assessment Marking System</h1>
            <p className="card-text">
              Mark your assessment within seconds Tired of marking hundreds of
              papaers at once with in a limited time? Join us and save your time
              as this system marks all the papers automatically.
            </p>
            <NavLink className="navbar-brand btn" to="/signup">
              SIGNUP
            </NavLink>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleLogoutButtonPressed}
            >
              Log Out
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://lipstiq.com/wp-content/uploads/2018/03/NWKA-.jpg"
            alt="..."
            width="100%"
            height="auto"
          />
        </div>
      </div>
    );
  }
}

export default Home;
