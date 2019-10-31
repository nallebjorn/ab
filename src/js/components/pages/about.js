import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const About = () => {
    if (!useSelector(state => state.app.user.isLogged))
        return <Redirect to="/login" />;
    return <div>about</div>;
};

export default About;
