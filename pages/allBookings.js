import React, { useState, useEffect } from "react";
import Layout from "../components/Layout"


const allBookings = () => {


  const datac = {
    cardData: [
      { id: "1", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending",  payment: "cod" },
      { id: "2", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending",  payment: "cod" },
      { id: "3", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending",  payment: "cod" },
      { id: "4", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending",  payment: "cod" },
      { id: "5", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending",  payment: "cod" },
      { id: "6", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending",  payment: "cod" },
      { id: "7", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending",  payment: "cod" },
      { id: "8", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending",  payment: "cod" },
      { id: "9", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending",  payment: "cod" },
      { id: "10", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "11", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "12", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "13", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "14", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "15", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "16", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "17", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "18", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "19", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "20", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "21", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "22", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "23", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "24", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "25", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "26", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "27", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "28", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "29", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },
      { id: "20", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "John Cooper", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod" },

    ]
  }

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

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
    <div className=" sm:w-full h-full pb-5 px-5">
      <h1 className="mb-3 mt-3 font-semibold text-xl">Pending Bookings</h1>

      <div className="flex justify-between my-2">
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn">All Bookings</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Pending Booking</a></li>
            <li><a>Success Booking</a></li>
            <li><a>Assigned Booking</a></li>
            <li><a>Unassigned Booking</a></li>
            <li><a>Cancelled booking</a></li>
          </ul>
        </div>



        <div className="flex border border-[#002054] rounded-lg w-80 bg-white">
          <input className="border-0 rounded-lg" type="date" />
          <p className="mx-3 my-auto">To</p>
          <input className="border-0 rounded-lg" type="date" />

        </div>

      </div>

      <table className="table table-compact w-full z-0">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>full Name</th>
            <th>address</th>
            <th>contact</th>
            <th>Booking Date</th>
            <th>Service Date</th>
            <th>payment</th>
            <th>service Transfer</th>
            <th>service Status</th>
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
              <td>{item.serviceDate}</td>
              <td>{item.payment}</td>
              <td>{item.serviceAssigned}</td>
              <td>{item.serviceStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mx-1" style={{ display:"flex",position:"fixed",bottom:5,right:20}}>
      {/* Pagination buttons */}

      <button
          className="btn btn-sm hover:bg-[#002F7C] text-xs border rounded text-white bg-[#002F7C]"
          disabled={currentPage === 1}
          onClick={previousPage}
      >
          Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
          <button
              key={index + 1}
              className={`btn btn-sm btn-outline hover:bg-[#002F7C] mx-2  text-black rounded border border-[#002F7C] ${currentPage === index + 1 ? "bg-[#002F7C] text-white" : ""
                  }`}
              onClick={() => paginate(index + 1)}
          >
              {index + 1}
          </button>
      ))}

      <button
          className="btn btn-sm hover:bg-[#002F7C] text-xs border rounded text-white bg-[#002F7C]"
          disabled={currentPage === totalPages}
          onClick={nextPage}
      >
          Next
      </button>

  </div>
    </div>
  );
};

export default Layout(allBookings)
