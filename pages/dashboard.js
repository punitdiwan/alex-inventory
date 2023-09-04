import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { PiNoteLight } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GiCrystalGrowth } from "react-icons/gi";
import { RiPriceTag2Line } from "react-icons/ri";
import { BsBox } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BsBagHeart } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { VscSave } from "react-icons/vsc";
import { GiReturnArrow } from "react-icons/gi";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { TbCategory } from "react-icons/tb";

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
    {
      name: "Item 2",
      sold_Quantity: 30,
      Remaining_Quantity: 70,
      price: 19.99,
    },
    {
      name: "Item 1",
      sold_Quantity: 30,
      Remaining_Quantity: 70,
      price: 19.99,
    },
    {
      name: "Item 1",
      sold_Quantity: 30,
      Remaining_Quantity: 70,
      price: 19.99,
    },
    {
      name: "Item 1",
      sold_Quantity: 30,
      Remaining_Quantity: 70,
      price: 19.99,
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="mx-auto">
      <div className="p-4">
        {/** stock list  */}
        <div className="flex justify-between items-center mb-4">
          <div
            className=" ms:text-4xl  text-gray-900 hover:text-gray-600 font-semibold p-2 dark:text-white dark:hover:text-white
                         md:text-2xl 
                         lg:text-2xl "
          >
            Stock List
          </div>
          <div className="text-blue-600 cursor-pointer hover:underline">
            See All
          </div>
        </div>

        <div
          className="ms:max-h-[400px] ms:overflow-y-auto  
                      md:max-h-[450px]  md:overflow-y-auto 
                      lg:scrollbar-hide"
        >
          {" "}
          {/* Adjust the max height */}
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th
                  className="p-4 border text-center text-2xl font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200
              lg:p-4 lg:border lg:text-center  lg:text-xl lg:font-semibold lg:text-gray-800 lg:hover:text-gray-900 lg:my-auto  lg:dark:text-white lg:dark:hover:text-gray-200
              "
                >
                  Name
                </th>

                <th
                  className="p-4 border text-center text-2xl font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200
              lg:p-4 lg:border lg:text-center  lg:text-xl lg:font-semibold lg:text-gray-800 lg:hover:text-gray-900 lg:my-auto  lg:dark:text-white lg:dark:hover:text-gray-200
              "
                >
                  Sold Quantity
                </th>

                <th
                  className="p-4 border text-center text-2xl font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200
              lg:p-4 lg:border lg:text-center  lg:text-xl lg:font-semibold lg:text-gray-800 lg:hover:text-gray-900 lg:my-auto  lg:dark:text-white lg:dark:hover:text-gray-200
              "
                >
                  Remaining Quantity
                </th>

                <th
                  className="p-4 border text-center text-2xl font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200
              lg:p-4 lg:border lg:text-center  lg:text-xl lg:font-semibold lg:text-gray-800 lg:hover:text-gray-900 lg:my-auto  lg:dark:text-white lg:dark:hover:text-gray-200
              "
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="p-4 border text-center text-xl font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                    {item.name}
                  </td>
                  <td className="p-4 border text-center text-xl font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                    {item.sold_Quantity}
                  </td>
                  <td className="p-4 border text-center text-xl font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                    {item.Remaining_Quantity}
                  </td>
                  <td className="p-4 border text-center text-xl font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200 ">
                    ${item.price.toFixed(2)}
                  </td>
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
  ];

  return (
    <div className="mx-auto">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div
            className="ms:text-3xl font-semibold p-2
                          lg:text-2xl text-gray-900 hover:text-gray-600"
          >
            Low Quantity Stock
          </div>
          <div className="text-blue-600 cursor-pointer hover:underline">
            See All
          </div>
        </div>

        <div className="ms:max-h-[500px] md:max-h-[450px] overflow-y-auto lg:scrollbar-hide">
          <table className="w-full border">
            <thead>
              {/* <tr className="bg-gray-100">
        <th className="p-4 border text-center ms:text-2xl ms:font-semibold ms:text-gray-800 ms:hover:text-gray-900 ms:my-auto ms:dark:text-white ms:dark:hover:text-gray-200 lg:p-4 lg:border lg:text-center lg:text-xl-block lg:font-semibold lg:text-gray-800 lg:hover:text-gray-900 lg:my-auto lg:dark:text-white lg:dark:hover:text-gray-200 whitespace-nowrap">Product Image</th>
        <th className="p-4 border text-center ms:text-2xl font-semibold text-gray-800 hover:text-gray-900 my-auto dark:text-white dark:hover:text-gray-200 whitespace-nowrap">Product Name</th>
        <th className="p-4 border text-center ms:text-2xl font-semibold text-gray-800 hover:text-gray-900 my-auto dark:text-white dark:hover:text-gray-200 whitespace-nowrap">Remaining Quantity</th>
      </tr> */}
            </thead>
            <tbody>
              {lowquantity.map((data, index) => (
                <tr
                  key={index}
                  className={(index + 1) % 2 === 0 ? "bg-gray-50" : ""}
                >
                  <td className="p-4 border text-center">
                    <img
                      src={data.imageUrl}
                      className="mr-4 w-16 h-16 object-contain"
                      alt={data.productName}
                    />
                  </td>
                  <td className="p-4 border text-center text-xl font-semibold text-gray-800 hover:text-gray-900 my-auto dark:text-white dark:hover:text-gray-200 whitespace-nowrap">
                    {data.productName}
                    <br />
                    <p className="text-sm">
                      {" "}
                      Remaining Quantity : {data.remainingQuantity}{" "}
                    </p>
                  </td>

                  <td className="p-4 border text-center text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto dark:text-white dark:hover:text-gray-200 whitespace-nowrap">
                    <span className="bg-red-200 text-red-600 rounded-full px-2 py-1">
                      {data.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
        <div className="flex  ms:flex-col sm:flex-col lg:flex-row lg:items-start ">
          <div
            className=" bg-white border border-gray-300
            ms:mt-[10px]  ms:w-[690px] ms:h-[500px] ms:ml-[15px] ms:mr-[15px]  ms:border-none
            sm:rounded-[8px]  sm:mt-[10px] sm:border-gray-400 sm:border-2 sm:w-[680px] sm:h-[150px] sm:ml-[15px]
            md:w-[800px] md:h-[150px] md:rounded-[8px] md:border-gray-400 md:border-2 md:ml-[15px] md:mr-[15px]
            lg:w-[680px] lg:h-[150px] lg:ml-[20px]  lg:rounded-[8px]             
            "
          >
            {/** This Section For Sales Overview  */}

            <h3 className="lg:text-2xl font-semibold p-2  ms:text-4xl md:text-2xl text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-white text-2xl ms:underline ms:decoration-solid ">
              Sales Overview
            </h3>

            <div className=" flex ms:flex-wrap md:justify-between md:items-center lg:justify-between lg:items-center ">
              <div className="mt-6 ml-3 ms:w-[330px] ms:h-[200px] lg:block md:block ms:bg-white border ms:border-gray-300">
                <div className="ml-9 ">
                  {/** mobile screen par hidden  */}
                  <img
                    src="/Image/Sales.png"
                    className="ms:hidden lg:block md:block "
                  />
                  {/** large screen or md  par hidden  or  ms  me visible  */}

                  <div className="lg:hidden md:hidden flex flex-row ms:mt-[20px]">
                    <PiNoteLight
                      className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden ms:"
                      style={{ color: "#629FF4" }}
                    />
                    <h6 className="ms:text-2xl ms:font-bold text-gray-800 mb-2 dark:text-white my-auto mt-[15px] ml-[10px]">
                      Total Sales
                    </h6>
                  </div>
                  <h6 className="lg:hidden md:hidden ms:text-4xl md:text-3xl font-semibold text-gray-800 dark:text-white mt-[15px]">
                    $26,35,262
                  </h6>
                  <h6 className="lg:hidden md:hidden">in today</h6>
                </div>

                {/** yha tak mobile screen  1st part end  or neeche se large screen start he  */}

                <div className="flex mt-4">
                  <p className="flex-1 text-left ml-2 ms:font-semibold ms:hidden lg:block md:block ">
                    $832
                  </p>
                  <p className="flex-1 text-right ml-6 ms:font-semibold ms:hidden lg:block md:block ">
                    Sales
                  </p>
                </div>
              </div>

              <div className="mt-6 ml-3 ms:w-[330px] ms:h-[200px] lg:block md:block ms:bg-white border ms:border-gray-300">
                <div className="ml-12">
                  <img
                    src="/Image/Revenue.png "
                    className="ms:w-[50px] ms:h-[50px] ms:hidden lg:block md:block"
                  />
                  <div className="lg:hidden md:hidden flex flex-row ms:mt-[20px]">
                    <GiCrystalGrowth
                      className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden"
                      style={{ color: "#817AF3" }}
                    />
                    <h6 className="ms:text-2xl ms:font-bold text-gray-800 mb-2 dark:text-white my-auto mt-[15px] ml-[10px]">
                      Total Revenue{" "}
                    </h6>{" "}
                  </div>
                  <h6 className="lg:hidden md:hidden ms:text-4xl font-semibold text-gray-800 dark:text-white mt-[15px]">
                    $ 26,35,262
                  </h6>
                  <h6 className="lg:hidden md:hidden">in today</h6>
                </div>
                <div className="flex mt-4">
                  <p className="flex-1 text-left ml-2 ms:font-semibold ms:hidden lg:block md:block   ">
                    $18,300
                  </p>
                  <p className="flex-1 text-right ml-6 ms:font-semibold ms:hidden lg:block md:block  ">
                    Revenue
                  </p>
                </div>
              </div>

              <div className="mt-6 ml-3 ms:w-[330px] ms:h-[200px] lg:block md:block ms:bg-white border ms:border-gray-300">
                <div className="ml-9">
                  <img
                    src="/Image/Profit.png"
                    className="ms:w-[50px] ms:h-[50px] ms:hidden lg:block md:block"
                  />
                  <div className="lg:hidden md:hidden flex flex-row ms:mt-[20px]">
                    <RiMoneyDollarCircleLine
                      className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden"
                      style={{ color: "#DBA362" }}
                    />
                    <h6 className="ms:text-2xl ms:font-bold text-gray-800 mb-2 dark:text-white my-auto mt-[15px] ml-[10px]">
                      Total Profit{" "}
                    </h6>
                  </div>
                  <h6 className="lg:hidden md:hidden ms:text-4xl font-semibold text-gray-800 dark:text-white mt-[15px]">
                    $26,35,262
                  </h6>
                  <h6 className="lg:hidden md:hidden">in today</h6>
                </div>
                <div className="flex mt-4">
                  <p className="flex-1 text-left ml-2 ms:font-semibold ms:hidden lg:block md:block  ">
                    $868
                  </p>
                  <p className="flex-1 text-right ml-6 ms:font-semibold ms:hidden lg:block md:block  ">
                    Profit
                  </p>
                </div>
              </div>

              <div className="mt-6 ml-3 ms:w-[330px] ms:h-[200px] lg:block md:block ms:bg-white border ms:border-gray-300">
                <div className="ml-9">
                  <img
                    src="/Image/Cost.png"
                    className="ms:w-[50px] ms:h-[50px] ms:hidden lg:block md:block"
                  />
                  <div className="lg:hidden md:hidden flex flex-row ms:mt-[20px]">
                    <RiPriceTag2Line
                      className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden"
                      style={{ color: "#58D365" }}
                    />
                    <h6 className="ms:text-2xl ms:font-bold text-gray-800 mb-2 dark:text-white my-auto mt-[15px] ml-[10px]">
                      Total Cost{" "}
                    </h6>{" "}
                  </div>
                  <h6 className="lg:hidden md:hidden ms:text-4xl font-semibold text-gray-800 dark:text-white mt-[15px]">
                    $26,35,262
                  </h6>
                  <h6 className="lg:hidden md:hidden">in today</h6>
                </div>
                <div className="flex mt-4">
                  <p className="flex-1 text-left ml-2 ms:font-semibold ms:hidden lg:block md:block ">
                    $17,432
                  </p>
                  <p className="flex-1 text-right ml-6 ms:font-semibold ms:hidden lg:block md:block ">
                    Cost
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/**Inventory Summary */}
          <div className="ml-2">
            <div
              className="bg-white border lg:border-gray-300  
               ms:mt-[20px] ms:border-gray-400   ms:border-none ms:w-[690px] ms:h-[300px] ms:ml-[9px] ms:mr-[10px]
              sm:rounded-[8px]  sm:mt-[10px] sm:border-gray-400  sm:border-2 sm:w-[680px] sm:h-[150px] sm:ml-[10px]
              md:w-[380px] md:h-[150px] md:mt-[10px] md:rounded-[8px]
              lg:w-[450px] lg:h-[150px] lg:ml-[-5px]  lg:rounded-[8px]  lg:mt-[10px]  lg:border-2 
              "
            >
              <p className="lg:text-2xl font-semibold p-2  ms:text-4xl md:text-2xl text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-white text-2xl ms:underline ms:decoration-solid">
                Inventory Summary
              </p>

              <div className="flex ms:flex-wrap ms:mt-[10px] md:justify-between md:items-center lg:justify-between lg:items-center">
                <div className=" ms:ml-[9px] ms:mt-[15px] md:mt-[-1px] lg:mt-[-1px] ms:w-[330px] ms:h-[200px] lg:block md:block ms:bg-white border ms:border-gray-300">
                  <div className="ml-9">
                    <img
                      src="/Image/Quantity.png"
                      className="ms:hidden lg:block md:block "
                    />
                    <div className="lg:hidden md:hidden flex flex-row ms:mt-[20px]">
                      <BsBox
                        className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden ms:"
                        style={{ color: "#DBA362" }}
                      />
                      <h6 className="ms:text-2xl ms:font-bold text-gray-800 mb-2 dark:text-white my-auto mt-[15px] ml-[10px]">
                        Quantity in Hand{" "}
                      </h6>{" "}
                    </div>
                    <h6 className="lg:hidden md:hidden ms:text-4xl font-semibold text-gray-800 dark:text-white mt-[15px]">
                      35,262
                    </h6>
                    <h6 className="lg:hidden md:hidden">in today</h6>
                  </div>
                  <div className="flex mt-1">
                    <p className=" ml-10 ms:font-semibold ms:hidden lg:block md:block ">
                      832
                    </p>
                  </div>
                  <p className=" ml-2 ms:font-semibold ms:hidden lg:block md:block ">
                    Quantity in Hand
                  </p>
                </div>

                <div className=" ms:ml-[10px] ms:mt-[15px]  md:mt-[-1px] md:mr-[35px] lg:mt-[-1px] lg:mr-[35px] ms:w-[330px] ms:h-[200px] lg:block md:block ms:bg-white border ms:border-gray-300">
                  <div className="ml-9">
                    <img
                      src="/Image/loc.png"
                      className="ms:hidden lg:block md:block"
                    />
                    <div className="lg:hidden md:hidden flex flex-row ms:mt-[20px]">
                      <GoLocation
                        className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden ms:"
                        style={{ color: "#817AF3" }}
                      />
                      <h6 className="ms:text-2xl ms:font-bold text-gray-800 mb-2 dark:text-white my-auto mt-[15px] ml-[10px]">
                        To be received{" "}
                      </h6>{" "}
                    </div>
                    <h6 className="lg:hidden md:hidden ms:text-4xl font-semibold text-gray-800 dark:text-white mt-[15px]">
                      832
                    </h6>
                    <h6 className="lg:hidden md:hidden">in today</h6>
                  </div>
                  <div className="flex mt-1">
                    <p className=" ml-10  ms:font-semibold ms:hidden lg:block md:block">
                      832
                    </p>
                  </div>
                  <p className=" ml-2 ms:font-semibold ms:hidden lg:block md:block">
                    To be received
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", marginTop: "20px" }}
          className="flex flex-col lg:flex-row lg:items-start "
        >
          <div
            className="bg-white border border-gray-300 
             ms:mt-[-10px] ms:border-gray-400 ms:border-none ms:w-[690px] ms:h-[500px] ms:ml-[15px] ms:mr-[15px]  
            sm:rounded-[8px]  sm:mt-[-10px] sm:border-gray-400 sm:border-2 sm:w-[680px] sm:h-[150px] sm:ml-[15px]
            md:w-[800px] md:h-[150px] md:rounded-[8px] md:mb-[-450px] md:mr-[15px]
            lg:w-[680px] lg:h-[150px] lg:ml-[20px]  lg:rounded-[8px] 
            "
          >
            <p className="lg:text-2xl font-semibold p-2  ms:text-4xl md:text-2xl text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-white text-2xl ms:underline ms:decoration-solid">
              Purchase Overview
            </p>
            <div className="flex ms:flex-wrap md:justify-between md:items-center lg:justify-between lg:items-center">
              <div className="mt-6 ml-3 ms:w-[330px] ms:h-[200px] lg:block md:block ms:bg-white border ms:border-gray-300">
                <div className="ml-9">
                  <img
                    src="/Image/Purchase.png"
                    className="ms:hidden lg:block md:block"
                  />
                  <div className="lg:hidden md:hidden flex flex-row ms:mt-[20px]">
                    <BsBagHeart
                      className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden ms:"
                      style={{ color: "#009ED8" }}
                    />
                    <h6 className="ms:text-2xl ms:font-bold text-gray-800 mb-2 dark:text-white my-auto mt-[15px] ml-[10px]">
                      Total Purchase
                    </h6>
                  </div>
                  <h6 className="lg:hidden md:hidden ms:text-4xl font-semibold text-gray-800 dark:text-white mt-[15px]">
                    82
                  </h6>
                  <h6 className="lg:hidden md:hidden">in today</h6>
                </div>
                <div className="flex mt-4">
                  <p className="flex-1 text-left ml-2 ms:font-semibold ms:hidden lg:block md:block  ">
                    82
                  </p>
                  <p className="flex-1 text-right ml-6 ms:font-semibold ms:hidden lg:block md:block ">
                    Purchase
                  </p>
                </div>
              </div>
              <div className="mt-6 ml-3 ms:w-[330px] ms:h-[200px] lg:block md:block ms:bg-white border ms:border-gray-300 ">
                <div className="ml-12">
                  <img
                    src="/Image/Cost.png"
                    className="ms:hidden lg:block md:block"
                  />
                  <div className="lg:hidden md:hidden flex flex-row ms:mt-[20px]">
                    <BiHome
                      className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden ms:"
                      style={{ color: "#58D365" }}
                    />
                    <h6 className="ms:text-2xl ms:font-bold text-gray-800 mb-2 dark:text-white my-auto mt-[15px] ml-[10px]">
                      Total Cost
                    </h6>
                  </div>
                  <h6 className="lg:hidden md:hidden ms:text-4xl font-semibold text-gray-800 dark:text-white mt-[15px]">
                    ₹26,35,262
                  </h6>
                  <h6 className="lg:hidden md:hidden">in today</h6>
                </div>
                <div className="flex mt-4">
                  <p className=" flex-1 text-left ml-2 ms:font-semibold ms:hidden lg:block md:block ">
                    $18,300
                  </p>
                  <p className=" flex-1 text-right ml-6 ms:font-semibold ms:hidden lg:block md:block ">
                    Cost
                  </p>
                </div>
              </div>

              <div className="mt-6 ml-3 ms:w-[330px] ms:h-[200px] lg:block md:block ms:bg-white border ms:border-gray-300">
                <div className="ml-9">
                  <img
                    src="/Image/Cancel.png"
                    className="ms:hidden lg:block md:block"
                  />
                  <div className="lg:hidden md:hidden flex flex-row ms:mt-[20px]">
                    <VscSave
                      className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden ms:"
                      style={{ color: "#817AF3" }}
                    />
                    <h6 className="ms:text-2xl ms:font-bold text-gray-800 mb-2 dark:text-white my-auto mt-[15px] ml-[10px]">
                      Total Sales
                    </h6>
                  </div>
                  <h6 className="lg:hidden md:hidden ms:text-4xl font-semibold text-gray-800 dark:text-white mt-[15px]">
                    $26,35,262
                  </h6>
                  <h6 className="lg:hidden md:hidden">in today</h6>
                </div>
                <div className="flex mt-4">
                  <p className="flex-1 text-left ml-2 ms:font-semibold ms:hidden lg:block md:block ">
                    8
                  </p>
                  <p className="flex-1 text-right ml-6 ms:font-semibold ms:hidden lg:block md:block ">
                    Cancel
                  </p>
                </div>
              </div>
              <div className="mt-6 ml-3 ms:w-[330px] ms:h-[200px] lg:block md:block ms:bg-white border ms:border-gray-300">
                <div className="ml-9">
                  <img
                    src="/Image/Profit.png"
                    className="ms:hidden lg:block md:block"
                  />
                  <div className="lg:hidden md:hidden flex flex-row ms:mt-[20px]">
                    <GiReturnArrow
                      className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden ms:"
                      style={{ color: "#DBA362" }}
                    />
                    <h6 className="ms:text-2xl ms:font-bold text-gray-800 mb-2 dark:text-white my-auto mt-[15px] ml-[10px]">
                      Total Sales
                    </h6>
                  </div>
                  <h6 className="lg:hidden md:hidden ms:text-4xl font-semibold text-gray-800 dark:text-white mt-[15px]">
                    $26,35,262
                  </h6>
                  <h6 className="lg:hidden md:hidden">in today</h6>
                </div>
                <div className="flex mt-4">
                  <p className="flex-1 text-left ml-2 ms:font-semibold ms:hidden lg:block md:block  ">
                    $17,432
                  </p>
                  <p className="flex-1 text-right ml-6 ms:font-semibold ms:hidden lg:block md:block">
                    Return
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-2">
            <div
              className="bg-white border border-gray-300  
                ms:mt-[10px] ms:border-gray-400  ms:border-none ms:w-[690px] ms:h-[300px] ms:ml-[8px] ms:mr-[10px]
               sm:rounded-[8px]  sm:mt-[10px] sm:border-gray-400  sm:border-2 sm:w-[680px] sm:h-[150px] sm:ml-[10px]
               md:w-[410px] md:h-[150px] md:rounded-[8px] md:ml-[400px] md:mt-[140px]
               lg:w-[450px] lg:h-[150px] lg:ml-[-5px]  lg:rounded-[8px] lg:mt-[-10px]"
            >
              <p
                // style={{ fontSize: "20px" }}
                className="lg:text-2xl font-semibold p-2  ms:text-4xl md:text-2xl text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-white text-2xl ms:underline ms:decoration-solid"
              >
                Orders Summary
              </p>
              <div className="flex ms:flex-wrap md:justify-between md:items-center lg:justify-between lg:items-center">
                <div className="ms:ml-[9px] ms:mt-[15px] md:mt-[-1px] lg:mt-[-1px] ms:w-[330px] ms:h-[200px] lg:block md:block ms:bg-white border ms:border-gray-300">
                  <div className="ml-9">
                    <img
                      src="/Image/Suppliers.png"
                      className="ms:hidden lg:block md:block"
                    />
                    <div className="lg:hidden md:hidden flex flex-row ms:mt-[20px]">
                      <AiOutlineUsergroupDelete
                        className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden ms:"
                        style={{ color: "#24B8F1" }}
                      />
                      <h6 className="ms:text-2xl ms:font-bold text-gray-800 mb-2 dark:text-white my-auto mt-[15px] ml-[10px]">
                        Pending Orders{" "}
                      </h6>{" "}
                    </div>
                    <h6 className="lg:hidden md:hidden ms:text-4xl font-semibold text-gray-800 dark:text-white mt-[15px]">
                      262
                    </h6>
                    <h6 className="lg:hidden md:hidden">in today</h6>
                  </div>
                  <div className="flex mt-1">
                    <p className="  ml-10 ms:font-semibold ms:hidden lg:block md:block ">
                      832
                    </p>
                  </div>
                  <p className="ml-2 ms:font-semibold ms:hidden lg:block md:block">
                    Pending Orders
                  </p>
                </div>

                <div className="ms:ml-[9px] ms:mt-[15px] md:mt-[-1px] lg:mt-[-1px] ms:w-[330px] ms:h-[200px] lg:block md:block ms:bg-white border ms:border-gray-300">
                  <div style={{ marginLeft: "40px" }}>
                    <img
                      src="/Image/Categories.png"
                      className="ms:hidden lg:block md:block"
                    />
                    <div className="lg:hidden md:hidden flex flex-row ms:mt-[20px]">
                      <TbCategory
                        className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden ms:"
                        style={{ color: "#817AF3" }}
                      />
                      <h6 className="ms:text-2xl ms:font-bold text-gray-800 mb-2 dark:text-white my-auto mt-[15px] ml-[10px]">
                        Order status{" "}
                      </h6>{" "}
                    </div>
                    <h6 className="lg:hidden md:hidden ms:text-4xl font-semibold text-gray-800 dark:text-white mt-[15px]">
                      262
                    </h6>
                    <h6 className="lg:hidden md:hidden">in today</h6>
                  </div>
                  <div className="flex mt-1">
                    <p
                      style={{ marginLeft: "" }}
                      className=" ml-10 ms:font-semibold ms:hidden lg:block md:block "
                    >
                      832
                    </p>
                  </div>
                  <p style={{marginRight:"40px"}} className="  ms:font-semibold ms:hidden lg:block md:block">
                    Order status
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", marginTop: "20px" }}
          className="flex flex-col lg:flex-row lg:items-start "
        >
          <div
            className="bg-white border border-gray-300 
             ms:mt-[-10px] ms:border-gray-400 ms:border-2 ms:w-[690px] ms:h-[510px] ms:ml-[15px]  
            sm:rounded-[8px]  sm:mt-[-10px] sm:border-gray-400 sm:border-2 sm:w-[680px] sm:h-[450px] sm:ml-[15px]
            md:mt-[140px] md:rounded-[8px]  md:w-[800px] md:h-[470px]
            lg:w-[680px] lg:h-[550px] lg:ml-[20px]  lg:rounded-[8px] lg:mt-[-10px] 
            "
          >
            <StockList />
          </div>
          <div
            className="bg-white border border-gray-300 
             ms:mt-[10px] ms:border-gray-400 ms:border-2 ms:w-[690px] ms:h-[600px] ms:ml-[15px]  
             sm:rounded-[8px]  sm:mt-[11px] sm:border-gray-400 sm:border-2 sm:w-[680px] sm:h-[450px] sm:ml-[15px]
             md:mt-[10px] md:rounded-[8px] md:w-[800px] md:h-[470px]
             lg:w-[450px] lg:h-[550px] lg:ml-[20px]  lg:rounded-[8px] lg:mt-[-10px]  "
          >
            <LowQuantityStock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout(Admin);
