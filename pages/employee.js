import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { BiFilter } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaGreaterThan } from "react-icons/fa";

import Link from "next/link";
import { logout } from "../lib/appwrite";


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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
        imageemp:'/Image/empl.png',
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
  


  return (

    <div className=" sm:w-full h-screen pb-5 px-5 employeeButton">


      {/* The button to open modal */}
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl">Employees</h1>
        <div className="flex ">
          <div >
            <a href="#my_modal_8"
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
              <div
               
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
      <table className="table table-compact w-full z-0 employeeTable">

        <thead>
          <tr>
            {/* <th>S.No.</th> */}
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>address</th>
            <th>Joining Date</th>
            <th>contact</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item, index) => (
            <tr key={item.id}>
              {/* <th>{item.id}</th> */}
              <th>{item.employeeid}</th>
              <td className="cursor-pointer"><div style={{display:'flex'}}><img src={item.imageemp} style={{marginRight:'5px'}}/>{item.employeename}</div></td>
              <td>{item.address}</td>
              <td>{item.joiningDate}</td>
              <td>{item.contact}</td>
              <td><Toggle
                label="Toggle me"
                toggled={true}
                onClick={logState}
              /></td>
              <td className="flex">
                <a href="#emp_Profile">
                  <img src="/Image/carbon_view.png" className="text-3xl text-green-600 me-1" />
                </a>

                <a href="#emp_Profile">
                  <img src="/Image/Edit.png" className="text-3xl text-green-600 me-1" />
                </a>
                <Link href={"#"}>
                  <img src="/Image/Delete.png" className="text-3xl text-red-500 ms-1" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
        <div className="modal-box max-w-[1120px] min-h-[650px] ">
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
        <div className="modal-box max-w-[1120px] min-h-[650px] ">
          <div style={{ display: 'flex', marginLeft: '50px', marginTop: '5px' }} className="text-xl font-semibold mr-4">Employee <FaGreaterThan className="mt-1 ml-2 mr-2" />Profile</div>
          {/**************INPUT TAGS**************/}
          <div style={{
              display: 'flex', marginTop: '15px',
              marginLeft: '240px', marginBottom: '5px'
            }}>
          
            <img src="/Image/EmpLogo.png" />
            <div>
            <div  style={{ marginLeft: '10px', marginTop: '10px' }}> <p>John Copper</p></div>
            <div  style={{ marginLeft: '10px', marginTop: '10px' }}> <p>employee@example.com</p></div>
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

export default Layout(employee);
