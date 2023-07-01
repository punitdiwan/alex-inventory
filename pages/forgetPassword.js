import React from 'react'
import Image from 'next/image'
import forgetPass from "../public/Image/loginpageImg/forgot.png"
import logo from "../public/Image/loginpageImg/logoRound.png"
import Link from 'next/link'


const forgetPassword = () => {
    return (


        <div className="flex ">

            <div className=" basis-1/2 lg:block hidden  ">
                <Image className='flex justify-center mx-auto my-6' src={logo} width={162} height={121} alt="icon" />
                <Image className=' flex justify-center mx-auto' src={forgetPass} width={470} height={598} alt="icon" />
            </div>

            <div className="basis-1/2 mx-auto lg:pt-40 pb-14 px-20 bg-slate-100 ">
                <Image className='flex lg:hidden justify-center mx-auto my-6 ' src={logo} width={162} height={121} alt="icon" />

                <div className="card w-100 px-10 justify-center mx-auto border border-[#E97208] bg-white pt-10 pb-16 shadow-xl ">
                    <div className="">
                        <h1 className='font-medium text-xl flex justify-center mx-auto  mb-3'>Forget Password</h1>

                        <h1 className=' text-md flex justify-center mx-auto  mb-8'>Please enter your Email Id to Receive a Verification Code. </h1>
                        <div className="form-control mb-11">
                            <label className="label">
                                <span className="text-lg">Email*</span>
                            </label>
                            <input type="text" placeholder="Enter your Email........." className="mb-4 border-[#E97208] border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0" />
                        </div>

                        <Link href="/verifyPassword" className="form-control mt-6 ">
                            <button className="py-3 text-white rounded-full bg-[#E97208]">Submit</button>
                        </Link>
                    </div>
                </div>



            </div>


        </div>


    )
}

export default forgetPassword
