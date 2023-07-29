import React, { useReducer } from "react";
import { useRouter } from 'next/router'
import { AuthContext } from "./AuthContext";
import { loginWithEmail, logout } from "../lib/appwrite";

export const AuthProvider = ({ children }) => {
   const router = useRouter()


   async function userLoginHandler(username, password) {
      try {
         const response = await fetch('/api/hello', {
            method: "POST",
            body: JSON.stringify({
               username: username,
               password: password
            }),
            headers: {
               "Content-type": "application/json"
            }
         });
         const data = await response.json();

         if (data.code && data.code !== 201) {
            throw new Error(data.response.message)
         }

         localStorage.setItem("userId", data.userId);
         router.replace("/dashboard")
      } catch (error) {
         return error.message
      }





      // const jsonValue = JSON.stringify(response);
      // localStorage.setItem('bakery:user', jsonValue)
   }

   const value = {
      loginUser: userLoginHandler
   }

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}