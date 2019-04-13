import React, { Component } from "react";
import Navbar from "./Navbar";
import firebase from "./Firebase/firebase";

import "../css/PostArticle.css";

var file = null;
var img = null;

export default class PostArticle extends Component {
  onChange(e) {
    file = e.target.files[0];
    img = file.name;
  }

  postArticle() {
    console.log(document.getElementById("inputtitle").value);
    let title = document.getElementById("inputtitle").value;
    let author = document.getElementById("auth").value;
    // let img =
    let body = document.getElementById("postArticleTextarea").value;

    console.log(title, author, img, body);

    let article = {
      title: title,
      author: author,
      img: img,
      body: body
    };

    firebase
      .database()
      .ref("/Articles")
      .push(article);

    var imageRef = firebase.storage().ref("/Images/" + img);
    var uploadTask = imageRef.put(file);

    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        alert(error.code, error.message);
      },
      () => {}
    );
  }

  render() {
    return (
      <div>
        <Navbar />

        <h1 id="title">Post Article</h1>

        <form id="postArticleForm">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title"
              id="inputtitle"
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter author"
              id="auth"
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <br />
            <input type="file" id="img" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Body</label>
            <br />
            <textarea id="postArticleTextarea" />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.postArticle}
          >
            Post
          </button>
        </form>
      </div>
    );
  }
}
