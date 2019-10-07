import React from "react";

import Navbar from "../../components/Navbar/NavbarContainer";
import {
	postArticleForm,
	title,
	postArticleInput,
	postArticleLabel,
	postArticleTextarea,
	postArticleButton
} from "./styles.module.scss";

export default class PostArticle extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.redirectNonAdmins();
	}

	render() {
		return (
			<div>
				<Navbar></Navbar>

				<h1 id={title}>Post Article</h1>

				<form id={postArticleForm}>
					<label className={postArticleLabel}>Title</label>
					<input
						type="text"
						className={postArticleInput}
						required
						id="title"
					></input>
					<label className={postArticleLabel}>Author</label>
					<input
						type="text"
						className={postArticleInput}
						required
						id="author"
					></input>
					<label className={postArticleLabel}>Image</label>
					<input
						type="file"
						className={postArticleInput}
						required
						id="image"
						onChange={this.props.onFileChange}
					></input>
					<label className={postArticleLabel}>Body</label>
					<textarea id={postArticleTextarea} required id="body"></textarea>

					<button
						id={postArticleButton}
						onClick={() => {
							const data = {
								title: document.getElementById("title").value,
								author: document.getElementById("author").value,
								image: document.getElementById("image"),
								body: document.getElementById("body").value
							};
							this.props.postArticle(data);
						}}
						type="button"
					>
						Post
					</button>
				</form>
			</div>
		);
	}
}
