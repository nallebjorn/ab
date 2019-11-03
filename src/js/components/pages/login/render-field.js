import React from "react";
import Input from "Components/input";
import Title from "Components/title";

const renderField = ({
    input,
    placeholder,
    type,
    className,
    meta: { touched, error, warning },
    typing,
    typeInterval
}) => {
    return (
        <React.Fragment>
            <Input
                {...input}
                className={className}
                placeholder={placeholder}
                type={type}
            />
            <Title
                className="title-validate"
                typing={typing}
                typeInterval={typeInterval}
            >
            {error ?  error  : " "}
            </Title>
        </React.Fragment>
    );
};

renderField.defaultProps = {
    typing: false,
    typeInterval: 200
};

export { renderField };
