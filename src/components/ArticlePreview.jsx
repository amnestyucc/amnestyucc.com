import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "./Firebase/firebase";

import "../css/ArticlePreview.css";

var path = "";
var url = "";

export default class Article extends Component {
  constructor() {
    super();

    this.state = {
      response: false
    };
  }

  componentDidMount() {
    path = "/articles/" + this.props.title.replace(/ /gi, "");

    var storageRef = firebase.storage().ref("/");
    storageRef
      .child("/Images/" + this.props.img)
      .getDownloadURL()
      .then(downloadUrl => {
        url = downloadUrl;
        this.setState({
          response: true
        });
      })
      .catch(error => {
        alert(error.code, error.message);
      });
  }

  render() {
    if (this.state.response) {
      return (
        <div>
          <Link
            className="previewLink"
            to={{
              pathname: path,
              state: {
                title: this.props.title,
                author: this.props.author,
                body: this.props.body,
                src: url
              }
            }}
          >
            <div className="previewDiv">
              <img
                src={url}
                alt={this.props.title}
                className="articlePreviewImage"
              />
              <h5>By: {this.props.author}</h5>
            </div>
          </Link>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
