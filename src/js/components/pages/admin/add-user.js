import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import UserForm from "./add-user-form";
import UserServiceContext from "Utils/user-service-context";
import { setHeaderTitle } from "Actions/actions";

const AddUser = ({ match: { params: user } }) => {
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
        if (!user.user) {
            us.addUser(newUser).then(user => {
                if (user) {
                    dispatch(
                        setHeaderTitle(
                            `User ${user.username} added successfully.`
                        )
                    );
                } else {
                    dispatch(
                        setHeaderTitle(`User ${newUser.username} not added.`)
                    );
                }
            });
        } else {
            us.updateUser(user.user, newUser).then(done => {
                if (done) {
                    dispatch(
                        setHeaderTitle(
                            `User ${user.user} successfully updated.`
                        )
                    );
                } else {
                    dispatch(
                        setHeaderTitle(`User ${user.user} not updated.`)
                    );
                }
            });
        }
    };
    return (
        <section className="section user-section">
            <UserForm onSubmit={onSubmit} user={user.user} />
        </section>
    );
};

export default AddUser;
