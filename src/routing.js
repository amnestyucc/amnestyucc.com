import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import views from "./views/index";

const routing = (
	<Router>
		<Switch>
			<Route exact path="/" component={views.Home}></Route>
			<Route path="/login" component={views.Login}></Route>
			<Route path="/signup" component={views.Signup}></Route>
			<Route exact path="/articles" component={views.Articles}></Route>
			<Route path="/articles/:handle" component={views.Article}></Route>
			<Route path="/postArticle" component={views.PostArticle}></Route>
			<Route component={views.NotFound}></Route>
		</Switch>
	</Router>
);

export default routing;
