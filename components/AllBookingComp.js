import React, { useState, useEffect } from "react";
import Layout from "../components/Layout"


const AllBookingComp = () => {


    const datac = {
        cardData: [
            { id: "1", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "2", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "3", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Pending" },
            { id: "4", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
            { id: "5", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Failed" },
            { id: "6", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Pending" },
            { id: "7", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Pending" },
            { id: "8", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", orderItem: "Cold Coffee(2)", orderStatus: "On the way", amount: "$ 80.00", method: "(PP)", payment: "Success" },
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
    const [itemsPerPage] = useState(6);

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
        <div className="h-screen">


            <h1 className="mt-3 font-semibold text-xl mx-5">Recent Orders(Last 1 days)</h1>


            <table className="table table-compact w-full z-0">
                <thead>
                    <tr>
                        <th>S.No.</th>
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
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.fullName}</td>
                            <td>{item.address}</td>
                            <td>{item.contact}</td>
                            <td>{item.orderItem}</td>
                            <td>{item.orderStatus}</td>
                            <td>{item.amount} {item.method}</td>
                            <td className={item.payment === "Pending" ? "bg-yellow-200 text-yellow-400 font-bold" : item.payment === "Success" ? "bg-green-200 text-green-500 font-bold" : "bg-red-200 text-red-400 font-bold"}>{item.payment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination buttons */}
            <div className="flex justify-end mx-5 mt-4 mb-3">
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

export default AllBookingComp
