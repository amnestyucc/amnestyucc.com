import React from "react";
import Home from "./Home";

export default class HomeContainer extends React.Component {
	constructor() {
		super();
		this.state = { comments: [] };
	}

	componentDidMount() {
		//   fetch("/my-comments.json")
		//     .then(res => res.json())
		//     .then(comments => this.setState({ comments }))
	}

	render() {
		return <Home comments={[{ body: "test", author: "test" }]} />;
	}
}
