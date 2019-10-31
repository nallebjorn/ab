import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import About from "./pages/about";
import NotFound from "./pages/not-found";

const Routing = () => (
    <Switch>
        <Route component={Login} path="/login" />
        <Route component={About} path="/about" />
        <Route component={NotFound} />
    </Switch>
);

export default Routing;
