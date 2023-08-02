import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

import { IoMdArrowDropdown } from "react-icons/io";
import TransferServiceComp from "../components/TransferServiceComp";
import AllBookingComp from "../components/AllBookingComp";

import { AuthContext } from "../store/AuthContext";
import { getData, getTeamMembers } from "../lib/appwrite";

const DUMMY_ORDERS = [
  {
    id: "1",
    fullName: "Johnny Depp",
    address: "3093 Cheshire Road",
    contact: "+971 21456320",
    orderItem: "Cold Coffee(2)",
    orderStatus: "On the way",
    amount: "$ 80.00",
    method: "(PP)",
    payment: "failed",
  },
  // { id: "2", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
  // { id: "3", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Pending" },
  // { id: "4", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
  // { id: "5", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Failed" },
  // { id: "6", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Pending" },
  // { id: "7", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Pending" },
];

const Admin = () => {
  const { getUserData } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState();
  const [orders, setOrders] = useState({});
  // const [ordersDocuments, setOrdersDocuments] = ([])
  const ordersDocuments = orders?.documents;
  const [errorInOrders, setErrorInOrders] = useState(false);
  const [pendingOrder, setPendingOrders] = useState("...");
  const [totalCustomers, setTotalCustomers] = useState("...");
  const router = useRouter();

  // **GETTING USER**
  useEffect(() => {
    async function getUserDataHandler() {
      const response = await getUserData();
      if (typeof response === "object") {
        setUserData(response);
      }
    }
    getUserDataHandler();
  }, [getUserData]);

  const query = "NEW";

  // **GETTING ORDERS**
  useEffect(() => {
    async function getDataHandler(databaseId, collectionId) {
      try {
        const response = await getData(databaseId, collectionId);
        if (typeof response !== "object")
          throw new Error("Something went wrong! Try again later");
        const itemDetails = response?.documents.map((item) => item.details);

        setOrders({
          ...response,
          documents: response.documents,
        });
      } catch (error) {
        setErrorInOrders(true);
        console.log(error.message);
      }
    }
    getDataHandler(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLL_ORDERS
    );
  }, [getData]);

  // **GETTING PENDING/"NEW" ORDERS**
  useEffect(() => {
    async function getPendingOrders() {
      let headersList = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Appwrite-Project": "64b8cd79427ebc81a71c",
      };
      let response1 = await fetch(
        "https://cw.maitretech.com/v1/databases/64b8d1cb6d5ef4397c37/collections/64900e33e090e3f48b2d/documents?queries[0]=equal(%5C%22status%5C%22%2C%20%5B%5C%22NEW%5C%22%5D)",
        {
          method: "GET",
          headers: headersList,
        }
      );
      let data = await response1.json();
      setPendingOrders(data.total);
    }
    getPendingOrders();
  }, []);

  // **GETTING TOTAL CUSTOMERS**
  useEffect(() => {
    async function getTotalCustomers() {
      try {
        const response = await getTeamMembers(
          process.env.NEXT_PUBLIC_CUSTOMERS_TEAM_ID
        );
        setTotalCustomers(response);
      } catch (error) {
        console.log("Team Error: ", error.message);
      }
    }
    getTotalCustomers();
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pt-5 sm:w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-5">
        {/* ********************Total Customer****************** */}

        <Link
          href={"#"}
          className="card grid h-36 shadow-md bg-white border-b-4 border border-[#4267B2] "
        >
          <div className="p-5">
            <h2 className="card-title">Total Customers</h2>

            <div className="flex ">
              <p className=" text-xl font-semibold  mx-12 my-2">
                {totalCustomers.total}
              </p>
              <IoMdArrowDropdown className="text-4xl text-[#006332]" />
            </div>
          </div>
        </Link>
        {/* ********************Total Orders****************** */}

        <Link
          href={"#"}
          className="card grid h-36 shadow-md bg-white border-b-4 border border-[#006332]"
        >
          <div className="p-5">
            <h2 className="card-title">Total Orders</h2>

            <div className="flex ">
              <img
                className=""
                src="/completeicon.png"
                width={45}
                height={35}
                alt="logo"
              />
              <p className=" text-xl font-semibold  mx-12 my-2 text-[#006332]">
                {orders.total || "..."}
              </p>
            </div>
          </div>
        </Link>
        {/* ********************Total Earning****************** */}

        <Link
          href={"#"}
          className="card grid h-36 shadow-md bg-white border-b-4 border border-[#000000]"
        >
          <div className="p-5">
            <h2 className="card-title">Total Earning</h2>

            <div className="flex ">
              <p className=" text-xl font-semibold  mx-12 my-2 ">35,054</p>
              <IoMdArrowDropdown className="text-4xl text-[#006332]" />
            </div>
          </div>
        </Link>

        {/* ********************Pending Orders****************** */}
        <Link
          href={"#"}
          className="card grid h-36 shadow-md bg-white border-b-4 border border-[#FF9933]"
        >
          <div className="p-5">
            <h2 className="card-title">Pending Orders</h2>
            <div className="flex ">
              <img
                className=""
                src="/pendingicon.png"
                width={45}
                height={35}
                alt="logo"
              />
              <p className=" text-xl font-semibold  mx-12 my-2 text-[#FF9933]">
                {pendingOrder}
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-3 mx-1">
        <div className=" overflow-y-hidden ease-in duration-300 ">
          {userData && <AllBookingComp orders={ordersDocuments} />}

          {!userData && (
            <div className="bg-gray-200 ">
              <h1 className="text-2xl font-semibold  text-slate-500 text-center">
                {" "}
                Loading.....
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout(Admin);
