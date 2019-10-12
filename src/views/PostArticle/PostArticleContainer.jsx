import React from "react";

import PostArticle from "./PostArticle";
import { auth, db, storage } from "../../utils/firebase";
import { admins } from "../../utils/admins";

export default class PostArticleContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null,
			image: null
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

	onFileChange = e => {
		let file = e.target.files[0];
		this.setState({
			image: file.name,
			file: file
		});
	};

	postArticle = data => {
		let article = {
			title: data.title,
			author: data.author,
			date: data.date,
			image: this.state.image,
			body: data.body
		};

		db.ref("/articles/").push(article);

		var imageRef = storage.ref("/images/" + this.state.image);
		var uploadTask = imageRef.put(this.state.file);

		uploadTask.on(
			"state_changed",
			snapshot => {},
			error => {
				alert(error.code, error.message);
			},
			() => {}
		);
	};

	render() {
		return (
			<PostArticle
				redirectNonAdmins={this.redirectNonAdmins}
				postArticle={this.postArticle}
				onFileChange={this.onFileChange}
			></PostArticle>
		);
	}
}
