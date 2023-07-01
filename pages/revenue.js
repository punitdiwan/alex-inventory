import React, { useState, useEffect } from "react";
import Layout from "../components/Layout"


const revenue = () => {


  const datac = {
    cardData: [
      { id: "1", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Success" },
      { id: "2", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Success" },
      { id: "3", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Failed" },
      { id: "4", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "5", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Success" },
      { id: "6", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Success" },
      { id: "7", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "8", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "9", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "10", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "11", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "12", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "13", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "14", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "15", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "16", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "17", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "18", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "19", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "20", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "21", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "22", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "23", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "24", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "25", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "26", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "27", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "28", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "29", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },
      { id: "20", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Completed", payment: "Pending" },

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



  return (
    <div className=" sm:w-full h-screen pb-5 px-5">
      <h1 className="mb-3 mt-3 font-semibold text-xl">This Week Revenue</h1>

      <table className="table table-compact w-full z-0">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Customer Name</th>
            <th>address</th>
            <th>contact</th>
            <th>service Date</th>
            <th>service Assigned</th>
            <th>Amount</th>
            <th>payment status</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item, index) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <td>{item.fullName}</td>
              <td>{item.address}</td>
              <td>{item.contact}</td>
              <td>{item.serviceDate}</td>
              <td>{item.serviceAssigned}</td>
              <td>{item.wallet}</td>
              <td className={item.payment === "Pending" ? "bg-yellow-200 text-yellow-400 font-bold" : item.payment === "Success" ? "bg-green-200 text-green-500 font-bold" : "bg-red-200 text-red-400 font-bold"}>{item.payment}</td>
              </tr>
          ))}
        </tbody>
      </table>

      <div className="mx-1" style={{ display: "flex", position: "fixed", bottom: 5, right: 20 }}>
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

export default Layout(revenue)
