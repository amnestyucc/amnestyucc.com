import React, { Component } from "react";
import Navbar from "./Navbar";

import "../css/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar component={"Contact"} />
        <h1 id="title">Contact</h1>

        <div id="alerts">
          <a href="mailto:phillip.kong@ucc.on.ca">
            <div id="alert1" className="alert alert-danger" role="alert">
              Email: philip.kong@ucc.on.ca
            </div>
          </a>
        </div>
      </div>
    );
  }
}
