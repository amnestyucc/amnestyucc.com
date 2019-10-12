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
	width: "25vw",
	backgroundColor: "#ececec",
	borderRadius: "5px"
};

const cardBodyStyle = {
	color: "black",
	display: "flex",
	justifyContent: "space-evenly",
	flexDirection: "column",
	height: "15vh"
};

const cardTitleStyle = {
	fontSize: "1.5em"
};

const cardImageStyle = {
	width: "100%",
	borderRadius: "5px",
	borderBottomRightRadius: "0px",
	borderBottomLeftRadius: "0px"
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
							<Link to="/">
								<div className="card" key={i} style={cardStyle}>
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
										{/* <br></br> */}
										<p>By: {article.author}</p>
										{/* <br></br> */}
										<p>{article.date}</p>
									</div>
								</div>
							</Link>
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
