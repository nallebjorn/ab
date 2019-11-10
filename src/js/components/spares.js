import React from "react";
import { NavLink } from "react-router-dom";
import imgBase from "Utils/img-base";

const SpareCard = ({ id, images, name, price, carMark: {name: mark} }) => {
    return (
        <NavLink to={"/" + id} className="spare">
            <div className="spare__wrapper">
                <div className="spare__image">
                    {images[0] && (
                        <img
                            src={imgBase + images[0].url}
                            alt="first spare image"
                        />
                    )}
                </div>
                <div className="spare__name">{name}</div>
                <div className="spare__footer">
                    <div className="spare__footer-car-mark">{mark}</div>
                    <div className="spare__footer-price">{price}</div>
                </div>
            </div>
        </NavLink>
    );
};

const Spares = ({ spares }) => {
    return (
        <div className="spares">
            {spares.map(spare => (
                <SpareCard key={spare.id} {...spare} />
            ))}
        </div>
    );
};

export default Spares;
