import React from "react";
import Title from "Components/title";

const Admin = () => {
    return (
        <section className="section admin-section">
            <Title>Users List</Title>
            <div className="admin__card">
                <div className="admin__card-field">Username</div>
                <div className="admin__card-field">Phone</div>
                <div className="admin__card-field">Email</div>
                <div className="admin__card-field">Role</div>
                <div className="admin__card-field">CreateDate</div>
                <div className="admin__card-field">UpdateDate</div>
                <div className="admin__card-field">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
            {/* <table className="table admin__table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>CreateDate</th>
                        <th>UpdateDate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Username</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>CreateDate</td>
                        <td>UpdateDate</td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>CreateDate</td>
                        <td>UpdateDate</td>
                    </tr>
                </tbody>
            </table> */}
        </section>
    );
};

export default Admin;
