import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import typeText from "Utils/typing-text";

const Title = ({ children, className, typing, typeInverval, ...attrs }) => {
    const classes = classnames("title", className);
    const [title, setTitle] = useState("");
    const [interval, setNewInterval] = useState(0);
    useEffect(() => {
        if (typing && typeof children === "string") {
            clearInterval(interval);
            setNewInterval(typeText(children, setTitle, typeInverval));
        } else {
            setTitle(children);
        }
        console.log(children)
        return () => {
            clearInterval(interval);
            console.log("cleanup");
        };
    }, [children]);

    return (
        <h2 className={classes} {...attrs}>
            {title}
        </h2>
    );
};

Title.defaultProps = {
    children: "Title",
    typing: false,
    typeInverval: 150
};

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    typing: PropTypes.bool,
    typeInverval: PropTypes.number
};

export default Title;
