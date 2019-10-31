import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Title = ({ children, className, typing, typeInterval, ...attrs }) => {
    const classes = classnames("title", className);
    const [title, setTitle] = useState("");
    const [interval, setNewInterval] = useState(0);
    useEffect(() => {
        if (typing && typeof children === "string") {
            clearInterval(interval);
            let temp = [...children];
            let counter = 0;
            let newTitle = "";
            let i = setInterval(() => {
                newTitle += temp[counter];
                setTitle(newTitle);
                counter++;
                if (counter === temp.length) {
                    clearInterval(i);
                }
            }, typeInterval);
            setNewInterval(i);
        } else {
            setTitle(children);
        }
        return () => {
            clearInterval(interval);
        };
    }, [children]);

    return (
        <h2 className={classes} {...attrs}>
            {title}
        </h2>
    );
};

Title.defaultProps = {
    children: " ",
    typing: false,
    typeInterval: 150
};

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    typing: PropTypes.bool,
    typeInterval: PropTypes.number
};

export default Title;
