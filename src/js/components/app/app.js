import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Routing from "./../routing";
import Header from "./../header";
import Loader from "./../loader";

const App = () => {
    const state = useSelector(state => state);
    console.log(state);
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                {state.app.loading ? <Loader /> : <Routing />}
            </div>
        </React.Fragment>
    );
};

export default App;
