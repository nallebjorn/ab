import React from "react";
import classnames from "classnames";

const Select = ({ items, className, ...attrs }) => {
    const classes = classnames("select", className);
    return (
        <select className={classes} {...attrs}>
            <option></option>
            {items.length > 0
                ? items.map(item => (
                      <option value={JSON.stringify(item)} key={item.id}>
                          {item.name}
                      </option>
                  ))
                : null}
        </select>
    );
};

export default Select;
