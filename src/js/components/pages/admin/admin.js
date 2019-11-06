import React, { useEffect, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import User from "./user-card";
import Title from "Components/title";
import Button from "Components/button";
import Loader from "Components/loader";
import Link from "Components/link";
import UserContext from "Utils/user-service-context";
import { setHeaderTitle } from "Actions/actions";

const Admin = () => {
    const us = useContext(UserContext);
    const dispatch = useDispatch();
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

    const delUser = async username => {
        const deleted = await us.deleteUser(username);
        if (deleted) {
            dispatch(setHeaderTitle(`User ${username} deleted successfully.`));
            setUsers(users.filter(user => user.username != username));
        } else {
            dispatch(setHeaderTitle(`User ${username} not deleted.`));
        }
    };

    return (
        <section className="section admin-section">
            <div className="admin-section__header">
                <Title className="title-admin">Users List</Title>
                <Button>
                    <Link href="/add-user" className="link-button">
                        Add user
                    </Link>
                </Button>
            </div>
            {users.map(user => (
                <User
                    key={user.username}
                    user={user}
                    onClick={() => {
                        delUser(user.username);
                    }}
                />
            ))}
        </section>
    );
};

export default Admin;
