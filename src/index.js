import "./assets/scss/main.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./js/redux/store/store";
import App from "./js/components/app";
import UserContext from "Utils/user-service-context";
import UserService from "./js/services/user-service";

import "./../node_modules/slick-carousel/slick/slick.scss";
import "./../node_modules/slick-carousel/slick/slick-theme.scss";

const Idx = () => {
    return (
        <Provider store={store}>
            <Router>
                <UserContext.Provider value={new UserService()}>
                    <App />
                </UserContext.Provider>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<Idx />, document.getElementById("root"));
