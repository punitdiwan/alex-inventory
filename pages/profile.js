import React from 'react'
import Layout from "../components/Layout"
import { GrGallery } from "react-icons/gr";


const profile = () => {



    return (

        <div className='px-5 md:px-20 py-10  w-full'>
            <div className=" bg-white rounded-lg px-10 py-10">


                <div className="flex mb-5">

                    <img className='mx-3' src="/Admin_Image.png" style={{ width: "70px", height: "70px" }} alt="admin" />


                    <div type="file" accept="image/*" className="cursor-pointer">
                        <input type="file" accept="image/*" id="uploadImage" hidden />

                        <label htmlFor="uploadImage">
                            <GrGallery className="text-2xl mx-auto my-2" />
                            <p>Gallery</p>
                        </label>

                    </div>


                    <div className=""  >
                        <p className='font-semibold' >Jonathan</p>

                        <h1 >admin@example.com<span className='mx-1 text-slate-500'>-admin</span></h1>

                    </div>
                    {/* <img className='mx-3 py-5' src="/Image/headerImage/downarrow.png" width={15} height={5} alt="logo" /> */}
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2  gap-x-14 gap-y-5 mx-auto">



                    <div className="">
                        <label className="label">
                            <span className="label-text text-xl font-medium">User Name</span>
                        </label>
                        <input type="text" placeholder="User Name" className="input input-bordered focus:ring-1  focus:ring-[#E97208] focus:border-[#E97208] w-full" />
                    </div>

                    <div className="">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Full Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" className="input input-bordered focus:ring-1  focus:ring-[#E97208] focus:border-[#E97208] w-full " />
                    </div>


                    <div className="">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered focus:ring-1  focus:ring-[#E97208] focus:border-[#E97208] w-full " />
                    </div>

                    <div className="">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered focus:ring-1  focus:ring-[#E97208] focus:border-[#E97208] w-full " />
                    </div>


                    <div className="">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Title</span>
                        </label>
                        <input type="text" placeholder="Administrator" className="input input-bordered focus:ring-1 focus:ring-green-800 focus:border-green-800 w-full " />
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Language</span>
                        </label>
                        <input type="text" placeholder="Language" className="input input-bordered focus:ring-1 focus:ring-green-800 focus:border-green-800 w-full " />
                    </div>


                </div>

                <div className="flex justify-center mx-auto mt-6">
                    <button className="btn rounded-1xl border-0 hover:border hover:border-[#E97208] bg-[#E97208] text-white hover:bg-white hover:text-[#E97208] w-32">Save</button>
                </div>

            </div>


        </div>


    )
}

export default Layout(profile)
