import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./login-form";
import {setHeaderTitle} from 'Actions/actions'


const LoginPage = () => {
    const dispatch = useDispatch();
    const onSubmitHandler =  ({username, password}) => {
        dispatch(setHeaderTitle(`Welcome to site, ${username}.`))
    };

    return (
        <section className="login-section">
            <Form onSubmit={onSubmitHandler} />
        </section>
    );
};

export default LoginPage;
