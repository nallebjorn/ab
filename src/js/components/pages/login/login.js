import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "../../../input";
import Button from "../../../button";
import { setHeaderTitle } from "../../../../redux/actions/actions";

const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const isLogged = useSelector(state => state.user.isLogged);
    if (isLogged) return <Redirect to="/" />;

    return (
        <section className="login-section">
            <form className="login-form">
                <Input
                    className="login-form__input"
                    onChange={e => {
                        setLogin(e.target.value);
                    }}
                    value={login}
                    placeholder="username"
                />
                <Input
                    className="login-form__input"
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    placeholder="password"
                    type="password"
                />
                <Button
                    onClick={e => {
                        e.preventDefault();
                        dispatch(
                            setHeaderTitle(`Welcome to website, ${login}`)
                        );
                    }}
                    className="login-form__button"
                >
                    Login
                </Button>
            </form>
        </section>
    );
};

export default LoginPage;
