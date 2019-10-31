import React, { useState } from "react";
import Input from "Components/input";
import Title from "Components/title";

const Field = ({ placeholder, message, isValid, onChange }) => {
    return (
        <React.Fragment>
            <Input
                className="login-form__input"
                onChange={onChange}
                value={text}
                placeholder={placeholder}
            />
            <Title className="title-validate" typing={true} typeInverval={120}>
                {isValid ? " " : message}
            </Title>
        </React.Fragment>
    );
};

Field.defaultProps = {
    placeholder: "some text"
};

export default Field;
