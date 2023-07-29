import React, { useState, useEffect, useContext } from 'react'
import WithoutLayout from '../components/WithoutLoyout'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken';
import { AuthContext } from '../store/AuthContext';


const login = () => {
  const router = useRouter()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const {loginUser} = useContext(AuthContext)



  function usernameHandler(event) {
    event.preventDefault();
    setUsername(event.target.value)
  }
  function passwordHandler(event) {
    event.preventDefault();
    setPassword(event.target.value)
  }


   async function submitHandler(event) {
    event.preventDefault()
    try{
      setLoginError(false)
      const response = await loginUser(username, password)
      if(response) throw new Error(response)

    }catch(error){
      setLoginError(error.message)
    }
  }

  // useEffect(()=> {
  //   dispatch(isLoggedInHandler())
  //   if(isLoggedIn){
  //     router.push('/dashboard')
  //   }
  // },[isLoggedIn])



  return (

    <form onSubmit={submitHandler}>

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
                  onChange={usernameHandler}
                  required
                  type="text"
                  placeholder="Enter your Email..."
                  className="mb-4 border-[#E97208] border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0 "

                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-lg">Password*</span>
                </label>

                <input
                  name='password'
                  onChange={passwordHandler}
                  required
                  type="password"
                  placeholder="Enter your Password..."

                  className="mb-4 border-[#E97208] border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0 "

                />

                <div className="form-control">

                  <div className="cursor-pointer flex justify-end">

                    <a href="/forgetPassword" className="label-text-alt link link-hover py-1 text-[#E97208] font-semibold ">Forgot password</a>
                  </div>
                </div>


              </div>



              <div className="mt-4">
                {<p className='text-center text-red-600 mb-1'>{loginError}</p>}
                <button className="block w-[100%]  btn py-3 text-white border-2 border-[#E97208] hover:bg-white hover:text-[#E97208] hover:border-[#E97208] rounded-full bg-[#E97208]">Login</button>
              </div>

            </div>
          </div>



        </div>


      </div>

    </form>



  )
}

export default login
