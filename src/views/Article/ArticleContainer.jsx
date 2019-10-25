import React from "react";

import Article from "./Article";

var data;

export default class ArticleContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			response: false
		};
	}

	componentDidMount() {
		data = this.props.location.state;
		this.setState({
			response: true
		});
	}

	render() {
		return <Article data={this.props.location.state}></Article>;
	}
}
