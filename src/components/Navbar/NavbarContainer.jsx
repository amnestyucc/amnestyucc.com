import React from "react";
import { withRouter } from "react-router-dom";

import Navbar from "./Navbar";

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      activeLink: null
    };
  }

  componentDidMount() {
    const route = this.props.location.pathname;
    this.populateActiveLink(route);
  }

  populateActiveLink = route => {
    switch (route) {
      case "/":
        console.log("hi");
        this.setState({ activeLink: "Home" });
        break;
      default:
        this.setState({ activeLink: "Home" });
    }
  };

  render() {
    const { activeLink } = this.state;
    return <Navbar activeLink={activeLink}></Navbar>;
  }
}

const Nav = withRouter(NavbarContainer);
export default Nav;
