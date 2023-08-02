import { useRouter } from "next/router";
import { me } from "../lib/appwrite";
import { AuthProvider } from "../store/AuthContext"
import "../styles/globals.css"
import { useCallback, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const getUserData = async ()=> {
      const response = await me()
      const userData = typeof response !== "object"? await JSON.parse(response) : response
      
      if(userData.code && userData.code === 401) {
        console.log("USER IS LOGGED_OUT!");
       router.replace('/')
      }
      if(userData && userData.code !== 401) {
        console.log("USER IS LOGGED_IN!");
      }
    }
    getUserData();
  },[me])
  

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>

  )
}
