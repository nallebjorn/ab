import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Input = ({ type, className, onChange, placeholder, ...attrs }) => {
    const classes = classnames("input", className);
    return (
        <input
            type={type}
            className={classes}
            placeholder={placeholder}
            onChange={onChange}
            {...attrs}
        />
    );
};

Input.defaultProps = {
    type: "text",
    placeholder: ""
};

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default Input;
