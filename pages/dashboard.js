import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout"

import { IoMdArrowDropdown } from "react-icons/io";
import TransferServiceComp from "../components/TransferServiceComp";
import AllBookingComp from "../components/AllBookingComp";
import { me } from "../lib/client";




const Admin =  () => {

    async function getUser(){
      const userData = await me()
      console.log("user data" , userData);
    }
    getUser()


  // const datac = {
  //   cardData: [
  //     { id: "1", heading: "Total Users", img: "/Image/dashboardImage/user.png", totals: "3500", name: "" },
  //     { id: "2", heading: "Total Chefs", img: "/Image/dashboardImage/chefs.png", totals: "3500", name: "" },
  //     { id: "3", heading: "Total Customers", img: "/Image/dashboardImage/customer.png", totals: "3500", name: "" },
  //     { id: "4", heading: "Total Revenue", img: "/Image/dashboardImage/revenue.png", totals: "$2,52,358.23 ", name: "" },

  //   ]
  // }
  const [ourchef, setOurchef] = useState([]);
  const [ourcustomer, setOurcustomer] = useState([]);
  const [cheffLength, setChefLength] = useState(0);
  const [customerLength, setCustomerLength] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {


    const fetchOurCheff = async () => {
      try {
        const response = await fetch("https://www.mamtismamas.com/api/cheff/allChefs")
        const jsonData = await response.json()
        // console.log(jsonData, "data")
        setOurchef(jsonData);
        const length = jsonData.length;
        setChefLength(length);
        // console.log("Length of fetched data:", length);
      } catch (err) {
        console.log(err)
      }
    }

    const fetchOurCustomer = async () => {

      try {
        const response = await fetch("https://www.mamtismamas.com/api/customer/allCustomer")
        const jsonData = await response.json()
        // console.log(jsonData, "customer_data")
        setOurcustomer(jsonData);
        const length2 = jsonData.length;
        setCustomerLength(length2);
        // console.log("Length of customer data:", length2);
      } catch (err) {
        console.log(err)
      }
      ;
    }

    fetchOurCustomer();
    fetchOurCheff();

  }, []);
  // console.log(data);
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
              {/*<p className=" text-xl font-semibold  mx-12 my-2">{customerLength}</p>*/}

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
              {/*<p className=" text-xl font-semibold  mx-12 my-2">{customerLength}</p>*/}

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
              {/*<p className=" text-xl font-semibold  mx-12 my-2">{customerLength}</p>*/}

            </div>

            {/*<p className=" text-xl font-semibold  mx-12 my-2">&euro; 2,52,358.23 </p>*/}

          </div>
        </Link>
        {/* ********************Pending Orders****************** */}
        <Link href={"#"} className="card grid h-36 shadow-md bg-white border-b-4 border border-[#FF9933]">

          <div className="p-5">

            <h2 className="card-title">Pending Orders</h2>

            <div className="flex ">

              <img className='' src="/pendingicon.png" width={45} height={35} alt="logo" />
              <p className=" text-xl font-semibold  mx-12 my-2 text-[#FF9933]">01,210</p>
              {/*<p className=" text-xl font-semibold  mx-12 my-2">{customerLength}</p>*/}

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
