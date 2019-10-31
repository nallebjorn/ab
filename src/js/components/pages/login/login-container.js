import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "Components/input";
import Button from "Components/button";
import Title from "Components/title";
import { validateField, validateInput } from "Utils/validation";
import { setHeaderTitle } from "Actions/actions";

const LoginPage = () => {
    const [login, setLogin] = useState({
        input: "",
        isValid: true,
        message: ""
    });
    const [password, setPassword] = useState({
        input: "",
        isValid: true,
        message: ""
    });
    const dispatch = useDispatch();

    const isLogged = useSelector(state => state.user.isLogged);
    if (isLogged) return <Redirect to="/" />;

    const {
        input: inputLogin,
        message: messageLogin,
        isValid: loginValid
    } = login;
    const {
        input: inputPassword,
        message: messagePassowrd,
        isValid: passwordValid
    } = password;
    const onSubmitHandler = e => {
        e.preventDefault();
        setLogin({ ...login, ...validateInput(inputLogin) });
        setPassword({ ...password, ...validateInput(inputPassword) });
        if (loginValid && passwordValid) {
            dispatch(setHeaderTitle(`Welcome to website, ${inputLogin}.`));
        }
    };

    const onLoginChangeHandler = e => {
        setLogin({ ...login, input: e.target.value.trim() });
    };

    const onPasswordChangeHandler = e => {
        setPassword({ ...password, input: e.target.value.trim() });
    };

    return (
        <section className="login-section" onSubmit={onSubmitHandler}>
            <form className="login-form">
                <Input
                    className="login-form__input"
                    onChange={onLoginChangeHandler}
                    value={inputLogin}
                    placeholder="username"
                />
                {loginValid ? (
                    ""
                ) : (
                    <Title className="title-validate" typing={true}>
                        {messageLogin}
                    </Title>
                )}
                <Input
                    className="login-form__input"
                    onChange={onPasswordChangeHandler}
                    value={inputPassword}
                    type="password"
                    placeholder="password"
                />
                {passwordValid ? (
                    ""
                ) : (
                    <Title className="title-validate" typing={true}>
                        {messagePassowrd}
                    </Title>
                )}
                <Button className="login-form__button">Login</Button>
            </form>
        </section>
    );
};

export default LoginPage;
