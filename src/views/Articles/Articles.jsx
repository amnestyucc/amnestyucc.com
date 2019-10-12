import React from "react";
import "bootstrap";
import { Link } from "react-router-dom";

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

const cardStyle = {
	textAlign: "center",
	padding: "20px",
	width: "25vw"
};

const cardBodyStyle = {
	color: "white"
};

const cardTitleStyle = {
	fontSize: "2em"
};

const cardImageStyle = {
	width: "100%"
};

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
							<div className="card" key={i} style={cardStyle}>
								<Link to="/">
									<img
										className="card-img-top"
										src={article.imageUrl}
										alt="Card image cap"
										style={cardImageStyle}
									></img>
									<div className="card-body" style={cardBodyStyle}>
										<h5 className="card-title" style={cardTitleStyle}>
											{article.title}
										</h5>
									</div>
								</Link>
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
