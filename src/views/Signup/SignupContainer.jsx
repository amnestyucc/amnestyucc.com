import React from "react";
import { auth, db } from "../../utils/firebase";

import Signup from "./Signup";

export default class SignupContainer extends React.Component {
	signup = (email, password, username) => {
		let newUser;
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(user => {
				newUser = {
					username: username,
					email: email,
					uid: user.user.uid
				};
			})
			.then(() => {
				db.ref("/users/").push(newUser);
			});
	};

	render() {
		return <Signup signup={this.signup} />;
	}
}
