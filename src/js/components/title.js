import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Title = ({ children, className, ...attrs }) => {
    const classes = classnames("title", className);
    return (
        <h2 className={classes} {...attrs}>
            {children}
        </h2>
    );
};

Title.defaultProps = {
    children: "Title"
};

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default Title;
