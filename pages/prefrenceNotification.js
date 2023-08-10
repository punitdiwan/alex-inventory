import React from 'react'
import Layout from "../components/Layout"


const prefrenceNotification = () => {
    return (
        <div className='px-5 md:px-20 py-10 h-screen  w-full border'>
            <div className=" bg-white rounded-lg px-10 py-10">



                <div className=" grid grid-cols-1 md:grid-cols-2  gap-x-14 gap-y-5 mx-auto">

                    <div className="">

                        <label className="label">
                            <span className="label-text">Current Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered focus:ring-1 focus:ring-[#1570EF] focus:border-[#1570EF] w-full " />
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text">New Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered focus:ring-1 focus:ring-[#1570EF] focus:border-[#1570EF] w-full " />
                    </div>

                    <div className="">
                        <label className="label">
                            <span className="label-text">Language</span>
                        </label>
                        <select className="input input-bordered focus:ring-1 focus:ring-[#1570EF] focus:border-[#1570EF] w-full ">
                            <option value="">Arabic</option>
                            <option value="">English</option>
                        </select>
                    </div>

                    <div className="">
                        <label className="label">
                            <span className="label-text">Default Currency</span>
                        </label>
                        <select className="input input-bordered focus:ring-1 focus:ring-[#1570EF] focus:border-[#1570EF] w-full ">
                            <option value="">Dirham</option>
                            <option value="">Dollar</option>
                            <option value="">Rupee</option>
                        </select>
                    </div>

                </div>

                <div className="flex justify-center mx-auto mt-6">
                    <button className="btn rounded-1xl border-0 hover:border hover:border-[#1570EF] bg-[#1570EF] text-white hover:bg-white hover:text-[#1570EF] w-32">Save</button>
                </div>

            </div>


        </div>
    )
}

export default Layout(prefrenceNotification)

