import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Title from "Components/title";
import Button from "Components/button";
import Spares from "Components/spares";
import Loader from "Components/loader";
import Select from "Components/select";
import spareService from "Services/spare-service";
import getSelectItems from "Services/select-service";
import useLoader from "Utils/loader-hook";
import { setSpares } from "Actions/actions";

const Manager = () => {
    const dispatch = useDispatch();
    const [spares, loading, error] = useLoader(new spareService().getSpares);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(0);
    const [carMarks, setCarMarks] = useState([]);
    const [carMark, setCarMark] = useState(0);
    const [filtredSpares, setFiltredSpares] = useState([]);
    useEffect(() => {
        getSelectItems("categories").then(setCategories);
        getSelectItems("marks").then(setCarMarks);
    }, []);

    useEffect(() => {
        dispatch(setSpares(spares));
    }, [spares]);

    useEffect(() => {
        const filtredSpares = spares
            .filter(({ category: { id } }) => {
                if (category) {
                    return id == category;
                }
                return true;
            })
            .filter(({ carMark: { id } }) => {
                if (carMark) {
                    return id == carMark;
                }
                return true;
            });
        setFiltredSpares(filtredSpares);
    }, [category, carMark, spares]);

    return (
        <section className="section user-section">
            <div className="user-section__header">
                <Title className="title-user">Spares List</Title>
            </div>
            {loading ? <Loader /> : <Spares spares={filtredSpares} />}
        </section>
    );
};

export default Manager;
