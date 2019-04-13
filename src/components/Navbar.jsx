import React, { Component } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <Link to="/" className="nav-link navLink">
            Amnesty International
          </Link>
          <Link to="/articles" className="nav-link navLink">
            Articles
          </Link>
          <Link to="/test" className="nav-link navLink">
            Contact Us
          </Link>
          <Link to="/login" className="nav-link navLink">
            Login or Signup
          </Link>
        </nav>
      </div>
    );
  }
}
