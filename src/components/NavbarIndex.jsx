import React, { Component } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NavbarIndex.css";

export default class NavbarIndex extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <Link to="/" className="nav-link navLinkIndex">
            Amnesty International
          </Link>
          <Link to="/articles" className="nav-link navLinkIndex">
            Articles
          </Link>
          <Link to="/login" className="nav-link navLinkIndex">
            Contact Us
          </Link>
          <Link to="/login" className="nav-link navLinkIndex">
            Login or Signup
          </Link>
        </nav>
      </div>
    );
  }
}
