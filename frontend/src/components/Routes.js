import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  Navigate,
} from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Signin,
  SignUp,
  Contact,
  ManageAccount,
  ManageAccountPackage,
} from "./index";
// import Home from "./Home";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
    };
  }

  async componentDidMount() {
    await fetch("/api/checkLogin")
      .then((response) => {
        this.setState({ isLoggedIn: response.ok });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let checkLogin:
    checkLogin = {
      if (isLoggedIn) {
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/manageaccount" component={ManageAccount} />
        <Route
          path="/manageaccountpackage"
          component={ManageAccountPackage}
        />
      } else {
        <Route path="/login" component={Signin} />
        <Route path="/signup" component={SignUp} />
    }

    return (
      <Router>
        <Switch>
          {/* <Route exact path="/">
            {this.state.isLoggedIn ? Home : Signin}
          </Route> */}
          {/* <Route
            path="/login"
            component={this.state.isLoggedIn ? Home : Signin}
          /> */}
         { checkLogin }
        </Switch>
      </Router>
    );
  }
}
