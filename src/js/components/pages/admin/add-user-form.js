import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "Components/button";
import { Field, reduxForm, SubmissionError, initialize } from "redux-form";
import { renderField } from "Components/render-field";
import Loader from "Components/loader";
import roleService from "Services/role-service";
import userService from "Services/user-service";
import validate from "Utils/validate-add-user";
import AddProvider from "./add-provider";

const UserForm = ({ handleSubmit, onSubmit, user }) => {
    const dispatch = useDispatch();
    const [roles, setRoles] = useState([]);
    const [role, setRole] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        new roleService().getRoles().then(roles => {
            setRoles(roles);
        });
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
            <div className="add-user-form">
                Username
                <Field
                    name="username"
                    component={renderField}
                    placeholder="username"
                    className="add-user-form__field"
                />
                Password
                <Field
                    name="password"
                    component={renderField}
                    placeholder="password"
                    className="add-user-form__field"
                />
                Email
                <Field
                    name="email"
                    type="email"
                    component={renderField}
                    className="add-user-form__field"
                    placeholder="email@mail.com"
                />
                Phone
                <Field
                    name="phone"
                    component={renderField}
                    className="add-user-form__field"
                    placeholder="phone"
                />
                {!user && (<>
                Role
                    <Field
                        onChange={e => {
                            setRole(e.target.value);
                        }}
                        items={roles}
                        select={true}
                        className="add-user-form__field"
                        name="role"
                        component={renderField}
                        placeholder="username"
                    /></>
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
