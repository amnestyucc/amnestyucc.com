import React from "react";

import { auth } from "../../utils/firebase";
import Login from "./Login";

export default class LoginContainer extends React.Component {
	login = (email, password) => {
		auth.signInWithEmailAndPassword(email, password).catch(err => {
			alert(err.code, err.message);
		});
	};

	render() {
		return <Login login={this.login} />;
	}
}
