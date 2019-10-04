import React from "react";

import Login from "./Login";

export default class LoginContainer extends React.Component {
	// constructor() {
	// super();
	// this.state = {};
	// }

	login = () => {};

	render() {
		return <Login login={this.login} />;
	}
}
