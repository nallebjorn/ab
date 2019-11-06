import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import UserForm from "./add-user-form";
import UserServiceContext from "Utils/user-service-context";
import { setHeaderTitle } from "Actions/actions";

const AddUser = ({ match: { params: username } }) => {
    const dispatch = useDispatch();
    const us = useContext(UserServiceContext);
    const onSubmit = ({
        role,
        username,
        phone,
        email,
        password,
        address,
        name,
        surname
    }) => {
        const newUser = {
            username,
            password,
            email,
            phone,
            role: { id: role },
            address,
            name,
            surname
        };
        us.addUser(newUser).then(user => {
            if (user) {
                dispatch(
                    setHeaderTitle(`User ${user.username} added successfully.`)
                );
            } else {
                dispatch(setHeaderTitle(`User ${newUser.username} not added.`));
            }
        });
    };
    return (
        <section className="section admin-section">
            <UserForm onSubmit={onSubmit} user={username.username} />
        </section>
    );
};

export default AddUser;
