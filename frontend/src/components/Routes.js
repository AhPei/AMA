import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Home from "./Home";
import Signin from "./Signin";
import SignUp from "./SignUp";
import Contact from "./Contact";
import ManageAccount from "./ManageAccount";
import ManageAccountPackage from "./ManageAccountPackage";
import MachineLearning from "./MachineLearning";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={SignUp} />
          <Route path="/contact" component={Contact} />
          <Route path="/manageaccount" component={ManageAccount} />
          <Route
            path="/manageaccountpackage"
            component={ManageAccountPackage}
          />
          <Route path="/ml" component={MachineLearning} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
