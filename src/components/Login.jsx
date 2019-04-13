import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import firebase, { auth } from "./Firebase/firebase";

import "../css/qcss/buttons.css";
import "../css/Login.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      items: [],
      user: null
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  login() {
    let email = document.getElementById("emailLogin").value;
    let password = document.getElementById("passwordLogin").value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user;
        this.setState({
          user
        });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode + " " + errorMessage);
      });

    document.getElementById("emailLogin").value = "";
    document.getElementById("passwordLogin").value = "";
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1 id="title">Login</h1>

        {this.state.user ? (
          <div>
            <h3 id="loggedInText">You are logged in</h3>
            <br />
            <button
              className="button primary"
              onClick={this.logout}
              id="logoutButton"
            >
              Logout
            </button>
          </div>
        ) : (
          <form id="loginForm">
            <Link to="/signup" id="signupLink">
              If you don't have an account, sign up here!
            </Link>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="emailLogin"
              />
              <small className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="passwordLogin"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.login}
            >
              Login
            </button>
          </form>
        )}
      </div>
    );
  }
}
