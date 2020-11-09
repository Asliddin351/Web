import React, {useState}from 'react';
import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import { FormHelperText } from '@material-ui/core';
import '../Sceens/homescreen.css'
const Profile = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    if(isLoading) return <div>Loading...</div>


    return (
        isAuthenticated && (
        <>
            <div className="AvatarContainer">
                <img src={user.picture} alt={user.name} className="logo"/>
                <h1 className="userName">{user.name}</h1>
                {/* <p>{user.email}</p> */}
                {/* <JSONPretty data={user}/>  */}
            </div>
        </>
        )
    );
}




export default Profile;
