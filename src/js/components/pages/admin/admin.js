import React, { useEffect, useContext, useState } from "react";
import User from "./user-card";
import Title from "Components/title";
import Button from "Components/button";
import Loader from "Components/loader";
import Link from "Components/link";
import UserContext from "Utils/user-service-context";

const Admin = () => {
    const us = useContext(UserContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        us.getUsers()
            .then(setUsers)
            .then(() => {
                setLoading(!loading);
            });
    }, []);
    if (loading) {
        return <Loader />;
    }
    return (
        <section className="section admin-section">
            <div className="admin-section__header">
                <Title className="title-admin">Users List</Title>
                <Button>
                    <Link href="/add-user" className="link-button">Add user</Link>
                </Button>
            </div>
            {users.map(user => (
                <User key={user.username} user={user} />
            ))}
        </section>
    );
};

export default Admin;
