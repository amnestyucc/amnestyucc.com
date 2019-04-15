import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PostArticle from "./components/PostArticle";
import Article from "./components/Article";

const routing = (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/articles" component={Articles} />
    <Route exact path="/contact" component={Contact} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/postArticle" component={PostArticle} />
    <Route path="/articles/:handle" component={Article} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
