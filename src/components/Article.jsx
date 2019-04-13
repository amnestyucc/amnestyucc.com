import React, { Component } from "react";
import Navbar from "./Navbar";
import CommentSection from "./CommentSection";

import "../css/Article.css";

var data;

export default class Article extends Component {
  constructor() {
    super();

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
    if (this.state.response) {
      return (
        <div>
          <Navbar />
          <div id="articleContainer">
            <h1 id="title">{data.title}</h1>
            <br />
            <br />
            <div id="imageContainer">
              <img src={data.src} alt="" className="articleImage" />
            </div>
            <br />
            <br />
            <h3 id="author">By: {data.author}</h3>
            <br />
            <br />
            <p>{data.body}</p>
            <CommentSection title={data.title} />
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
