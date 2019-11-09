import React from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "uuid";
import SpareForm from "./add-spare-form";
import SpareService from "Services/spare-service";
import { setHeaderTitle } from "Actions/actions";

const AddSpare = () => {
    const providerId = useSelector(state => state.app.user.id);
    const dispatch = useDispatch();
    const onSubmit = async ({
        category,
        carMark,
        name,
        description,
        price,
        vin,
        files
    }) => {
        const newSpare = {
            id: uuid(),
            category: { id: category },
            carMark: { id: carMark },
            provider: { id: providerId },
            name,
            description,
            price,
            vin,
            images: files
        };
        const added = await new SpareService().addSpare(newSpare);
        if (added) {
            dispatch(setHeaderTitle("Spare added successfully."));
        } else {
            dispatch(setHeaderTitle("Spare not added."));
        }
    };
    return (
        <section className="section user-section">
            <SpareForm onSubmit={onSubmit} />
        </section>
    );
};

export default AddSpare;
