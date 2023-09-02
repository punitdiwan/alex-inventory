import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { BiFilter } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";

const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label className="labeltoggle">
      <input
        type="checkbox"
        defaultChecked={isToggled}
        onClick={callback}
        className="inputtoggle"
      />
      <span className="spantoggle" />
      {/* <strong className="strongtoggle">{label}</strong> */}
    </label>
  );
};

const employee = () => {
  const router = useRouter();

  const Menus = [
    { label: "Active Employee", url: "/" },
    { label: "In-active Employee", url: "/" },
    { label: "Date Range", url: "/" },
  ];

  const datac = {
    cardData: [
      {
        id: "1",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "2",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "3",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "4",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "5",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "6",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "7",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "8",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "9",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "10",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "11",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "12",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "13",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "14",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "15",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
      },
      {
        id: "16",
        employeename: "Johnny Depp ",
        employeeid: "#124567",
        address: "3093 Cheshire Road",
        contact: "+971 21456320",
        joiningDate: "28/05/2023",
        active: "on",
        action: "edit",
        imageemp: "/Image/empl.png",
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

  const logState = (state) => {
    console.log("Toggled:", state);
  };

  const [open, setOpen] = useState(false);

  return (
    <div className=" sm:w-full h-screen pb-5 px-5 employeeButton">
      {/* The button to open modal */}
      <div className="lg:block md:block ms:hidden sm:hidden">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-xl">Employees</h1>
          <div className="flex ">
            <div>
              <a
                href="#my_modal_8"
                className="btn border-0 hover:border hover:border-[#1366D9] bg-[#1366D9] hover:bg-white hover:text-[#1366D9]"
              >
                Add New Employee
              </a>
            </div>
            <div className="relative ml-4">
              <div
                onClick={() => setOpen(!open)}
                className="cursor-pointer btn border-0 hover:border hover:border-[grey] hover:bg-white hover:text-[#1366D9] fiterIcon"
              >
                <BiFilter className="" />
                Filters
              </div>

              {open && (
                <div className="bg-white p-4 w-52 shadow-lg absolute top-full right-0 mt-2 z-10">
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
              <div className="mr-3 ms:text-4xl font-bold underline">
                Employees
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[55px]">
          <div className="flex flex-row justify-end ">
            <div>
              <a
                href="#my_modal_8"
                className="btn border-0 hover:border hover:border-[#1366D9] bg-[#1366D9] hover:bg-white hover:text-[#1366D9]"
              >
                Add New Employee
              </a>
            </div>
            <div className="relative ml-4">
              <div
                onClick={() => setOpen(!open)}
                className="cursor-pointer btn border-0 hover:border hover:border-[grey] hover:bg-white hover:text-[#1366D9] fiterIcon"
              >
                <BiFilter className="" />
                Filters
              </div>

              {open && (
                <div className="bg-white p-4 w-52 shadow-lg absolute top-full right-0 mt-2 z-10">
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
              >
                Employee ID
              </th>
              <th
                style={{ textAlign: "center" }}
                className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
              >
                Employee Name
              </th>
              <th
                style={{ textAlign: "center" }}
                className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
              >
                address
              </th>
              <th
                style={{ textAlign: "center" }}
                className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
              >
                Joining Date
              </th>
              <th
                style={{ textAlign: "center" }}
                className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
              >
                contact
              </th>
              <th
                style={{ textAlign: "center" }}
                className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
              >
                Active
              </th>
              <th
                style={{ textAlign: "center" }}
                className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
              >
                Action
              </th>
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
                >
                  {item.employeeid}
                </th>
                <td
                  style={{ textAlign: "center", background: "none" }}
                  className="  ms:text-3xl  lg:text-sm"
                >
                  {item.employeename}
                </td>
                <td
                  style={{ textAlign: "center", background: "none" }}
                  className="  ms:text-3xl  lg:text-sm"
                >
                  {item.address}
                </td>
                <td
                  style={{ textAlign: "center", background: "none" }}
                  className="  ms:text-3xl  lg:text-sm"
                >
                  {item.joiningDate}
                </td>
                <td
                  style={{ textAlign: "center", background: "none" }}
                  className="  ms:text-3xl  lg:text-sm"
                >
                  {item.contact}
                </td>
                <td
                  style={{ textAlign: "center", background: "none" }}
                  className="  ms:text-3xl  lg:text-sm"
                >
                  <Toggle label="Toggle me" toggled={true} onClick={logState} />
                </td>
                <td
                  style={{
                    textAlign: "center",
                    background: "none",
                    borderBottom: "none",
                  }}
                  className="flex justify-center items-center ms:mt-[35px]"
                >
                  <a href="#emp_Profile">
                    <img
                      src="/Image/carbon_view.png"
                      className="text-3xl text-green-600 me-1"
                    />
                  </a>

                  <a href="#emp_Profile">
                    <img
                      src="/Image/Edit.png"
                      className="text-3xl text-green-600 me-1"
                    />
                  </a>
                  <Link href={"#"}>
                    <img
                      src="/Image/Delete.png"
                      className="text-3xl text-red-500 ms-1"
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <div
        className="mx-1"
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
            className={`btn btn-sm btn-outline hover:bg-[#1366D9] mx-2  text-black rounded border border-[#1366D9] ${
              currentPage === index + 1 ? "bg-[#1366D9] text-white" : ""
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

      <div
        className="modal fixed inset-0 flex items-center justify-center"
        id="my_modal_8"
      >
        <div className="modal-box ms:max-w-[1120px] ms:min-h-[600px] md:max-w-[1120px] md:min-h-[400px] ">
          <div
            style={{ display: "flex", marginLeft: "50px", marginTop: "5px" }}
            className="text-xl font-semibold mr-4"
          >
            Employee <FaGreaterThan className="mt-1 ml-2 mr-2" /> Add New
            Employee
          </div>
          {/**************INPUT TAGS**************/}
          <div
            type="file"
            accept="image/*"
            style={{
              display: "flex",
              marginTop: "15px",
              marginLeft: "240px",
              marginBottom: "5px",
            }}
            className="cursor-pointer "
          >
            <input type="file" accept="image/*" id="uploadImage" hidden />
            <img src="/Image/EmployeeLogo.png" />
            <label
              htmlFor="uploadImage"
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              {" "}
              <p className="cursor-pointer">Upload Profile Image</p>
            </label>
          </div>

          <div className="grid  grid-cols-2 ms:grid-cols-1 lg:gap-x-5 lg:gap-y-2">
            <div className="lg:ml-[250px] ms:ml-[100px] ms:text-2xl ms:font-semibold ms:mt-[10px]">
              <p className="mb-2 ms:hidden md:block lg:block ">User ID</p>
              <lable className="lg:hidden md:hidden ms:ml-[-35px] ms:mr-[95px]">
                User ID
              </lable>
              <input
                type="text"
                placeholder="#124567"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]
                ms:w-[400px] ms:h-[70px] md:w-[300px] md:h-[50px]
                "
              />
            </div>

            <div className="lg:ml-[50px] ms:ml-[100px] ms:text-2xl ms:font-semibold ms:mt-[10px]">
              <p className="mb-2 ms:hidden md:block lg:block ">Full Name</p>
              <lable className="lg:hidden md:hidden ms:ml-[-35px] ms:mr-[65px]">
                Full Name
              </lable>
              <input
                type="text"
                placeholder="John Cooper"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]
                ms:w-[400px] ms:h-[70px] md:w-[300px] md:h-[50px]
                "
              />
            </div>

            <div className="lg:ml-[250px] ms:ml-[100px] ms:text-2xl ms:font-semibold ms:mt-[10px]">
              <p className="mb-2 ms:hidden md:block lg:block ">Email</p>
              <lable className="lg:hidden md:hidden ms:ml-[-35px] ms:mr-[115px]">
                Email
              </lable>
              <input
                type="email"
                placeholder="johncopper@example.com"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]
                ms:w-[400px]  ms:h-[70px]  md:w-[300px] md:h-[50px]
                "
              />
            </div>

            <div className="lg:ml-[50px] ms:ml-[100px] ms:text-2xl ms:font-semibold ms:mt-[10px]">
              <p className="mb-2 ms:hidden md:block lg:block ">Contact No.</p>
              <lable className="lg:hidden md:hidden  ms:ml-[-35px] ms:mr-[45px]">
                Contact No.
              </lable>
              <input
                type="text"
                placeholder="+971 123 4577"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]
                ms:w-[400px] ms:h-[70px] md:w-[300px] md:h-[50px]
                "
              />
            </div>

            <div className="lg:ml-[250px] ms:ml-[100px] ms:text-2xl ms:font-semibold ms:mt-[10px]">
              <p className="mb-2 ms:hidden md:block lg:block ">Address</p>
              <lable className="lg:hidden md:hidden ms:ml-[-35px] ms:mr-[85px] ">
                Address
              </lable>
              <input
                type="text"
                placeholder="Sheikh Mohammed Bin Rashed 
                Boulevard Downtown Dubai,"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]
                ms:w-[400px] ms:h-[70px] md:w-[300px] md:h-[50px]
                "
              />
            </div>
            <div className="lg:ml-[50px] ms:ml-[100px] ms:text-2xl ms:font-semibold ms:mt-[10px]">
              <p className="mb-2 ms:hidden md:block lg:block ">Password</p>
              <lable className="lg:hidden md:hidden ms:ml-[-35px] ms:mr-[65px]">
                Password
              </lable>
              <input
                type="password"
                placeholder="********"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]
                ms:w-[400px] ms:h-[70px] md:w-[300px] md:h-[50px]
                "
              />
            </div>

          
          </div>

          <div className="modal-action flex justify-center">
            {/* <a
              href="#"
              
            >
              x
            </a> */}
            <a href="#" className="btn btn-success btn-circle btn-ghost absolute right-2 top-2">
            <AiFillCloseCircle style={{width:"30px",height:"30px",color:"#1570EF"}} className=""/>
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

      <div
        className="modal fixed inset-0 flex items-center justify-center"
        id="emp_Profile"
      >
        <div className="modal-box ms:max-w-[1120px] ms:min-h-[900px] md:max-w-[1120px] md:min-h-[500px] ">
          <div
            style={{ display: "flex", marginLeft: "50px", marginTop: "5px" }}
            className="text-xl font-semibold mr-4"
          >
            Employee <FaGreaterThan className="mt-1 ml-2 mr-2" />
            Profile
          </div>
          {/**************INPUT TAGS**************/}
          <div
            style={{
              display: "flex",
              marginTop: "15px",
              marginLeft: "240px",
              marginBottom: "5px",
            }}
          >
            <img src="/Image/EmpLogo.png" />
            <div>
              <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                {" "}
                <p>John Copper</p>
              </div>
              <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                {" "}
                <p>employee@example.com</p>
              </div>
            </div>
          </div>
         

          <div className="grid  grid-cols-2 ms:grid-cols-1 lg:gap-x-5 lg:gap-y-2">
            <div className="lg:ml-[250px] ms:ml-[100px] ms:text-2xl ms:font-semibold ms:mt-[10px]">
              <p className="mb-2 ms:hidden md:block lg:block ">User ID</p>
              <lable className="lg:hidden md:hidden ms:ml-[-35px] ms:mr-[95px]">
                User ID
              </lable>
              <input
                type="text"
                placeholder="#124567"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]
                ms:w-[400px] ms:h-[70px] md:w-[300px] md:h-[50px]
                "
              />
            </div>

            <div className="lg:ml-[50px] ms:ml-[100px] ms:text-2xl ms:font-semibold ms:mt-[10px]">
              <p className="mb-2 ms:hidden md:block lg:block ">Full Name</p>
              <lable className="lg:hidden md:hidden ms:ml-[-35px] ms:mr-[65px]">
                Full Name
              </lable>
              <input
                type="text"
                placeholder="John Cooper"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]
                ms:w-[400px] ms:h-[70px] md:w-[300px] md:h-[50px]
                "
              />
            </div>

            <div className="lg:ml-[250px] ms:ml-[100px] ms:text-2xl ms:font-semibold ms:mt-[10px]">
              <p className="mb-2 ms:hidden md:block lg:block ">Email</p>
              <lable className="lg:hidden md:hidden ms:ml-[-35px] ms:mr-[115px]">
                Email
              </lable>
              <input
                type="email"
                placeholder="johncopper@example.com"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]
                ms:w-[400px]  ms:h-[70px]  md:w-[300px] md:h-[50px]
                "
              />
            </div>

            <div className="lg:ml-[50px] ms:ml-[100px] ms:text-2xl ms:font-semibold ms:mt-[10px]">
              <p className="mb-2 ms:hidden md:block lg:block ">Contact No.</p>
              <lable className="lg:hidden md:hidden  ms:ml-[-35px] ms:mr-[45px]">
                Contact No.
              </lable>
              <input
                type="text"
                placeholder="+971 123 4577"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]
                ms:w-[400px] ms:h-[70px] md:w-[300px] md:h-[50px]
                "
              />
            </div>

            <div className="lg:ml-[250px] ms:ml-[100px] ms:text-2xl ms:font-semibold ms:mt-[10px]">
              <p className="mb-2 ms:hidden md:block lg:block ">Address</p>
              <lable className="lg:hidden md:hidden ms:ml-[-35px] ms:mr-[85px] ">
                Address
              </lable>
              <input
                type="text"
                placeholder="Sheikh Mohammed Bin Rashed 
                Boulevard Downtown Dubai,"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]
                ms:w-[400px] ms:h-[70px] md:w-[300px] md:h-[50px]
                "
              />
            </div>
            <div className="lg:ml-[50px] ms:ml-[100px] ms:text-2xl ms:font-semibold ms:mt-[10px]">
              <p className="mb-2 ms:hidden md:block lg:block ">Password</p>
              <lable className="lg:hidden md:hidden ms:ml-[-35px] ms:mr-[65px]">
                Password
              </lable>
              <input
                type="password"
                placeholder="********"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]
                ms:w-[400px] ms:h-[70px] md:w-[300px] md:h-[50px]
                "
              />
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

export default Layout(employee);
