import React, { useState } from "react";
import { useRouter } from 'next/router'
import { loginWithEmail, logout, me } from "../lib/appwrite";


export const AuthContext = React.createContext({
    loginUser: (username, password) => { },
    logoutUser: () => { },
    getUserData: () => { }
});



export const AuthProvider = ({ children }) => {
    const router = useRouter();

    async function getUserDataHandler() {
        try {
            const response = await me()
            return response
        } catch (error) {
            return error.message
        }
    };

    async function userLoginHandler(username, password) {
        try {
            const loginResponse = await loginWithEmail(username, password)
            // console.log(loginResponse);
        } catch (error) {
            return error.message
        }
    };

    async function userLogoutHandler() {
        try {
            const response = await logout()
            router.replace('/')
        } catch (error) {
            return error.message
        }

    };





    const value = {
        getUserData: getUserDataHandler,
        loginUser: userLoginHandler,
        logoutUser: userLogoutHandler,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}