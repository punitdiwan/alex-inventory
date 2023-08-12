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
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div style={{ background: "white" }}>
          <div  className="flex sm:flex-col ms:flex-col lg:flex-row lg:items-start ">
            <div className="bg-white border border-gray-300
            ms:rounded-[8px]  ms:mt-[10px] ms:border-gray-400 ms:border-2 ms:w-[600px] ms:h-[150px] ms:ml-[85px] ms:mr-[15px]
            sm:rounded-[8px]  sm:mt-[10px] sm:border-gray-400 sm:border-2 sm:w-[680px] sm:h-[150px] sm:ml-[15px]
            md:w-[800px] md:h-[150px] md:rounded-[8px] md:border-gray-400 md:border-2 md:ml-[15px] md:mr-[15px]
            lg:w-[680px] lg:h-[150px] lg:ml-[20px]  lg:rounded-[8px] 
            
            " 
            >
              {/** This Section For Sales Overview  */}
              <p
                style={{ fontSize: "20px" }}
                className="text-2xl font-semibold p-2" >
                Sales Overview
              </p>
              
              <div className="flex justify-between items-center ">

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
              <div className="bg-white border lg:border-gray-300  
              ms:rounded-[8px]  ms:mt-[10px] ms:border-gray-400   ms:border-2 ms:w-[600px] ms:h-[150px] ms:ml-[76px] ms:mr-[10px]
              sm:rounded-[8px]  sm:mt-[10px] sm:border-gray-400  sm:border-2 sm:w-[680px] sm:h-[150px] sm:ml-[10px]
              md:w-[380px] md:h-[150px] md:mt-[10px] md:rounded-[8px]
              lg:w-[450px] lg:h-[150px] lg:ml-[-5px]  lg:rounded-[8px] lg:mt-[-10px] lg:mt-[10px] lg:border-gray-400  lg:border-2 
              ">
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

          <div style={{ display: "flex", marginTop: "20px" }} className="flex flex-col lg:flex-row lg:items-start ">
            <div className="bg-white border border-gray-300 
            ms:rounded-[8px]  ms:mt-[-10px] ms:border-gray-400 ms:border-2 ms:w-[600px] ms:h-[150px] ms:ml-[85px] ms:mr-[15px]  
            sm:rounded-[8px]  sm:mt-[-10px] sm:border-gray-400 sm:border-2 sm:w-[680px] sm:h-[150px] sm:ml-[15px]
            md:w-[800px] md:h-[150px] md:rounded-[8px] md:mb-[-450px] md:mr-[15px]
             lg:w-[680px] lg:h-[150px] lg:ml-[20px]  lg:rounded-[8px] 
            ">
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
              <div className="bg-white border border-gray-300  
               ms:rounded-[8px]  ms:mt-[10px] ms:border-gray-400  ms:border-2 ms:w-[600px] ms:h-[150px] ms:ml-[76px] ms:mr-[10px]
               sm:rounded-[8px]  sm:mt-[10px] sm:border-gray-400  sm:border-2 sm:w-[680px] sm:h-[150px] sm:ml-[10px]
               md:w-[410px] md:h-[150px] md:rounded-[8px] md:ml-[400px] md:mt-[140px]
               lg:w-[450px] lg:h-[150px] lg:ml-[-5px]  lg:rounded-[8px] lg:mt-[-10px]"
           
              >
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

          <div style={{ display: "flex", marginTop: "20px" }} className="flex flex-col lg:flex-row lg:items-start ">
            <div className="bg-white border border-gray-300 
            ms:rounded-[8px]  ms:mt-[-10px] ms:border-gray-400 ms:border-2 ms:w-[600px] ms:h-[470px] ms:ml-[85px] ms:mr-[15px] 
            sm:rounded-[8px]  sm:mt-[-10px] sm:border-gray-400 sm:border-2 sm:w-[680px] sm:h-[450px] sm:ml-[15px]
            md:mt-[140px] md:rounded-[8px]  md:w-[800px] md:h-[470px]
            lg:w-[680px] lg:h-[470px] lg:ml-[20px]  lg:rounded-[8px] lg:mt-[-10px] 
            ">
              <StockList />
            </div>
            <div className="bg-white border border-gray-300 
             ms:rounded-[8px]  ms:mt-[10px] ms:border-gray-400 ms:border-2 ms:w-[600px] ms:h-[470px] ms:ml-[85px] ms:mr-[15px] 
             sm:rounded-[8px]  sm:mt-[11px] sm:border-gray-400 sm:border-2 sm:w-[680px] sm:h-[450px] sm:ml-[15px]
             md:mt-[10px] md:rounded-[8px] md:w-[800px] md:h-[470px]
             lg:w-[450px] lg:h-[470px] lg:ml-[20px]  lg:rounded-[8px] lg:mt-[-10px]  ">
              <LowQuantityStock />
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default Layout(Admin);
