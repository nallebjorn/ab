import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import About from "./pages/about";
import NotFound from "./pages/not-found";
import Admin from "./pages/admin";
import Manager from "./pages/manager";
import Provider from "./pages/provider";
import Logout from "./pages/logout";
import Profile from "./pages/profile/";
import AddUser from "./pages/admin/add-user";

const Routing = () => {
    let role = useSelector(state => state.app.user.role);
    role ? role : (role = { name: false });
    const name = role.name;

    switch (name) {
        case "admin":
            return (
                <Switch>
                    <Route component={Admin} path="/" exact />
                    <Route component={AddUser} path="/add-user" exact />
                    <Route component={AddUser} path="/add-user/:user" exact />
                    <Route component={Login} path="/login" />
                    <Route component={Logout} path="/logout" />
                    <Route component={About} path="/about" />
                    <Route component={Profile} path="/profile" />;
                    <Route component={NotFound} />
                </Switch>
            );
        case "manager":
            return (
                <Switch>
                    <Route component={Manager} path="/" exact />
                    <Route component={Login} path="/login" />
                    <Route component={Logout} path="/logout" />
                    <Route component={About} path="/about" />
                    <Route component={Profile} path="/profile" />;
                    <Route component={NotFound} />
                </Switch>
            );
        case "provider":
            return (
                <Switch>
                    <Route component={Provider} path="/" exact />
                    <Route component={Login} path="/login" />
                    <Route component={Logout} path="/logout" />
                    <Route component={About} path="/about" />
                    <Route component={Profile} path="/profile" />;
                    <Route component={NotFound} />
                </Switch>
            );
        default:
            return (
                <Switch>
                    <Route component={Login} path="/" exact />
                    <Route component={Login} path="/login" />
                    <Route component={Logout} path="/logout" />
                    <Route component={About} path="/about" />
                    <Route component={Profile} path="/profile" />;
                    <Route component={NotFound} />
                </Switch>
            );
    }
};

export default Routing;
