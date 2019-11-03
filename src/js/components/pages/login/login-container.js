import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./login-form";
import UserContext from "Utils/user-service-context";
import { setHeaderTitle, login } from "Actions/actions";

const LoginPage = () => {
    const dispatch = useDispatch();
    const service = useContext(UserContext);
    const onSubmitHandler = ({ username, password }) => {
        const user = {
            username,
            password
        };
        dispatch(login(user, service));
        // setHeaderTitle(`Welcome to site, ${username}.`)
    };

    return (
        <section className="login-section">
            <Form onSubmit={onSubmitHandler} />
        </section>
    );
};

export default LoginPage;
