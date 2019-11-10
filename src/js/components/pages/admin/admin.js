import React, { useEffect, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import User from "./user-card";
import Title from "Components/title";
import Button from "Components/button";
import Loader from "Components/loader";
import UserContext from "Utils/user-service-context";
import { setHeaderTitle } from "Actions/actions";
import Modal from "Components/modal-window";
import useLoader from "Utils/loader-hook";

const Admin = () => {
    const us = useContext(UserContext);
    const dispatch = useDispatch();
    const [users, loading, error, setUsers] = useLoader(us.getUsers);
    const [modal, setModal] = useState(false);
    const [deleteuser, setDeleteuser] = useState("");

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
        <section className="section user-section">
            <Modal
                isOpen={modal}
                onSubmit={() => {
                    delUser(deleteuser);
                    setModal(false);
                }}
                onCancel={() => {
                    setModal(false);
                }}
                title="Confirm deleting user"
            >
                Remove user {deleteuser}?
            </Modal>
            <div className="user-section__header">
                <Title className="title-user">Users List</Title>
                <Button to="/add-user" navLink={true} className="button-link">
                    Add user
                </Button>
            </div>
            {loading ? (
                <Loader />
            ) : (
                users.map(user => (
                    <User
                        key={user.username}
                        user={user}
                        onDelete={() => {
                            setModal(true);
                            setDeleteuser(user.username);
                        }}
                    />
                ))
            )}
        </section>
    );
};

export default Admin;
