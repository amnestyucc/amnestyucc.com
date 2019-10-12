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
		// console.log(route.replace("/", ""));
		switch (route.replace("/", "")) {
			case "login":
				this.setState({ activeLink: "Login" });
				break;
			case "signup":
				this.setState({ activeLink: "Signup" });
				break;
			case "articles":
				this.setState({ activeLink: "Articles" });
				break;
			case "":
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
