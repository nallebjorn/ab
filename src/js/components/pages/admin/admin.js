import React, { useEffect, useContext, useState } from "react";
import User from "./user-card";
import Title from "Components/title";
import Button from "Components/button";
import UserContext from "Utils/user-service-context";

const Admin = () => {
    const us = useContext(UserContext);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        us.getUsers().then(setUsers);
    }, []);
    console.log(users);
    return (
        <section className="section admin-section">
            <div className="admin-section__header">
                <Title className="title-admin">Users List</Title>
                <Button>Add user</Button>
            </div>
            {users.map(user => (
                <User key={user.username} user={user} />
            ))}
        </section>
    );
};

export default Admin;
