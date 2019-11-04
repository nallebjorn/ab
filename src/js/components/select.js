import React from "react";
import classnames from "classnames";

const Select = ({ items, className, ...attrs }) => {
    const classes = classnames("select", className);
    return (
        <select className={classes} {...attrs}>
            {items.map(item => (
                <option value={item.id}> {item.name} </option>
            ))}
        </select>
    );
};

export default Select;
