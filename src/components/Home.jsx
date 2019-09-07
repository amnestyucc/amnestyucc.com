import React from "react";

import Navbar from "./Navbar/NavbarContainer";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <h1>Amnesty Ucc</h1>
      </div>
    );
  }
}

export default Home;
