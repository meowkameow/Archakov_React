import React from "react";
import { Navigate } from "react-router-dom";

export const Profile = () => {

        if(!window.localStorage.getItem('token')){
            return <Navigate to="/"/>
        }
    return (
        <h1>Закрытый профиль пользователя</h1>
    );
};