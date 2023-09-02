import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { BiFilter } from "react-icons/bi";

import { FaGreaterThan } from "react-icons/fa";

import Link from "next/link";




const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled)

  const callback = () => {
    toggle(!isToggled)
    onClick(!isToggled)
  }

  return (
    <label className="labeltoggle">
      <input type="checkbox" defaultChecked={isToggled} onClick={callback} className="inputtoggle" />
      <span className="spantoggle" />
      {/* <strong className="strongtoggle">{label}</strong> */}
    </label>
  )
}




const totalrevenue = () => {


  const Menus = [
    { label: "My Orders", url: "/report" },
    { label: "Today Sales", url: "/todaysale" },
    { label: "Total Revenue", url: "/totalrevenue" },
  ];


  const router = useRouter();

  const datac = {
    cardData: [
      {
        id: "1",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "2",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "3",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "4",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "5",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "6",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "7",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "8",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "9",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "10",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "11",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "12",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "13",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "14",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "15",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },
      {
        id: "16",
        categoryname: "Face ",
        brandname: "Himalaya",
        totalquantity: "22 packets",
        date: "20/06/23",
        costpacket: "₹ 35",
        sellpacket: "₹ 50",
        profitpacket: "₹ 15",
        totalprofit: '₹ 330',
        action: ' ',
      },

    ],
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);

  // Calculate total pages
  const totalPages = Math.ceil(datac.cardData.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datac.cardData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Previous page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };


  const logState = state => {
    console.log("Toggled:", state)
  }

  const [open, setOpen] = useState(false);


  const menuRef = useRef();
  const imgRef = useRef();



  return (

    <div className=" sm:w-full h-screen pb-5 px-5 employeeButton">


      {/* The button to open modal */}
      <div className="lg:block md:block ms:hidden sm:hidden">
      <div className="flex items-center justify-between">
        <div >
          <div style={{ display: 'flex' }} className="text-xl font-bold">  Reports <FaGreaterThan  className=" mt-1 ml-3 mr-3"/> Total Revenue</div> </div>
        <div className="flex">
          <div className="relative ml-4">
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer btn border-0 hover:border hover:border-[grey] hover:bg-white hover:text-[#1366D9] fiterIcon"
            >
              <BiFilter className="" />
              Filters
            </div>

            {open && (
              <div
                ref={menuRef}
                className="bg-white p-4 w-52 shadow-lg absolute top-full right-0 mt-2 z-10"
              >
                <ul>
                  {Menus.map((menu) => (
                    <li
                      onClick={() => setOpen(false)}
                      className="p-2 text-lg cursor-pointer rounded hover:bg-blue-200"
                      key={menu.label}
                    >
                      <Link href={menu.url}>{menu.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="ml-4">
            <a
              href=""
              className="btn border-0 hover:border hover:border-[#1366D9] bg-[#1366D9] hover:bg-white hover:text-[#1366D9]"
            >
              Download all
            </a>
          </div>
        </div>
      </div>
      </div>

      <div className="md:hidden lg:hidden">
        <div className="flex items-center ">
        <div>
          <div className="flex items-center">
          <div className="mr-3 ms:text-4xl font-bold underline">Report</div>
          <div>
            <FaGreaterThan className="mt-1 ml-3 mr-3 ms:text-3xl font-bold " />
          </div>
          <div className="ms:text-4xl font-bold underline" > Total Revenue</div>
           </div>
        </div>
       </div>
        <div className="mt-[55px]">
       <div className="flex flex-row justify-end ">
         
          <div className="relative ml-4">
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer btn border-0 hover:border hover:border-[grey] hover:bg-white hover:text-[#1366D9] fiterIcon"
            >
              <BiFilter className="" />
              Filters
            </div>

            {open && (
              <div
                ref={menuRef}
                className="bg-white p-4 w-52 shadow-lg absolute top-full right-0 mt-2 z-10"
              >
                <ul>
                  {Menus.map((menu) => (
                    <li
                      onClick={() => setOpen(false)}
                      className="p-2 text-lg cursor-pointer rounded hover:bg-blue-200"
                      key={menu.label}
                    >
                      <Link href={menu.url}>{menu.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="ml-4">
            <a
              href=""
              className="btn border-0 hover:border hover:border-[#1366D9] bg-[#1366D9] hover:bg-white hover:text-[#1366D9]"
            >
              Download all
            </a>
          </div>
      </div>
      </div>  
      </div>
    
      <section className="border-2 ms:mt-[50px] md:border-none ms:max-h-[990px] ms:max-w-[700px] md:max-h-[550px] md:max-w-[1200px] ms:overflow-y-auto md:overflow-y-auto lg:scrollbar-hide">
          <table className="table table-compact w-full  employeeTable ms:mt-[-5px] ">
            <thead className="">
              <tr>
            {/* <th>S.No.</th> */}
            <th
                  style={{ textAlign: "center" }}
                  className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
                >Category</th>
            <th
                  style={{ textAlign: "center" }}
                  className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Brand Name</th>
                  <th
                  style={{ textAlign: "center" }}
                  className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
                > Total Qty.</th>
            <th
                  style={{ textAlign: "center" }}
                  className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
                >Date</th>
            <th
                  style={{ textAlign: "center" }}
                  className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
                >Cost/packet</th>
            <th
                  style={{ textAlign: "center" }}
                  className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
                >Sell/packet</th>
            <th
                  style={{ textAlign: "center" }}
                  className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
                >Profit/packet</th>
            <th
                  style={{ textAlign: "center" }}
                  className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
                >Total Profit</th>
            <th
                  style={{ textAlign: "center" }}
                  className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
                >Action</th>
          </tr>
        </thead>

        <tbody>
              {currentItems.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-300"
                  } border-b-[2px] border-gray-500`}
                >
              {/* <th>{item.id}</th> */}
              <th
                    style={{ textAlign: "center", background: "none" }}
                    className={` ms:text-3xl  lg:text-sm ms:py-[45px] lg:py-[14px]`}
                    
                  >{item.categoryname}</th>
               <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >{item.brandname}</td>
               <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >{item.totalquantity}</td>
               <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >{item.date}</td>
               <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >{item.costpacket}</td>
               <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >{item.sellpacket}</td>
               <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >{item.profitpacket}</td>
               <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >{item.totalprofit}</td>
              <td
                    style={{
                      textAlign: "center",
                      background: "none",
                      borderBottom: "none",
                    }}
                    className="flex justify-center items-center ms:mt-[35px]"
                  >
              <a href="#emp_Profile">
                  <img src="/Image/carbon_view.png" className="text-3xl text-green-600 me-1" />
                </a>


                <Link href={"#"}>
                  <img src="/Image/Delete.png" className="text-3xl text-red-500 ms-1" />
                </Link>

              </td>
              {/* <td className=" ms:bg-blue-200 ms:text-black lg:text-black lg:flex lg:bg-blue-200 lg:py-[14px]">
                <a href="#emp_Profile">
                  <img src="/Image/carbon_view.png" className="text-3xl text-green-600 me-1" />
                </a>


                <Link href={"#"}>
                  <img src="/Image/Delete.png" className="text-3xl text-red-500 ms-1" />
                </Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      </section>
      <div
        className="mx-1 ms:mt-[55px] lg:mt-[10px]"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          bottom: 5,
          right: 20,
        }}
      >
        {/* Pagination buttons */}

        <button
          className="btn btn-sm hover:bg-[#1366D9] text-xs border rounded text-white bg-[#1366D9]"
          disabled={currentPage === 1}
          onClick={previousPage}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`btn btn-sm btn-outline hover:bg-[#1366D9] mx-2  text-black rounded border border-[#1366D9] ${currentPage === index + 1 ? "bg-[#1366D9] text-white" : ""
              }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="btn btn-sm hover:bg-[#1366D9] text-xs border rounded text-white bg-[#1366D9]"
          disabled={currentPage === totalPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      {/* **********MODAL***** for  AddEmployee ******* */}

      <div className="modal fixed inset-0 flex items-center justify-center" id="my_modal_8">
        <div className="modal-box max-w-[1120px] min-h-[700px] ">
          <div style={{ display: 'flex', marginLeft: '50px', marginTop: '5px' }} className="text-xl font-semibold mr-4">Employee <FaGreaterThan className="mt-1 ml-2 mr-2" /> Add New Employee</div>
          {/**************INPUT TAGS**************/}
          <div type="file"
            accept="image/*" style={{
              display: 'flex', marginTop: '15px',
              marginLeft: '240px', marginBottom: '5px'
            }} className="cursor-pointer ">
            <input type="file" accept="image/*" id="uploadImage" hidden />
            <img src="/Image/EmployeeLogo.png" />
            <label htmlFor="uploadImage" style={{ marginLeft: '10px', marginTop: '10px' }}> <p className="cursor-pointer" >Upload Profile Image</p></label>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-2">
            <div className="" style={{ marginLeft: '250px' }}>
              <p className="mb-2 ">User ID</p>
              <input
                type="text"
                placeholder="#124567"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '50px' }}>
              <p className="mb-2">Full Name</p>
              <input
                type="text"
                placeholder="John Cooper"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '250px' }}>
              <p className="mb-2">Email</p>
              <input
                type="email"
                placeholder="johncopper@example.com"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '50px' }}>
              <p className="mb-2">Contact No.</p>
              <input
                type="text"
                placeholder="+971 123 4577"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>


            <div className="" style={{ marginLeft: '250px' }}>
              <p className="mb-2">Address</p>
              <input
                type="text"
                placeholder="Sheikh Mohammed Bin Rashed 
                Boulevard Downtown Dubai,"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: '50px' }}>
              <p className="mb-2">Password</p>
              <input
                type="password"
                placeholder="********"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>


            <div style={{ marginLeft: '180px' }}>
              <table className="table table-compact w-full z-0 employeeTable" style={{ width: '900px' }}>

                <thead>
                  <tr>
                    <th>Permissions</th>
                    <th>View</th>
                    <th>Add</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>permission1</td>
                    <td > <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />View </td>
                    <td> <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />Add</td>
                    <td> <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />Edit</td>
                    <td> <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />Delete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-action flex justify-center">
            <a
              href="#"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              x
            </a>
            <a
              href="#"
              className="btn border-0 hover:border hover:border-[#1570EF] bg-[#1570EF] hover:bg-[#1570EF]"
            >
              Add Employee
            </a>
          </div>
        </div>
      </div>

      {/**End the modal of add employee  */}



      {/* **********MODAL***** for  Employee Profile ******* */}

      <div className="modal fixed inset-0 flex items-center justify-center" id="emp_Profile">
        <div className="modal-box max-w-[1120px] min-h-[700px] ">
          <div style={{ display: 'flex', marginLeft: '50px', marginTop: '5px' }} className="text-xl font-semibold mr-4">Employee <FaGreaterThan className="mt-1 ml-2 mr-2" />Profile</div>
          {/**************INPUT TAGS**************/}
          <div style={{
            display: 'flex', marginTop: '15px',
            marginLeft: '240px', marginBottom: '5px'
          }}>

            <img src="/Image/EmpLogo.png" />
            <div>
              <div style={{ marginLeft: '10px', marginTop: '10px' }}> <p>John Copper</p></div>
              <div style={{ marginLeft: '10px', marginTop: '10px' }}> <p>employee@example.com</p></div>
            </div>

          </div>
          {/* 
          <div
            type="file"
            accept="image/*"
            className="cursor-pointer "
          >
            <input type="file" accept="image/*" id="uploadImage" hidden />

            <label htmlFor="uploadImage" className="flex justify-center my-2">

              <p>Upload Profile Image</p>
            </label>
          </div> */}



          <div className="grid grid-cols-2 gap-x-5 gap-y-2">
            <div className="" style={{ marginLeft: '250px' }}>
              <p className="mb-2 ">User ID</p>
              <input
                type="text"
                placeholder="#124567"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '50px' }}>
              <p className="mb-2">Full Name</p>
              <input
                type="text"
                placeholder="John Cooper"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '250px' }}>
              <p className="mb-2">Email</p>
              <input
                type="email"
                placeholder="johncopper@example.com"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '50px' }}>
              <p className="mb-2">Contact No.</p>
              <input
                type="text"
                placeholder="+971 123 4577"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            {/* <div className="">
              <p className="mb-2">Date of Birth</p>
              <input
                type="date"
                className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] "
              />
            </div> */}

            {/* <div className="">
              <p className="mb-2">Gender</p>
              <select className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] ">
                <option value="">Male</option>
                <option value="">Famale</option>
              </select>
            </div> */}

            <div className="" style={{ marginLeft: '250px' }}>
              <p className="mb-2">Address</p>
              <input
                type="text"
                placeholder="Sheikh Mohammed Bin Rashed 
                Boulevard Downtown Dubai,"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: '50px' }}>
              <p className="mb-2">Password</p>
              <input
                type="password"
                placeholder="********"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            {/* <div
              type="file"
              accept="image/*"
              className="cursor-pointer "
             >
              <input type="file" accept="image/*" id="uploadImage" hidden />

              <label htmlFor="uploadImage" className="flex justify-center my-2">

                <p>Upload Profile Image</p>
              </label>
            </div> */}
            <div style={{ marginLeft: '180px' }}>
              <table className="table table-compact w-full z-0 employeeTable" style={{ width: '900px' }}>

                <thead>
                  <tr>
                    <th>Permissions</th>
                    <th>View</th>
                    <th>Add</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>permission1</td>
                    <td > <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />View </td>
                    <td> <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />Add</td>
                    <td> <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />Edit</td>
                    <td> <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />Delete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-action flex justify-center">
            <a
              href="#"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              x
            </a>
            <a
              href="#"
              className="btn border-0 hover:border hover:border-[#1570EF] bg-[#1570EF] hover:bg-[#1570EF]"
            >
              Save
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout(totalrevenue);
