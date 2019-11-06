import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({ children, onClick, className, navLink, ...attrs }) => {
    const classes = classnames("button", className);
    const Tag = navLink ? NavLink : "button";
    return (
        <Tag onClick={onClick} className={classes} {...attrs}>
            {children}
        </Tag>
    );
};

Button.defaultProps = {
    children: "Button",
    onClick: () => {},
    navLink: false
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    navLink: PropTypes.bool,
    className: PropTypes.string
};

export default Button;
