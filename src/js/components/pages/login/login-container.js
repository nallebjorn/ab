import React from "react";
import Button from "Components/button";

const LoginPage = () => {
    const onSubmitHandler = e => {
        e.preventDefault();
    };

    return (
        <section className="login-section" onSubmit={onSubmitHandler}>
            <form className="login-form">
                <Button className="login-form__button">Login</Button>
            </form>
        </section>
    );
};

export default LoginPage;
