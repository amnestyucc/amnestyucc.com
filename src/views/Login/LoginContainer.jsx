import React from "react";

import { auth } from "../../utils/firebase";
import Login from "./Login";

export default class LoginContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null
		};
	}

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({ user });
			}
		});
	}

	login = (email, password) => {
		auth.signInWithEmailAndPassword(email, password).catch(err => {
			alert(err.code, err.message);
		});
	};

	logout = () => {
		auth.signOut().then(() => {
			this.setState({
				user: null
			});
		});
	};

	render() {
		return (
			<Login login={this.login} logout={this.logout} user={this.state.user} />
		);
	}
}
