import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Routing from "./../routing";
import Header from "./../header";

const App = () => {
    // const state = useSelector(state => state);
    // console.log(state);
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <Routing />
            </div>
        </React.Fragment>
    );
};

export default App;
