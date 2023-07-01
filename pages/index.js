import React, { useState, useEffect } from 'react'
import WithoutLayout from '../components/WithoutLoyout'
import Link from 'next/link'
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';


const login = () => {

    {/*
 const router = useRouter();
    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setError("");
        setData({ ...data, [e.target.name]: e.target.value });
        // console.log(data)
    };


    const handleLogin = async (e) => {
        e.preventDefault();
     
        // console.log(data.username, "username")
        // console.log(data.password, "password")

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(data),
        };

        const response = await fetch("https://www.mamtismamas.com/api/newLogin", requestOptions);
        const data1 = await response.json();

        // Handle the response data
        console.log("final response", data1);


        localStorage.setItem("token", data1.AccessToken);
        const decodedToken = jwt.decode(data1.AccessToken);
        // console.log(decodedToken); // You can access the decoded token here

        if (data1.AccessToken && decodedToken["cognito:groups"][0] === "admin") {

            // Redirect to the dashboard page for admins
            router.push('/dashboard');
        } else {
            // Set error state for non-admin users
            setError("Invalid email and password");
        }

    };
*/}


    // onSubmit={handleLogin}

    return (

        <form >

            <div className="flex ">
                <div className="basis-1/2 lg:block hidden" style={{ height: "100vh", }}>
                    <img src="/Image/loginpageImg/loginImg.png" style={{ height: "100%", width: "100%" }} alt="icon" />
                </div>

                <div className="basis-1/2 mx-auto ">

                    <div className="card flex-shrink-0  justify-center  bg-white px-10 pt-7 pb-10 ">
                        <div className="">
                            <img className='flex justify-center mx-auto my-6' src="/Image/loginpageImg/logoRound.png" width={162} height={121} alt="icon" />

                            <h1 className='font-medium text-xl flex justify-center mx-auto  mb-3 '>Login as a Admin</h1>


                            <div className="form-control ">
                                <label className="label">
                                    <span className="text-lg">Email*</span>
                                </label>
                                <input
                                    name='username'
                                    required
                                    type="text"
                                    placeholder="Enter your Email..."
                                    // value={data.username}
                                    className="mb-4 border-[#E97208] border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0 "
                                // onChange={handleChange} 
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg">Password*</span>
                                </label>

                                <input
                                    name='password'
                                    required
                                    type="password"
                                    placeholder="Enter your Password..."
                                    // value={data.password}
                                    className="mb-4 border-[#E97208] border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0 "
                                // onChange={handleChange}
                                />

                                <div className="form-control">

                                    <div className="cursor-pointer flex justify-end">

                                        <a href="/forgetPassword" className="label-text-alt link link-hover py-1 text-[#E97208] font-semibold ">Forgot password</a>
                                    </div>
                                </div>


                            </div>

                            {/* <div className="text-center text-red-800">{error}</div>*/}

                            {/*<div className="form-control mt-6 ">
                                        <button type='submit' className="btn py-3 text-white rounded-full bg-green-600">Login</button>
                                    </div>*/}
                            <Link href="/dashboard" className="form-control mt-6 ">
                                <button className="btn py-3 text-white border-2 border-[#E97208] hover:bg-white hover:text-[#E97208] hover:border-[#E97208] rounded-full bg-[#E97208]">Login</button>
                            </Link>
                        </div>
                    </div>



                </div>


            </div>

        </form>



    )
}

export default login
