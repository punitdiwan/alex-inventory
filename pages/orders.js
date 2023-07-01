import React, { useState, useEffect } from "react";
import Layout from "../components/Layout"
import { FiFilter } from "react-icons/fi";
import { useRouter } from "next/router";



const orders = () => {

    const router = useRouter();


    const datac = {
        cardData: [
            { id: "1", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "2", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "3", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Failed"  },
            { id: "4", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Pending" },
            { id: "5", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "6", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "7", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Pending" },
            { id: "8", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Pending" },
            { id: "9", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Pending" },
            { id: "10", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "11", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "12", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "13", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "14", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "15", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "16", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "17", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "18", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "19", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "20", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "21", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "22", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "23", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "24", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "25", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "26", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "27", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "28", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "29", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "30", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },

        ]
    }

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

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

    const handleDetail = () => {
        router.push("/orderDetails")
    }




    return (
        <div className=" sm:w-full h-screen pb-5 px-5">
            <div className="flex flex-row justify-between">
                <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn m-1 bg-white text-[#575757] px-10 hover:bg-white border-[#E97208]">
                        <FiFilter className="text-2xl mx-2" />

                        All
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#F0EFEF] border border-black rounded-box w-52">
                        <li><a>Delivered Order</a></li>
                        <li><a>On the way</a></li>
                        <li><a>Preparing Order</a></li>
                        <li><a>Pending Order</a></li>
                        <li><a>Cancel Order</a></li>
                    </ul>
                </div>

                <div className="form-control">

                    <input type="date" className="input input-bordered input-md border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208]" />

                </div>
            </div>

            <table className="table table-compact w-full z-0">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Order Item</th>
                        <th>Order Status</th>
                        <th>Amount/Method</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>

                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={item.id} onClick={handleDetail} className="cursor-pointer">
                            <th>{item.id}</th>
                            <td>{item.fullName}</td>
                            <td>{item.address}</td>
                            <td>{item.contact}</td>
                            <td>{item.orderItem}</td>
                            <td>{item.orderStatus}</td>
                            <td>{item.amount}{item.method}</td>
                            <td className={item.payment === "Pending" ? "bg-yellow-200 text-yellow-400 font-bold" : item.payment === "Success" ? "bg-green-200 text-green-500 font-bold" : "bg-red-200 text-red-400 font-bold"}>{item.payment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>




            <div className="mx-1" style={{ display: "flex", position: "fixed", bottom: 5, right: 20 }}>
                {/* Pagination buttons */}

                <button
                    className="btn btn-sm hover:bg-[#E97208] text-xs  rounded text-white bg-[#E97208]"
                    disabled={currentPage === 1}
                    onClick={previousPage}
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`btn btn-sm btn-outline hover:bg-[#E97208] mx-2  text-black rounded  border-[#E97208] ${currentPage === index + 1 ? "bg-[#E97208] text-white" : ""
                            }`}
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    className="btn btn-sm hover:bg-[#E97208] text-xs  rounded text-white bg-[#E97208]"
                    disabled={currentPage === totalPages}
                    onClick={nextPage}
                >
                    Next
                </button>

            </div>
        </div>
    );
};

export default Layout(orders)
