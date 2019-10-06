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
					<input type="text" className={postArticleInput} required></input>
					<label className={postArticleLabel}>Author</label>
					<input type="text" className={postArticleInput} required></input>
					<label className={postArticleLabel}>Image</label>
					<input type="file" className={postArticleInput} required></input>
					<label className={postArticleLabel}>Body</label>
					<textarea id={postArticleTextarea} required></textarea>

					<button id={postArticleButton}>Post</button>
				</form>
			</div>
		);
	}
}
