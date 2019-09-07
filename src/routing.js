import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Home from "./views/Home";
// import NotFound from "./components/NotFound";

import views from "./views/index";

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={views.Home}></Route>
            <Route component={views.NotFound}></Route>
        </Switch>
    </Router>
);

export default routing;