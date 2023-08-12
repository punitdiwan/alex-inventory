import React from "react";
import Layout from "../components/Layout";
import { GrGallery } from "react-icons/gr";
import { FaGreaterThan } from "react-icons/fa";

const profile = () => {
  return (
    <div className="px-5 md:px-20 py-10  w-full">
      <div
        style={{ display: "flex", marginLeft: "50px", marginTop: "5px" }}
        className="text-xl font-semibold mr-4"
         >
        Setting <FaGreaterThan className="mt-1 ml-2 mr-2" /> Profile
      </div>
      <div className=" 
      ms:bg-white ms:rounded-lg ms:px-10 ms:py-10 ms:ml-[90px]
      md:bg-white md:rounded-lg md:px-10 md:py-10 
      lg:bg-white lg:rounded-lg lg:px-10 lg:py-10 
      
      ">
        <div className="flex lg:mb-5 md:mb-5 ">
          <img
            className="mx-3"
            src="/Image/adminLogo.png"
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            alt="admin"
          />

          <div type="file" accept="image/*" className="cursor-pointer">
            <input type="file" accept="image/*" id="uploadImage" hidden />

            <label htmlFor="uploadImage">
              <GrGallery className="text-2xl mx-auto my-2" />
              <p className="cursor-pointer">Gallery</p>
            </label>
          </div>
          <div className="">
            <p className=" md:font-semibold lg:font-semibold">Jenny Smith</p>

            <h1>
              admin@example.com
              <span
                className="
                        md:mx-1 md:text-slate-500
                        lg:mx-1 lg:text-slate-500"
              >
                -admin
              </span>
            </h1>
          </div>
          {/* <img className='mx-3 py-5' src="/Image/headerImage/downarrow.png" width={15} height={5} alt="logo" /> */}
        </div>

        <div
          className=" 
                flex ms:flex-col ms:ml-[150px]
                grid grid-cols-1 md:grid-cols-2  md:gap-x-14 md:gap-y-5 md:mx-auto
                grid lg:grid-cols-1 lg:grid-cols-2  lg:gap-x-14 lg:gap-y-5 lg:mx-auto
                                 
                "
        >
          <div className="">
            <label className="label">
              <span className="label-text text-xl font-medium">User Name</span>
            </label>
            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered focus:ring-1  focus:ring-[#1570EF] focus:border-[#1570EF] lg:w-full md:w-full ms:w-[350px]"
            />
          </div>

          <div className="">
            <label className="label">
              <span className="label-text text-xl font-medium">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered focus:ring-1  focus:ring-[#1570EF] focus:border-[#1570EF] lg:w-full md:w-full ms:w-[350px]"
            />
          </div>

          <div className="">
            <label className="label">
              <span className="label-text text-xl font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered focus:ring-1  focus:ring-[#1570EF] focus:border-[#1570EF] lg:w-full md:w-full ms:w-[350px] "
            />
          </div>

          <div className="">
            <label className="label">
              <span className="label-text text-xl font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered focus:ring-1  focus:ring-[#1570EF] focus:border-[#1570EF] lg:w-full md:w-full ms:w-[350px] "
            />
          </div>

          <div className="">
            <label className="label">
              <span className="label-text text-xl font-medium">Title</span>
            </label>
            <input
              type="text"
              placeholder="Administrator"
              className="input input-bordered focus:ring-1  focus:ring-[#1570EF] focus:border-[#1570EF] lg:w-full md:w-full ms:w-[350px] "
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text text-xl font-medium">Language</span>
            </label>
            <input
              type="text"
              placeholder="USA English"
              className="input input-bordered focus:ring-1  focus:ring-[#1570EF] focus:border-[#1570EF] lg:w-full md:w-full ms:w-[350px] "
            />
          </div>
        </div>

        <div
          className="flex 
                ms:ml-[240px] ms:mt-6 
                md:justify-center md:mx-auto md:mt-6
                lg:justify-center lg:mx-auto lg:mt-6"
        >
          <button className="btn rounded-1xl border-0 hover:border hover:border-[#1570EF] bg-[#1570EF] text-white hover:bg-white hover:text-[#1570EF] lg:w-32 md:w-32 ms:ml-[70px]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout(profile);
