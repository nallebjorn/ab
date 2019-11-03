import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Button from "Components/button";
import { renderField } from "./render-field";
import validate from "Utils/validate-login-form";

let LoginForm = ({ handleSubmit, onSubmit }) => {
    const onSubmitHandler = handleSubmit(async values => {
        const errors = await validate(values);
        if (Object.keys(errors).length !== 0) {
            throw new SubmissionError(errors);
        }
        onSubmit(values);
    });
    return (
        <form className="login-form" onSubmit={onSubmitHandler} autoComplete="off" >
            <Field
                name="username"
                component={renderField}
                className="login-form__input"
                placeholder="username"
                typeInterval={120}
            />
            <Field
                name="password"
                component={renderField}
                className="login-form__input"
                type="password"
                placeholder="password"
                typeInterval={100}
            />
            <Button className="login-form__button" type="submit">
                Login
            </Button>
        </form>
    );
};

export default reduxForm({
    form: "loginForm"
})(LoginForm);
