import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { FiFilter } from "react-icons/fi";

const users = () => {
  const datac = {
    cardData: [
      {
        id: "1",
        supplier_name: "Supplier 1",
        supplier_brand: "Himalaya",
        phone_no: "+91 21456 32001",
        email_id: "Supplier@example.com",
        country: "India",
        last_purchasing_date: "19/05/23",
        action: "(PP)",
      },
      {
        id: "2",
        supplier_name: "Supplier 1",
        supplier_brand: "Himalaya",
        phone_no: "+91 21456 32001",
        email_id: "Supplier@example.com",
        country: "India",
        last_purchasing_date: "19/05/23",
        action: "(PP)",
      },
      {
        id: "3",
        supplier_name: "Supplier 1",
        supplier_brand: "Himalaya",
        phone_no: "+91 21456 32001",
        email_id: "Supplier@example.com",
        country: "India",
        last_purchasing_date: "19/05/23",
        action: "(PP)",
      },
      {
        id: "4",
        supplier_name: "Supplier 1",
        supplier_brand: "Himalaya",
        phone_no: "+91 21456 32001",
        email_id: "Supplier@example.com",
        country: "India",
        last_purchasing_date: "19/05/23",
        action: "(PP)",
      },
      {
        id: "5",
        supplier_name: "Supplier 1",
        supplier_brand: "Himalaya",
        phone_no: "+91 21456 32001",
        email_id: "Supplier@example.com",
        country: "India",
        last_purchasing_date: "19/05/23",
        action: "(PP)",
      },
      {
        id: "6",
        supplier_name: "Supplier 1",
        supplier_brand: "Himalaya",
        phone_no: "+91 21456 32001",
        email_id: "Supplier@example.com",
        country: "India",
        last_purchasing_date: "19/05/23",
        action: "(PP)",
      },
      {
        id: "7",
        supplier_name: "Supplier 1",
        supplier_brand: "Himalaya",
        phone_no: "+91 21456 32001",
        email_id: "Supplier@example.com",
        country: "India",
        last_purchasing_date: "19/05/23",
        action: "(PP)",
      },
      {
        id: "8",
        supplier_name: "Supplier 1",
        supplier_brand: "Himalaya",
        phone_no: "+91 21456 32001",
        email_id: "Supplier@example.com",
        country: "India",
        last_purchasing_date: "19/05/23",
        action: "(PP)",
      },
      {
        id: "9",
        supplier_name: "Supplier 1",
        supplier_brand: "Himalaya",
        phone_no: "+91 21456 32001",
        email_id: "Supplier@example.com",
        country: "India",
        last_purchasing_date: "19/05/23",
        action: "(PP)",
      },
      {
        id: "10",
        supplier_name: "Supplier 1",
        supplier_brand: "Himalaya",
        phone_no: "+91 21456 32001",
        email_id: "Supplier@example.com",
        country: "India",
        last_purchasing_date: "19/05/23",
        action: "(PP)",
      },

      {
        id: "11",
        supplier_name: "Supplier 1",
        supplier_brand: "Himalaya",
        phone_no: "+91 21456 32001",
        email_id: "Supplier@example.com",
        country: "India",
        last_purchasing_date: "19/05/23",
        action: "(PP)",
      },
      {
        id: "12",
        supplier_name: "Supplier 1",
        supplier_brand: "Himalaya",
        phone_no: "+91 21456 32001",
        email_id: "Supplier@example.com",
        country: "India",
        last_purchasing_date: "19/05/23",
        action: "(PP)",
      },
    ],
  };

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
    <div className="sm:w-full h-screen pb-5 px-5">
      <div className="flex flex-row justify-between">
        <div className="text-xl font-bold ml-3">Supplier</div>
        <div className="flex space-x-2">
          {/** button to open suppplier */}
          <a href="#addsupplier">
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2">
              Add Supplier
            </button>{" "}
          </a>
          <button className="filter-button rounded-lg px-4 py-2">
            <i className="fas fa-filter mr-2"></i>
            Filters
          </button>
          <button className="bg-gray-300 text-gray-600 rounded-lg px-4 py-2">
            <i className="fas fa-download mr-2"></i>
            Download all
          </button>
        </div>
      </div>
      {/* **********MODAL************ */}
      <div className="modal" id="addsupplier">
        <div className="modal-box w-7/1 max-w-2xl">
          {/**************INPUT TAGS**************/}
          <h1 className="font-medium text-xl ml-7">New Supplier</h1>
          <div>
            <div
              style={{
                display: "flex",
                marginLeft: "180px",
                marginTop: "10px",
              }}
              className=""
            >
              <img src="/Image/pic_modal.png" />
              <div className="ml-3">Drag image here
              <div className="ml-11"> Or</div>
              <div className="ml-1">Browse image</div>
              </div>
            </div>
          </div>

          <div className="mt-6 ml-3">
            <div className="flex items-center">
              <label className="mr-2">SupplierName</label>
              <div style={{marginLeft:"60px"}}>
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="border rounded p-1 "
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mt-5 ml-3">
            <label className="mr-2">Supplier Brand</label>
            <div style={{marginLeft:"60px"}}>
              <input
                type="text"
                placeholder="Select product category"
                className="border rounded p-1"
              />
            </div>
          </div>

          <div className="flex items-center mt-5 ml-3">
            <label className="mr-2">Phone No.</label>
            <div style={{marginLeft:"90px"}}>
              <input
                type="number"
                placeholder="Enter product name"
                className="border rounded p-1"
              />
            </div>
          </div>

          <div className="flex items-center mt-5 ml-3">
            <label className="mr-2">Email Id</label>
            <div style={{marginLeft:"110px"}}>
              <input
                type="email"
                placeholder="Enter your email Address"
                className="border rounded p-1"
              />
            </div>
          </div>

          <div className="flex items-center mt-5 ml-3">
            <lable className="mr-2">Country</lable>
            <div style={{marginLeft:"110px"}}>
              <input
                type="text"
                placeholder="Enter your country"
                className="border rounded p-1"
              />
            </div>
          </div>
          
            <div style={{display:"flex-row",marginLeft:"150px",marginTop:"20px"}} className="ml-6">
            <button className="bg-gray-300 text-gray-600 rounded-lg px-4 py-2 ">
              Discard
            </button> 
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2">
              Add Supplier
            </button>
          </div>
          </div>
        
      </div>

      <table className="table w-full mt-7">
        <thead>
          <tr>
            <th className="text-center text-gray-500">Supplier Name</th>
            <th className="text-center text-gray-500">Supplier Brand</th>
            <th className="text-center text-gray-500">Phone No.</th>
            <th className="text-center text-gray-500">Email Id</th>
            <th className="text-center text-gray-500">Country</th>
            <th className="text-center text-gray-500">Last Purchasing Date</th>
            <th className="text-center text-gray-500">Action</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="text-center">{item.supplier_name}</td>
              <td className="text-center">{item.supplier_brand}</td>
              <td className="text-center">{item.phone_no}</td>
              <td className="text-center">{item.email_id}</td>
              <td className="text-center">{item.country}</td>
              <td className="text-center">{item.last_purchasing_date}</td>
              <td className="text-center">{item.action}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mx-1 fixed bottom-5 right-20">
        <button
          className="btn btn-sm hover:bg-[#1366D9] text-xs rounded text-white bg-[#1366D9]"
          disabled={currentPage === 1}
          onClick={previousPage}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`btn btn-sm btn-outline hover:bg-[#1366D9] mx-2 text-black rounded border-[#1366D9] ${
              currentPage === index + 1 ? "bg-[#1366D9] text-white" : ""
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="btn btn-sm hover:bg-[#1366D9] text-xs rounded text-white bg-[#1366D9]"
          disabled={currentPage === totalPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Layout(users);
