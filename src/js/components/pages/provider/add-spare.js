import React from "react";
import { useSelector } from "react-redux";
import SpareForm from "./add-spare-form";
import SpareService from "Services/spare-service";

const AddSpare = () => {
    const providerId = useSelector(state => state.app.user.id);
    const onSubmit = ({
        category,
        carMark,
        name,
        description,
        price,
        vin,
        files
    }) => {
        const newSpare = {
            category: { id: category },
            carMark: { id: carMark },
            provider: { id: providerId },
            name,
            description,
            price,
            vin,
            images: files
        };
        console.log(newSpare)
        new SpareService().addSpare(newSpare).then(console.log).catch(console.log);
    };
    return (
        <section className="section user-section">
            <SpareForm onSubmit={onSubmit} />
        </section>
    );
};

export default AddSpare;
