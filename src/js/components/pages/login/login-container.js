import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "Components/input";
import Button from "Components/button";
import { validateField } from "Utils/validation";
import { setHeaderTitle } from "Actions/actions";

const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [loginValidation, setLoginValidation] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordValidation, setPasswordValidation] = useState(null);
    const dispatch = useDispatch();

    const isLogged = useSelector(state => state.user.isLogged);
    if (isLogged) return <Redirect to="/" />;
    const onSubmitHandler = e => {
        e.preventDefault();
        const isLoginValid = validateField(login, setLoginValidation);
        const isPasswordValid = validateField(password, setPasswordValidation);
        if (isLoginValid && isPasswordValid) {
            dispatch(setHeaderTitle(`Welcome to website, ${login}.`));
            setPasswordValidation(null);
            setLoginValidation(null);
            return;
        }
        // isLoginValid ? setLoginValidation(null) : null;
        // isPasswordValid ? setPasswordValidation(null) : null;
    };

    const onLoginChangeHandler = e => {
        setLogin(e.target.value.trim());
    };

    const onPasswordChangeHandler = e => {
        setPassword(e.target.value.trim());
    };

    return (
        <section className="login-section" onSubmit={onSubmitHandler}>
            <form className="login-form">
                <Input
                    className="login-form__input"
                    onChange={onLoginChangeHandler}
                    value={login}
                    placeholder="username"
                />
                {loginValidation}
                <Input
                    className="login-form__input"
                    onChange={onPasswordChangeHandler}
                    value={password}
                    placeholder="password"
                    type="password"
                />
                {passwordValidation}
                <Button className="login-form__button">Login</Button>
            </form>
        </section>
    );
};

export default LoginPage;
