import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Form from "./login-form";
import UserContext from "Utils/user-service-context";
import { login } from "Actions/actions";

const LoginPage = () => {
    const dispatch = useDispatch();
    const service = useContext(UserContext);

    if (useSelector(state => state.app.user.isLogged))
        return <Redirect to="/" />;

    const onSubmitHandler = ({ username, password }) => {
        const user = {
            username,
            password
        };
        dispatch(login(user, service));
    };
    return (
        <section className="login-section">
            <Form onSubmit={onSubmitHandler} />
        </section>
    );
};

export default LoginPage;
