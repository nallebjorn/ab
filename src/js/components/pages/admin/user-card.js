import React from "react";
import Button from "Components/button";

const UserCard = ({
    user: {
        username,
        phone,
        email,
        role: { name: role }
    },
    onDelete
}) => {
    return (
        <div className="card card-user">
            <div className="card__field card__field-user">{username}</div>
            <div className="card__field card__field-user">{phone}</div>
            <div className="card__field card__field-user">{email}</div>
            <div className="card__field card__field-user">{role}</div>
            <div className="card__field card__field-user">
                <Button
                    className="button-link"
                    navLink={true}
                    to={`add-user/${username}`}
                >
                    edit
                </Button>
            </div>
            <div className="card__field card__field-user">
                <Button onClick={onDelete}>delete</Button>
            </div>
        </div>
    );
};

export default UserCard;
