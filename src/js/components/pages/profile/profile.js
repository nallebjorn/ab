import React from 'react'
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Title from 'Components/title';

const Profile = () => {
    if (!useSelector(state => state.app.user.isLogged))
        return <Redirect to="/login" />;
    return (
        <Title typing={true}>
            Profile page
        </Title>
    ) 
}

export default Profile
