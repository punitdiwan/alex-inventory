import React from "react";
import Layout from "../components/Layout";
import { FaGreaterThan } from "react-icons/fa";

const prefrenceNotification = () => {
  return (
    <div
      className="
        ms:ml-[170px]
        md:px-5  md:py-10 md:h-screen  md:w-full md:border md:px-20
        lg:px-5  lg:py-10 lg:h-screen  lg:w-full lg:border lg:px-20
        "
    >
         <div
        style={{ display: "flex", marginTop: "5px" }}
        className=" ms:ml-[-120px]
        md:text-xl md:font-semibold md:mr-4
        lg:text-xl lg:font-semibold lg:mr-4"
         >
        Change <FaGreaterThan className="mt-1 ml-2 mr-2" /> Password
      </div>
      <div className=" md:bg-white md:rounded-lg md:px-10 md:py-10
      lg:bg-white lg:rounded-lg lg:px-10 lg:py-10
      
      ">
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-x-14 gap-y-5 mx-auto">
          <div className="">
            <label className="label">
              <span className="label-text">Current Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered focus:ring-1 focus:ring-[#1570EF] focus:border-[#1570EF] lg:w-full md:w-full ms:w-[350px] "
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">New Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered focus:ring-1 focus:ring-[#1570EF] focus:border-[#1570EF] lg:w-full md:w-full ms:w-[350px] "
            />
          </div>

          <div className="">
            <label className="label">
              <span className="label-text">Language</span>
            </label>
            <select className="input input-bordered focus:ring-1 focus:ring-[#1570EF] focus:border-[#1570EF] lg:w-full md:w-full ms:w-[350px] ">
              <option value="">Arabic</option>
              <option value="">English</option>
            </select>
          </div>

          <div className="">
            <label className="label">
              <span className="label-text">Default Currency</span>
            </label>
            <select className="input input-bordered focus:ring-1 focus:ring-[#1570EF] focus:border-[#1570EF] lg:w-full md:w-full ms:w-[350px] ">
              <option value="">Dirham</option>
              <option value="">Dollar</option>
              <option value="">Rupee</option>
            </select>
          </div>
        </div>

        <div className="flex 
        ms:ml-[90px] ms:mt-6
        md:justify-center md:mx-auto md:mt-6
        lg:justify-center lg:mx-auto lg:mt-6">
          <button className="btn rounded-1xl border-0 hover:border hover:border-[#1570EF] bg-[#1570EF] text-white hover:bg-white hover:text-[#1570EF] w-32">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout(prefrenceNotification);
