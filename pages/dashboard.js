import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

import { IoMdArrowDropdown } from "react-icons/io";
import TransferServiceComp from "../components/TransferServiceComp";
import AllBookingComp from "../components/AllBookingComp";

import { AuthContext } from "../store/AuthContext";
import { getData, getTeamMembers } from "../lib/appwrite";


const StockList = () => {
  // Dummy data for the table
  const dummyData = [
    {
      name: "Item 1",
      sold_Quantity: 50,
      Remaining_Quantity: 100,
      price: 25.99,
    },
    {
        name: "Item 2",
        sold_Quantity: 30,
        Remaining_Quantity: 70,
        price: 19.99,
      },
      {
        name: "Item 2",
        sold_Quantity: 30,
        Remaining_Quantity: 70,
        price: 19.99,
      },
      {
        name: "Item 2",
        sold_Quantity: 30,
        Remaining_Quantity: 70,
        price: 19.99,
      },
      {
        name: "Item 2",
        sold_Quantity: 30,
        Remaining_Quantity: 70,
        price: 19.99,
      },
      {
        name: "Item 2",
        sold_Quantity: 30,
        Remaining_Quantity: 70,
        price: 19.99,
      },
    // Add more dummy data as needed
  ];

  return (
    <div className="mx-auto">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-semibold">StockList</div>
          <div className="text-blue-600 cursor-pointer hover:underline">See All</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border text-center">Name</th>
                <th className="p-4 border text-center">Sold Quantity</th>
                <th className="p-4 border text-center">Remaining Quantity</th>
                <th className="p-4 border text-center">Price</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index} className={(index + 1) % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="p-4 border text-center">{item.name}</td>
                  <td className="p-4 border text-center">{item.sold_Quantity}</td>
                  <td className="p-4 border text-center">{item.Remaining_Quantity}</td>
                  <td className="p-4 border text-center">${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};








const LowQuantityStock = () => {
  // Dummy data for Forest Essentials
  const lowquantity = [
    {
      productName: "Forest Essentials",
      remainingQuantity: 10,
      imageUrl: "Image/product1.png",
      status: "Low",
    },
    {
      productName: "Organic Tea",
      remainingQuantity: 5,
      imageUrl: "Image/Product2.png",
      status: "Low",
    },
    {
      productName: "Handmade Soap",
      remainingQuantity: 3,
      imageUrl: "Image/Product3.png",
      status: "Low",
    },
    {
      productName: "Handmade Soap",
      remainingQuantity: 3,
      imageUrl: "Image/Product3.png",
      status: "Low",
    },
    {
      productName: "Forest Essentials",
      remainingQuantity: 10,
      imageUrl: "Image/product1.png",
      status: "Low",
    },
    // Add more entries as needed
  ];

  return (
    <div className="mx-auto">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-semibold">StockList</div>
          <div className="text-blue-600 cursor-pointer hover:underline">
            See All
          </div>
        </div>
        {lowquantity.map((data, index) => (
          <div key={index} className="flex items-center mb-4">
            <img
              src={data.imageUrl}
              className="mr-4 w-16 h-16 object-contain"
              alt={data.productName}
            />
            <div>
              <div className="text-xl font-semibold">{data.productName}</div>
              <div>Remaining Quantity: {data.remainingQuantity} Packet</div>
            </div>
            <p className="text-red-500 font-bold ml-12">{data.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};




const Admin = () => {
  const { getUserData } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState();
  const [orders, setOrders] = useState({});
  const ordersDocuments = orders?.documents;
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

  // **GETTING ORDERS**
  useEffect(() => {
    async function getDataHandler(databaseId, collectionId) {
      try {
        const response = await getData(databaseId, collectionId);
        if (typeof response !== "object")
          throw new Error("Something went wrong! Try again later");

        setOrders({
          ...response,
          documents: response.documents,
        });
      } catch (error) {
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
      <div style={{ background: "white" }}>
          <div style={{ display: "flex" }} className="ml-2 ">
            <div className="sales-overview">
              {/** This Section For Sales Overview  */}
              <p
                style={{ fontSize: "20px" }}
                className="text-2xl font-semibold p-2"
              >
                Sales Overview
              </p>
              <div className="flex justify-between items-center">
                <div className="mt-6 ml-3">
                  <div className="ml-9">
                    <img src="/Image/Sales.png" />
                  </div>
                  <div className="flex mt-4">
                    <p className="flex-1 text-left ml-2 ">832</p>
                    <p className="flex-1 text-right ml-6">Sales</p>
                  </div>
                </div>
                <div className="mt-6 ml-3">
                  <div className="ml-12">
                    <img src="/Image/Revenue.png" />
                  </div>
                  <div className="flex mt-4">
                    <p className="flex-1 text-left ml-2 ">₹18,300</p>
                    <p className="flex-1 text-right ml-6">Revenue</p>
                  </div>
                </div>
                <div className="mt-6 ml-3">
                  <div className="ml-9">
                    <img src="/Image/Profit.png" />
                  </div>
                  <div className="flex mt-4">
                    <p className="flex-1 text-left ml-2 ">₹868</p>
                    <p className="flex-1 text-right ml-6">Profit</p>
                  </div>
                </div>
                <div className="mt-6 ml-3">
                  <div className="ml-9">
                    <img src="/Image/Cost.png" />
                  </div>
                  <div className="flex mt-4">
                    <p className="flex-1 text-left ml-2 ">₹17,432</p>
                    <p className="flex-1 text-right ml-6">Cost</p>
                  </div>
                </div>
              </div>
            </div>

            {/**Inventory Summary */}
            <div className="ml-2">
              <div className="inventory-summary">
                <p
                  style={{ fontSize: "20px" }}
                  className="text-2xl font-semibold p-2"
                >
                  Inventory Summary
                </p>
                <div className="flex justify-between items-center">
                  <div className=" ml-7" style={{ marginTop: "-1px" }}>
                    <div className="ml-9">
                      <img src="/Image/Quantity.png" />
                    </div>
                    <div className="flex mt-1">
                      <p className=" ml-10 ">832</p>
                    </div>
                    <p className=" ml-2">Quantity in Hand</p>
                  </div>

                  <div
                    className=" ml-7"
                    style={{ marginTop: "-1px", marginRight: "35px" }}
                  >
                    <div className="ml-9">
                      <img src="/Image/loc.png" />
                    </div>
                    <div className="flex mt-1">
                      <p className=" ml-10 ">832</p>
                    </div>
                    <p className=" ml-2">To be received</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "20px" }} className="ml-2">
            <div className="sales-overview">
              <p
                style={{ fontSize: "20px" }}
                className="text-2xl font-semibold p-2"
              >
                
                Purchase Overview
              </p>
              <div className="flex justify-between items-center">
                <div className="mt-6 ml-3">
                  <div className="ml-9">
                    <img src="/Image/Purchase.png" />
                  </div>
                  <div className="flex mt-4">
                    <p className="flex-1 text-left ml-2 ">832</p>
                    <p className="flex-1 text-right ml-6">Purchase</p>
                  </div>
                </div>
                <div className="mt-6 ml-3">
                  <div className="ml-12">
                    <img src="/Image/Cost.png" />
                  </div>
                  <div className="flex mt-4">
                    <p className=" ml-2 ">₹18,300</p>
                    <p className=" ml-6">Cost</p>
                  </div>
                </div>
                <div className="mt-6 ml-3">
                  <div className="ml-9">
                    <img src="/Image/Cancel.png" />
                  </div>
                  <div className="flex mt-4">
                    <p className="flex-1 text-left ml-2 ">₹868</p>
                    <p className="flex-1 text-right ml-6">Cancel</p>
                  </div>
                </div>
                <div className="mt-6 ml-3">
                  <div className="ml-9">
                    <img src="/Image/Profit.png" />
                  </div>
                  <div className="flex mt-4">
                    <p className="flex-1 text-left ml-2 ">₹17,432</p>
                    <p className="flex-1 text-right ml-6">Return</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-2">
              <div className="inventory-summary">
                <p
                  style={{ fontSize: "20px" }}
                  className="text-2xl font-semibold p-2"
                >
                  Product Summary
                </p>
                <div className="flex justify-between items-center">
                  <div className=" ml-7" style={{ marginTop: "-1px" }}>
                    <div className="ml-9">
                      <img src="/Image/Suppliers.png" />
                    </div>
                    <div className="flex mt-1">
                      <p className=" ml-10 ">832</p>
                    </div>
                    <p className=" ml-2">Number of Suppliers</p>
                  </div>

                  <div
                    className=" ml-7"
                    style={{ marginTop: "-1px", marginRight: "18px" }}
                  >
                    <div style={{marginLeft:"75px"}}>
                      <img src="/Image/Categories.png" />
                    </div>
                    <div className="flex mt-1">
                      <p style={{marginLeft:'75px'}}>832</p>
                    </div>
                    <p className=" ml-2">Number of Categories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "20px" }} className="ml-2">
            <div className="Stock-List">
              <StockList />
            </div>
            <div className="low-quantity">
              <LowQuantityStock />
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default Layout(Admin);
