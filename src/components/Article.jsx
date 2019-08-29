import React, { Component } from "react";
import Navbar from "./Navbar";
import CommentSection from "./CommentSection";

import "../css/Article.css";

var data;
var body = "";

export default class Article extends Component {
  constructor() {
    super();

    this.state = {
      response: false
    };
  }

  componentDidMount() {
    data = this.props.location.state;

    let splitBody = data.body.split("");
    let skipNextLine = false;
    for (let i = 0; i < splitBody.length; i++) {
      if (i !== splitBody.length - 1) {
        if (skipNextLine) {
          skipNextLine = false;
          continue;
        }
        if (splitBody[i] === "\\" && splitBody[i + 1] === "n") {
          body += "\n \n";
          skipNextLine = true;
        } else {
          skipNextLine = false;
          body += splitBody[i];
        }
      } else {
        body += splitBody[i];
      }
    }

    this.setState({
      response: true
    });
  }

  render() {
    if (this.state.response === true) {
      return (
        <div>
          <Navbar component={"Articles"} />
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
            {/* <div className="bodyContainer"> */}
            <p
              className="body"
              style={{
                whiteSpace: "pre",
                textOverflow: "ellipsis",
                overflow: "hidden"
              }}
            >
              {body}
            </p>
            {/* </div> */}
            <CommentSection title={data.title} />
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
