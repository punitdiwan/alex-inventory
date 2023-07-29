import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout"
import { useRouter } from "next/router";

import { IoMdArrowDropdown } from "react-icons/io";
import TransferServiceComp from "../components/TransferServiceComp";
import AllBookingComp from "../components/AllBookingComp";
import { me } from "../lib/appwrite";




const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState({});
  const router = useRouter();

  // **GETTING CURRENT SESSION**
  useEffect(() => {
    async function getSessionHandler() {
      const session = await me()
      setSession(session)
    }
    getSessionHandler()
  }, [])




  // **CHECKING IF THE USER IS LOGGED IN OR NOT**
  //  useEffect(()=> {
  //   dispatch(isLoggedInHandler())
  //   if(!isLoggedIn){
  //     router.replace('/')
  //   }
  // },[isLoggedIn])


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pt-5 sm:w-full h-full" >



      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-5">
        {/* ********************Total Customer****************** */}

        <Link href={"#"} className="card grid h-36 shadow-md bg-white border-b-4 border border-[#4267B2] ">

          <div className="p-5">

            <h2 className="card-title">Total Customer</h2>

            <div className="flex ">
              <p className=" text-xl font-semibold  mx-12 my-2">62,541</p>
              <IoMdArrowDropdown className='text-4xl text-[#006332]' />


            </div>

          </div>
        </Link>
        {/* ********************Total Orders****************** */}

        <Link href={"#"} className="card grid h-36 shadow-md bg-white border-b-4 border border-[#006332]">

          <div className="p-5">

            <h2 className="card-title">Total Orders</h2>

            <div className="flex ">
              <img className='' src="/completeicon.png" width={45} height={35} alt="logo" />
              <p className=" text-xl font-semibold  mx-12 my-2 text-[#006332]">62,541</p>


            </div>

          </div>

        </Link>
        {/* ********************Total Earning****************** */}

        <Link href={"#"} className="card grid h-36 shadow-md bg-white border-b-4 border border-[#000000]">

          <div className="p-5">

            <h2 className="card-title">Total Earning</h2>

            <div className="flex ">
              <p className=" text-xl font-semibold  mx-12 my-2 ">35,054</p>
              <IoMdArrowDropdown className='text-4xl text-[#006332]' />


            </div>



          </div>
        </Link>
        {/* ********************Pending Orders****************** */}
        <Link href={"#"} className="card grid h-36 shadow-md bg-white border-b-4 border border-[#FF9933]">

          <div className="p-5">

            <h2 className="card-title">Pending Orders</h2>

            <div className="flex ">

              <img className='' src="/pendingicon.png" width={45} height={35} alt="logo" />
              <p className=" text-xl font-semibold  mx-12 my-2 text-[#FF9933]">01,210</p>


            </div>

          </div>
        </Link>

      </div>


      <div className="mt-3 mx-1">

        <div className=" overflow-y-hidden ease-in duration-300 ">

          <AllBookingComp />


        </div>
      </div>

    </div>
  );
};

export default Layout(Admin);
