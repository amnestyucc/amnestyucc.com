import React, { Component } from "react";
import firebase from "./Firebase/firebase";
import Navbar from "./Navbar";
import ArticlePreview from "./ArticlePreview";
import { Link } from "react-router-dom";

import "../css/Articles.css";
import "../css/qcss/buttons.css";

const admins = ["ibrahim.fadel@ucc.on.ca", "phillip.kong@ucc.on.ca"];

var articlesData = [];
var count = 0;

export default class Articles extends Component {
  constructor() {
    super();

    this.state = {
      response: false,
      admin: false
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("/Articles")
      .once("value")
      .then(snapshot => {
        if (snapshot.numChildren() === 0) {
          this.setState({
            response: true
          });
        }
        snapshot.forEach(childSnapshot => {
          count++;
          articlesData.push([
            childSnapshot.val().title,
            childSnapshot.val().author,
            childSnapshot.val().img,
            childSnapshot.val().body
          ]);
          if (count === snapshot.numChildren()) {
            this.setState({
              response: true
            });
          }
        });
      });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        for (let i = 0; i < admins.length; i++) {
          if (user.email === admins[i]) {
            this.setState({ admin: true });
            return;
          }
        }
      } else {
        console.log("signed out");
      }
    });
  }

  render() {
    if (this.state.response) {
      return (
        <div>
          <Navbar />
          {this.state.admin ? (
            <div>
              <Link to="/postArticle">
                <button className="button dark">Post Article</button>
              </Link>
            </div>
          ) : (
            <small />
          )}
          <h1 id="title">Articles</h1>
          <div id="articlePreviewsContainer">
            {articlesData.map(function(data, i) {
              return (
                <ArticlePreview
                  key={i}
                  title={data[0]}
                  author={data[1]}
                  img={data[2]}
                  body={data[3]}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
