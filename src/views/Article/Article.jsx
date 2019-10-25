import React from "react";

import styles from "./styles.module.scss";
import Navbar from "../../components/Navbar/NavbarContainer";

var data;

export default class Article extends React.Component {
	constructor(props) {
		super(props);

		data = this.props.data;
		console.log("hi", data);
	}

	render() {
		return (
			<div>
				<Navbar></Navbar>
				<h1 id={styles.title}>{data.title}</h1>

				<div id={styles.articleContainer}>
					<img id={styles.articleImage} src={data.imageUrl}></img>
					<h3 id={styles.articleAuthor}>By: {data.author}</h3>
					<h3>{data.date}</h3>
					<div id={styles.articleBody}>
						{data.body.split("\n").map((item, i) => {
							return (
								<div>
									<p key={i} className={styles.p}>
										         {item}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
