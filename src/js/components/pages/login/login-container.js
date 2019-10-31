import React from "react";
import Form from "./login-form";

const LoginPage = () => {
    const onSubmitHandler =  values => {
        console.log(values);
    };

    return (
        <section className="login-section">
            <Form onSubmit={onSubmitHandler} />
        </section>
    );
};

export default LoginPage;
