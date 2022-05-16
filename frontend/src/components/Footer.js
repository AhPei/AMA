import React, { Component } from "react";
import "./style/Footer.scss";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer py-2 fixed-bottom">
        <div className="container">
          <p className="m-0 text-center">Copyright &copy; Your Website 2020</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
