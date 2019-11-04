import React, {useContext} from "react";
import UserForm from "./add-user-form";
import UserServiceContext from "Utils/user-service-context";

const AddUser = () => {
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
        us.getUser(newUser)
        if (inputRole.name === "provider") {
            const newProvider = {};
        }
        // console.log(values);
    };
    return (
        <section className="section admin-section">
            <UserForm onSubmit={onSubmit} />
        </section>
    );
};

export default AddUser;
