import React from "react";
import { useSelector } from "react-redux";
import Routing from "./../routing";
import Header from "./../header";
import Loader from "./../loader";

const App = () => {
    const { loading } = useSelector(state => state.app);
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                {loading ? <Loader /> : <Routing />}
            </div>
        </React.Fragment>
    );
};

export default App;
