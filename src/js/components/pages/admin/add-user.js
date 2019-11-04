import React from "react";
import { Field, reduxForm } from "redux-form";

const AddUser = ({ handleSubmit }) => {
    return (
        <section className="section admin-section">
            <form onSubmit={handleSubmit}>
                
            </form>
        </section>
    );
};

export default reduxForm({
    form: "addUserForm"
})(AddUser);
