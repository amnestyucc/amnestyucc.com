import React from "react";

import Navbar from "../../components/Navbar/NavbarContainer";
import {
	title,
	adminTitle,
	adminButton,
	articlePreviewContainer,
	articlePreviewImg,
	articlePreviewTitle,
	articlePreview
} from "./styles.module.scss";

export default class Articles extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar></Navbar>

				<h1 id={title}>Articles</h1>

				<div id={articlePreviewContainer}>
					{this.props.articles.map((article, i) => {
						return (
							<div key={i} id={articlePreview}>
								<img src={article.imageUrl} id={articlePreviewImg}></img>
								<h3 id={articlePreviewTitle}>{article.title}</h3>
							</div>
						);
					})}
				</div>

				{this.props.admin ? (
					<div>
						<h1 id={adminTitle}>Welcome Admin</h1>
						<button id={adminButton} onClick={this.props.postArticle}>
							Post Article
						</button>
					</div>
				) : (
					<div></div>
				)}
			</div>
		);
	}
}
