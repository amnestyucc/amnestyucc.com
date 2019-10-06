import React from "react";

import PostArticle from "./PostArticle";
import { auth, db } from "../../utils/firebase";
import { admins } from "../../utils/admins";

export default class PostArticleContainer extends React.Component {
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
				this.setState({
					user: user
				});
			}
		});
	}

	redirectNonAdmins = () => {
		let email;
		for (let admin of admins) {
			db.ref("/users/")
				.once("value")
				.then(snapshot => {
					snapshot.forEach(user => {
						if (user.val().uid === this.state.user.uid) {
							email = user.val().email;
						}
						if (email == admin) return;
					});
				});
		}
	};

	render() {
		return (
			<PostArticle redirectNonAdmins={this.redirectNonAdmins}></PostArticle>
		);
	}
}
