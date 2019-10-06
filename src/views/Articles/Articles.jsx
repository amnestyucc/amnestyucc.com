import React from "react";

import Navbar from "../../components/Navbar/NavbarContainer";
import { title, adminTitle, adminButton } from "./styles.module.scss";

export default class Articles extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar></Navbar>

				<h1 id={title}>Articles</h1>

				{this.props.admin ? (
					<div>
						<h1 id={adminTitle}>Welcome Admin</h1>
						<button id={adminButton}>Post Article</button>
					</div>
				) : (
					<div></div>
				)}
			</div>
		);
	}
}
