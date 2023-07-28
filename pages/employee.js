import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout"
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

import Link from "next/link";
import { logout } from "../lib/client";



const employee = () => {
    

    const router = useRouter();

    const datac = {
        cardData: [
            { id: "1", fullName: "Johnny Depp ", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "2", fullName: "Johnny Depp ", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "3", fullName: "Johnny Depp ", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Failed" },
            { id: "4", fullName: "Johnny Depp ", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Pending" },
            { id: "5", fullName: "Johnny Depp ", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "6", fullName: "Johnny Depp ", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "7", fullName: "Johnny Depp ", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "8", fullName: "Johnny Depp ", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "9", fullName: "Johnny Depp ", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Failed" },
            { id: "10", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Pending" },
            { id: "11", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "12", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "13", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Failed" },
            { id: "14", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Pending" },
            { id: "15", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "16", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "17", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Failed" },
            { id: "18", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Pending" },
            { id: "19", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Pending" },
            { id: "20", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Pending" },
            { id: "21", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "22", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "23", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Failed" },
            { id: "24", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Pending" },
            { id: "25", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Pending" },
            { id: "26", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "27", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Success" },
            { id: "28", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Failed" },
            { id: "29", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Pending" },
            { id: "20", fullName: "Johnny Depp", employeeid: "#124567", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "4.5/5", wallet: "yes", serviceStatus: "Icon", payment: "Pending" },

        ]
    }

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




    return (
        <div className=" sm:w-full h-screen pb-5 px-5">
            <h1 className="mb-3 mt-3 font-semibold text-xl">Employees</h1>



            {/* The button to open modal */}
            <div className=" flex justify-between my-5">
                <input type="text" placeholder="Search" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208]" />
                <a href="#my_modal_8" className="btn border-0 hover:border hover:border-[#E97208] text-end bg-[#E97208] hover:bg-white hover:text-[#E97208]">+ Add Employee</a>

            </div>
            {/* **********MODAL************ */}
            <div className="modal" id="my_modal_8">

                <div className="modal-box">
                    {/**************INPUT TAGS**************/}
                    <div className="grid grid-cols-2 gap-x-5 gap-y-2">

                        <div className="">
                            <p className="mb-2">User ID</p>
                            <input type="text" placeholder="User ID" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                        </div>

                        <div className="">
                            <p className="mb-2">Full Name</p>
                            <input type="text" placeholder="Full Name" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                        </div>

                        <div className="">
                            <p className="mb-2">Email</p>
                            <input type="email" placeholder="Email" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                        </div>

                        <div className="">
                            <p className="mb-2">Contact No.</p>
                            <input type="text" placeholder="Contact No." className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                        </div>

                        <div className="">
                            <p className="mb-2">Date of Birth</p>
                            <input type="date" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                        </div>

                        <div className="">
                            <p className="mb-2">Gender</p>
                            <select className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] ">
                                <option value="">Male</option>
                                <option value="">Famale</option>
                            </select>
                        </div>
                        <div className="">
                            <p className="mb-2">Address</p>
                            <input type="text" placeholder="Address" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                        </div>
                        <div className="">
                            <p className="mb-2">Password</p>
                            <input type="password" placeholder="Password" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                        </div>

                        <div type="file" accept="image/*" className="cursor-pointer col-span-2 border border-[#E97208] rounded-md mt-5">
                            <input type="file" accept="image/*" id="uploadImage" hidden />

                            <label htmlFor="uploadImage" className="flex justify-center my-2">
                                <FaCloudUploadAlt className="text-2xl mx-2" />
                                <p>Upload Profile Image</p>
                            </label>

                        </div>

                    </div>
                    <div className="modal-action flex justify-center">
                        <a href="#" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</a>
                        <a href="#" className="btn border-0 hover:border hover:border-[#E97208] bg-[#E97208] hover:bg-[#E97208]">Add Employee</a>
                    </div>
                </div>
            </div>

            <table className="table table-compact w-full z-0">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>address</th>
                        <th>Joining Date</th>
                        <th>contact</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={item.id} >
                            <th>{item.id}</th>
                            <th>{item.employeeid}</th>
                            <td className="cursor-pointer" >{item.fullName}</td>
                            <td>{item.address}</td>
                            <td>{item.serviceDate}</td>
                            <td>{item.contact}</td>
                            <td className="flex">

                                <a href="#editemp">
                                    <BiEdit className='text-3xl text-green-600 me-1' />
                                </a>

                                {/* **********MODAL************ */}
                                <div className="modal" id="editemp">

                                    <div className="modal-box">
                                        {/**************INPUT TAGS**************/}
                                        <div className="grid grid-cols-2 gap-x-5 gap-y-2">

                                            <div className="">
                                                <p className="mb-2">User ID</p>
                                                <input type="text" placeholder="User ID" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                                            </div>

                                            <div className="">
                                                <p className="mb-2">Full Name</p>
                                                <input type="text" placeholder="Full Name" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                                            </div>

                                            <div className="">
                                                <p className="mb-2">Email</p>
                                                <input type="email" placeholder="Email" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                                            </div>

                                            <div className="">
                                                <p className="mb-2">Contact No.</p>
                                                <input type="text" placeholder="Contact No." className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                                            </div>

                                            <div className="">
                                                <p className="mb-2">Date of Birth</p>
                                                <input type="date" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                                            </div>

                                            <div className="">
                                                <p className="mb-2">Gender</p>
                                                <select className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] ">
                                                    <option value="">Male</option>
                                                    <option value="">Famale</option>
                                                </select>
                                            </div>
                                            <div className="">
                                                <p className="mb-2">Address</p>
                                                <input type="text" placeholder="Address" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                                            </div>
                                            <div className="">
                                                <p className="mb-2">Password</p>
                                                <input type="password" placeholder="Password" className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] " />
                                            </div>

                                            <div type="file" accept="image/*" className="cursor-pointer col-span-2 border border-[#E97208] rounded-md mt-5">
                                                <input type="file" accept="image/*" id="uploadImage" hidden />

                                                <label htmlFor="uploadImage" className="flex justify-center my-2">
                                                    <FaCloudUploadAlt className="text-2xl mx-2" />
                                                    <p>Upload Profile Image</p>
                                                </label>

                                            </div>

                                        </div>
                                        <div className="modal-action flex justify-center">
                                            <a href="#" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</a>
                                            <a href="#" className="btn bg-[#E97208] hover:bg-[#E97208]">Edit Employee</a>
                                        </div>
                                    </div>
                                </div>

                                <Link href={"#"}>
                                    <RiDeleteBin6Line className='text-3xl text-red-500 ms-1' />
                                </Link>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mx-1" style={{ display: "flex", justifyContent: "flex-end", bottom: 5, right: 20 }}>
                {/* Pagination buttons */}

                <button
                    className="btn btn-sm hover:bg-[#E97208] text-xs border rounded text-white bg-[#E97208]"
                    disabled={currentPage === 1}
                    onClick={previousPage}
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`btn btn-sm btn-outline hover:bg-[#E97208] mx-2  text-black rounded border border-[#E97208] ${currentPage === index + 1 ? "bg-[#E97208] text-white" : ""
                            }`}
                        onClick={() => paginate(index + 1)}
                    >

                        {index + 1}
                    </button>
                ))}

                <button
                    className="btn btn-sm hover:bg-[#E97208] text-xs border rounded text-white bg-[#E97208]"
                    disabled={currentPage === totalPages}
                    onClick={nextPage}
                >
                    Next
                </button>

            </div>
        </div>
    );
};

export default Layout(employee)
