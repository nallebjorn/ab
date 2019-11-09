import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "Components/button";
import { Field, reduxForm, SubmissionError, initialize } from "redux-form";
import { renderField } from "Components/render-field";
import Loader from "Components/loader";
import getRoles from "Services/select-service";
import userService from "Services/user-service";
import validate from "Utils/validate-add-user";
import AddProvider from "./add-provider";

const UserForm = ({ handleSubmit, onSubmit, user }) => {
    const dispatch = useDispatch();
    const [roles, setRoles] = useState([]);
    const [role, setRole] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getRoles("roles").then(setRoles);
        if (user) {
            new userService().getUser(user).then(user => {
                setRole(user.role.id);
                dispatch(
                    initialize("addUserForm", {
                        ...user,
                        role: user.role.id
                    })
                );
                setLoading(false);
            });
        }
    }, []);
    const onSubmitHandler = handleSubmit(async values => {
        const errors = await validate(values);
        if (Object.keys(errors).length !== 0) {
            throw new SubmissionError(errors);
        }
        onSubmit(values);
    });

    if (loading && user) {
        return <Loader />;
    }

    return (
        <form onSubmit={onSubmitHandler} autoComplete="off">
            <div className="form-wrapper">
                Username
                <Field
                    name="username"
                    component={renderField}
                    placeholder="username"
                    className="form__field"
                />
                Password
                <Field
                    name="password"
                    component={renderField}
                    placeholder="password"
                    className="form__field"
                />
                Email
                <Field
                    name="email"
                    type="email"
                    component={renderField}
                    className="form__field"
                    placeholder="email@mail.com"
                />
                Phone
                <Field
                    name="phone"
                    component={renderField}
                    className="form__field"
                    placeholder="phone"
                />
                {!user && (
                    <>
                        Role
                        <Field
                            onChange={e => {
                                setRole(e.target.value);
                            }}
                            items={roles}
                            select={true}
                            className="form__field"
                            name="role"
                            component={renderField}
                            placeholder="username"
                        />
                    </>
                )}
                {role == 2 ? <AddProvider /> : null}
            </div>
            <Button
                type="submit"
                style={{ display: "block", margin: "10px auto" }}
            >
                {user ? "save" : "add"} user
            </Button>
        </form>
    );
};

export default reduxForm({
    form: "addUserForm"
})(UserForm);
