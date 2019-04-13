import React, { Component } from "react";
import firebase from "./Firebase/firebase";
import Comment from "./Comment";
import $ from "jquery";

import "../css/CommentSection.css";

var user = null;
var commentsData = [];
var count = 0;

export default class CommentSection extends Component {
  constructor() {
    super();

    this.state = {
      user: false,
      response: false,
      noComments: false
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(u => {
      if (u) {
        user = u;
        this.setState({
          user: true
        });
      } else {
        this.setState({
          user: false
        });
      }
    });

    this.showComments();
  }

  clearDiv(_callback) {
    $("#comments").empty();

    _callback();
  }

  showComments = () => {
    this.clearDiv(function() {
      console.log("Cleared");
    });
    count = 0;

    firebase
      .database()
      .ref("/Comments/" + this.props.title)
      .once("value")
      .then(snapshot => {
        if (snapshot.numChildren() === 0) {
          this.setState({
            response: true,
            noComments: true
          });
        }
        snapshot.forEach(childSnapshot => {
          count++;
          commentsData.push([
            childSnapshot.val()[0],
            childSnapshot.val()[1],
            childSnapshot.val()[2]
          ]);
          if (count === snapshot.numChildren()) {
            this.setState({
              response: true
            });
            console.log("Done looping");
          }
        });
      });
  };

  postComment = () => {
    let comment = document.getElementById("commentSectionTextarea").value;
    let username = user.displayName;
    let today = new Date();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let yyyy = today.getFullYear();
    let timestamp = mm + "/" + dd + "/" + yyyy;

    firebase
      .database()
      .ref("/Comments/" + this.props.title)
      .push([comment, username, timestamp])
      .then(() => {
        this.showComments();
      });

    document.getElementById("commentSectionTextarea").value = "";
  };

  render() {
    if (this.state.user) {
      return (
        <div>
          <h5 id="commentSectionTitle">Post A Comment:</h5>
          <form id="commentSectionForm">
            <textarea id="commentSectionTextarea" />
            <br />
            <br />
            <button
              type="button"
              className="button dark"
              id="commentSectionButton"
              onClick={this.postComment}
            >
              Post
            </button>
          </form>

          <div id="comments">
            {this.state.noComments ? (
              <h3>There are no comments... Start the conversation?</h3>
            ) : (
              <div />
            )}
            {this.state.response ? (
              <div>
                {commentsData.map((data, i) => {
                  return (
                    <Comment key={i} comment={data[0]} timestamp={data[2]} />
                  );
                })}
              </div>
            ) : (
              <h5>Loading Comments...</h5>
            )}
          </div>
          {/* <div id="comments">
            {commentsData.map((data, i) => {
              return <Comment key={i} comment={data[0]} />;
            })}
          </div> */}
        </div>
      );
    } else {
      return <h1>You must be signed in to Comment</h1>;
    }
  }
}
