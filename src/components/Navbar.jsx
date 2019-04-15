import React, { Component } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.css";

export default class Navbar extends Component {
  burgerClicked() {
    var links = document.querySelector(".nav-links");
    console.log(links);
    links.classList.toggle("links-active");
  }

  render() {
    if (this.props.component === "Home") {
      return (
        <nav className="nav">
          <Link to="/">
            <h3 className="logo">Amnesty International</h3>
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login/Signup</Link>
            </li>
          </ul>
          <div className="burger" onClick={this.burgerClicked}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </nav>
      );
    } else if (this.props.component === "Contact") {
      return (
        <nav className="nav">
          <Link to="/">
            <h3 className="logo">Amnesty International</h3>
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/contact" className="active">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login">Login/Signup</Link>
            </li>
          </ul>
          <div className="burger" onClick={this.burgerClicked}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </nav>
      );
    } else if (this.props.component === "Articles") {
      return (
        <nav className="nav">
          <Link to="/">
            <h3 className="logo">Amnesty International</h3>
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles" className="active">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login/Signup</Link>
            </li>
          </ul>
          <div className="burger" onClick={this.burgerClicked}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </nav>
      );
    } else if (this.props.component === "Login/Signup") {
      return (
        <nav className="nav">
          <Link to="/">
            <h3 className="logo">Amnesty International</h3>
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login" className="active">
                Login/Signup
              </Link>
            </li>
          </ul>
          <div className="burger" onClick={this.burgerClicked}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </nav>
      );
    } else if (this.props.component === "Login/Signup") {
      return (
        <nav className="nav">
          <Link to="/">
            <h3 className="logo">Amnesty International</h3>
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login" className="active">
                Login/Signup
              </Link>
            </li>
          </ul>
          <div className="burger" onClick={this.burgerClicked}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </nav>
      );
    }
  }
}

// componentDidMount() {
//   //   if()
//   // }

//   render() {
//     if(this.props.component == "Home") {
//       return (
//         <div>
//       )
//     }
//   }
// }
