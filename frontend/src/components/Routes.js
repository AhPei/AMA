import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
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
        if (response.ok) this.setState({ isLoggedIn: true });
        else this.setState({ isLoggedIn: false });
        // console.log(this.state.isLoggedIn);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/login" component={Signin} /> */}
          <Route
            path="/login"
            component={!this.state.isLoggedIn ? Signin : Home}
          />
          <Route path="/signup" component={SignUp} />
          <Route path="/contact" component={Contact} />
          <Route path="/manageaccount" component={ManageAccount} />
          <Route
            path="/manageaccountpackage"
            component={ManageAccountPackage}
          />
        </Switch>
      </Router>
    );
  }
}
