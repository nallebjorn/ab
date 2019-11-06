import React from "react";
import { Field } from "redux-form";
import { renderField } from "Components/render-field";

const AddProvider = () => {
    return (
        <React.Fragment>
            Name
            <Field
                name="name"
                component={renderField}
                className="add-user-form__field"
                placeholder="provider name"
            />
            Surname
            <Field
                name="surname"
                component={renderField}
                className="add-user-form__field"
                placeholder="provider surname"
            />
            Address
            <Field
                name="address"
                component={renderField}
                className="add-user-form__field"
                placeholder="provider_address"
            />
        </React.Fragment>
    );
};

export default AddProvider;
