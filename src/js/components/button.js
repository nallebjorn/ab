import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({ children, onClick, className, ...attrs }) => {
    const classes = classnames("button", className);
    return (
        <button onClick={onClick} className={classes} {...attrs}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    children: "Button",
    onClick: () => {}
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default Button;
