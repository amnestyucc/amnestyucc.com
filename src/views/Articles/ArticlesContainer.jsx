import React from "react";

import { title } from "./styles.module.scss";
import { admins } from "../../utils/admins";
import { auth, db } from "../../utils/firebase";
import Articles from "./Articles";

export default class ArticlesContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null,
			admin: false
		};
	}

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({ user }, () => {
					this.checkIfAdmin();
				});
			}
		});
	}

	checkIfAdmin = async () => {
		let email;
		if (!this.state.user) return;
		for (let admin of admins) {
			db.ref("/users/")
				.once("value")
				.then(snapshot => {
					snapshot.forEach(user => {
						if (user.val().uid === this.state.user.uid) {
							email = user.val().email;
						}
					});
				})
				.then(() => {
					if (email === admin) {
						this.setState({
							admin: true
						});
					}
				});
		}
	};

	render() {
		return <Articles admin={this.state.admin}></Articles>;
	}
}
