import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import UserForm from "./add-user-form";
import UserServiceContext from "Utils/user-service-context";
import { setHeaderTitle } from "Actions/actions";

const AddUser = () => {
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
        const inputRole = JSON.parse(role);
        const newUser = { username, password, email, phone, role: inputRole };
        us.addUser(newUser).then(user => {
            if (user) {
                dispatch(
                    setHeaderTitle(`User ${user.username} added successfully.`)
                );
            } else {
                dispatch(setHeaderTitle(`User ${newUser.username} not added.`));
            }
        });
        if (inputRole.name === "provider") {
            const newProvider = {
                user: newUser,
                address,
                name,
                surname
            };
            us.addProvider(newProvider).then(provider => {
                if (provider) {
                    dispatch(
                        setHeaderTitle(
                            `Provider ${newUser.username} added successfully.`
                        )
                    );
                } else {
                    dispatch(
                        setHeaderTitle(
                            `Provider ${newUser.username} not added.`
                        )
                    );
                }
            });
        }
    };
    return (
        <section className="section admin-section">
            <UserForm onSubmit={onSubmit} />
        </section>
    );
};

export default AddUser;
