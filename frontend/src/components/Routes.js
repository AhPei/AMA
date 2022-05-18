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
    // this.state = {
    //   isLoggedIn: null,
    // };
  }

  // async componentDidMount() {
  // await fetch("/api/checkLogin")
  //   .then((response) => {
  //     this.setState({ isLoggedIn: response.ok });
  //   })
  //   .catch((err) => console.log(err));
  // }

  render() {
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
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Signin} />
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
