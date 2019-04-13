import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import firebase from "./Firebase/firebase";

import "../css/Signup.css";

export default class Signup extends Component {
  signup() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user.updateProfile());
        return user
          .updateProfile({
            displayName: document.getElementById("signupName").value
          })
          .catch(error => {
            alert(error.code, " ", error.message);
          });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode + " " + errorMessage);
      });
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupName").value = "";
    document.getElementById("signupPassword").value = "";
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1 id="title">Signup</h1>

        <form id="signupForm">
          <Link to="/login" id="signupLink">
            If you already have an account, login here!
          </Link>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="signupEmail"
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone.
            </small>
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              id="signupName"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="signupPassword"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.signup}
          >
            Signup
          </button>
        </form>
      </div>
    );
  }
}
