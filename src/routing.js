import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Home from "./views/Home";
// import NotFound from "./components/NotFound";

import views from "./views/index";

import Home from "./views/Home/Home";
import Login from "./views/Login/LoginContainer";

const routing = (
	<Router>
		<Switch>
			<Route exact path="/" component={Home}></Route>
			<Route path="/login" component={Login}></Route>
			{/* <Route component={views.NotFound}></Route> */}
		</Switch>
	</Router>
);

export default routing;
