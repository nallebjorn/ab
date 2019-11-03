import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLoginingOut } from "Actions/actions";

const Logout = () => {
    const isLogged = useSelector(state => state.app.user.isLogged);
    const dispatch = useDispatch();
    if (isLogged) {
        dispatch(userLoginingOut());
    }
    return <Redirect to="/login" />;
};

export default Logout;