import React from 'react'
import Image from 'next/image'
import forgetVerify from "../public/Image/loginpageImg/verify.png"
import logo from "../public/Image/loginpageImg/logoRound.png"
import Link from 'next/link'


const verifyPassword = () => {
    return (

        <div className="flex">

            <div className=" basis-1/2 lg:block hidden  ">
                <Image className='flex justify-center mx-auto my-6' src={logo} width={162} height={121} alt="icon" />
                <Image className='flex justify-center mx-auto' src={forgetVerify} width={470} height={598} alt="icon" />
            </div>

            <div className="basis-1/2 mx-auto lg:pt-32 pb-20 px-20 bg-slate-100">
                <Image className='flex lg:hidden justify-center mx-auto my-6 ' src={logo} width={162} height={121} alt="icon" />

                <div className="card w-100 px-10 justify-center mx-auto border border-[#E97208] bg-white  pt-9 pb-20 shadow-xl ">
                    <div className="">
                        <h1 className='font-medium text-xl flex justify-center mx-auto  mb-[30px]'>Forget Password</h1>

                        <h1 className='text-md mb-6 flex justify-center mx-auto'>Please enter 4 digit code sent to given Gmail id </h1>
                        <div className="form-control mb-9">
                            {/* <label className="label">
                                        <span className="text-lg">Email*</span>
                                    </label> */}
                            <input type="text" placeholder="OTP....." className="mb-4 border-[#E97208] border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0" />
                        </div>

                        <div className="form-control">

                            <label className="cursor-pointer flex justify-end ">
                                <a href="/forgetPassword" className="label-text-alt link link-hover text-[#E97208] font-semibold">Resend</a>
                            </label>
                        </div>

                        <Link href="/createNewPassword" className="form-control mt-6 ">
                            <button className="py-3 text-white rounded-full bg-[#E97208]">Verify</button>
                        </Link>

                    </div>


                </div>



            </div>


        </div>

    )
}

export default verifyPassword
