import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

const Link = ({ outside, href, children, className, ...attrs }) => {
    const classes = classnames("link", className);
    if (outside) {
        return (
            <a href={href} {...attrs} className={classes}>
                {children}
            </a>
        );
    } else {
        return (
            <NavLink to={href} className={classes}>
                {children}
            </NavLink>
        );
    }
};

Link.defaultProps = {
    outside: false,
    href: "/",
    children: "Link",
    className: ""
};

Link.propTypes = {
    outside: PropTypes.bool,
    href: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
};

export default Link;
