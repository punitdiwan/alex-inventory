import React from 'react'
import Image from 'next/image'
import confirmPass from "../public/Image/loginpageImg/confirm.png"
import logo from "../public/Image/loginpageImg/logoRound.png"
import Link from 'next/link'

const createNewPassword = () => {
    return (

        <div className="flex ">

            <div className=" basis-1/2 lg:block hidden  ">
                <Image className='flex justify-center mx-auto my-6' src={logo} width={162} height={121} alt="icon" />
                <Image className=' flex justify-center mx-auto' src={confirmPass} width={470} height={598} alt="icon" />
            </div>

            <div className="basis-1/2 mx-auto lg:pt-40 pb-16 px-20 bg-slate-100">
                <Image className='flex lg:hidden justify-center mx-auto my-6 ' src={logo} width={162} height={121} alt="icon" />

                <div className="card w-100 px-10 justify-center mx-auto border border-[#E97208] bg-white  pt-10 pb-16 ">
                    <div className="">
                        <h1 className='font-medium text-xl flex justify-center mx-auto  mb-10'>Create New Password</h1>

                        <div className="form-control mb-9">

                            <input type="text" placeholder="Create New Password" className="mb-4 border-[#E97208] border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0" />
                            <input type="text" placeholder="Confirm New Password" className="mb-4 border-[#E97208] border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0" />
                        </div>

                        <Link href="/" className="form-control mt-[52px] ">
                            <button className="py-3 text-white rounded-full bg-[#E97208]">Submit</button>
                        </Link>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default createNewPassword
