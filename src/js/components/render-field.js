import React from "react";
import Input from "Components/input";
import Title from "Components/title";
import Select from "Components/select";

const renderField = ({
    input,
    placeholder,
    type,
    className,
    meta: { touched, error, warning },
    typing,
    typeInterval,
    select,
    ...attrs
}) => {
    return (
        <div className="field-wrapper">
            {select ? (
                <Select {...input} {...attrs} className={className} />
            ) : (
                <Input
                    {...input}
                    {...attrs}
                    className={className}
                    placeholder={placeholder}
                    type={type}
                />
            )}
            <Title
                className="title-validate"
                typing={typing}
                typeInterval={typeInterval}
            >
                {error ? error : " "}
            </Title>
        </div>
    );
};

renderField.defaultProps = {
    typing: false,
    typeInterval: 200,
    select: false
};

export { renderField };
