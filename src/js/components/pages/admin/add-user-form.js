import React, { useEffect, useState } from "react";
import Button from "Components/button";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { renderField } from "Components/render-field";
import roleService from "Services/role-service";
import validate from "Utils/validate-add-user";
import AddProvider from "./add-provider";

const UserForm = ({ handleSubmit, onSubmit }) => {
    const [roles, setRoles] = useState([]);
    const [role, setRole] = useState({ id: 0, name: "none" });
    useEffect(() => {
        new roleService().getRoles().then(roles => {
            setRoles(roles);
        });
    }, []);
    const onSubmitHandler = handleSubmit(async values => {
        const errors = await validate(values);
        if (Object.keys(errors).length !== 0) {
            throw new SubmissionError(errors);
        }
        onSubmit(values);
    });
    return (
        <form onSubmit={onSubmitHandler} autoComplete="off">
            <div className="add-user-form">
                <Field
                    name="username"
                    component={renderField}
                    placeholder="username"
                    className="add-user-form__field"
                />
                <Field
                    name="password"
                    component={renderField}
                    placeholder="password"
                    className="add-user-form__field"
                />
                <Field
                    name="email"
                    type="email"
                    component={renderField}
                    className="add-user-form__field"
                    placeholder="email@mail.com"
                />
                <Field
                    name="phone"
                    component={renderField}
                    className="add-user-form__field"
                    placeholder="phone"
                />
                <Field
                    onChange={e => {
                        const role = JSON.parse(e.target.value);
                        setRole(role);
                    }}
                    items={roles}
                    select={true}
                    className="add-user-form__field"
                    name="role"
                    component={renderField}
                    placeholder="username"
                />
                {role.name === "provider" ? <AddProvider /> : null}
            </div>
            <Button
                type="submit"
                style={{ display: "block", margin: "10px auto" }}
            >
                add user
            </Button>
        </form>
    );
};

export default reduxForm({
    form: "addUserForm"
})(UserForm);
