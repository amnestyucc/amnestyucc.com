import React from "react";

import Nav from "../../components/Navbar/NavbarContainer";

import "../../styles/styles.scss";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <h1 className="title">Amnesty UCC</h1>
      </div>
    );
  }
}

export default Home;
