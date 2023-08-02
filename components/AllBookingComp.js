import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

const AllBookingComp = ({ orders }) => {
  // console.log(
  //   "🚀 ~ file: AllBookingComp.js:5 ~ AllBookingComp ~ orders:",
  //   orders
  // );

  const datac = {
    cardData: orders || [],
  };

  // console.log(  "🚀 ~ file: AllBookingComp.js:44 ~ AllBookingComp ~ details:",datac.cardData[2]
  // );
  // console.log(
  //   "🚀 ~ file: AllBookingComp.js:44 ~ AllBookingComp ~ order details(Array):",
  //   JSON.parse(datac.cardData[2].details)
  // );

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Calculate total pages
  const totalPages = Math.ceil(datac?.cardData?.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datac?.cardData?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

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
    <div className="">
      <h1 className="mt-3 font-semibold text-xl mx-5 border-b-2 border-[#FF9933] inline">
        Recent Orders: <span className=" font-light">{orders.length}</span>
      </h1>

      <table className="table table-compact w-full z-0">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Items</th>
            <th>Order Status</th>
            <th>Amount/Method</th>
            <th>Payment Status</th>
          </tr>
        </thead>

        <tbody>
          {currentItems?.map((item, index) => {
            const details = JSON.parse(item.details).map((item) => {
              return {
                full_name: item.full_name,
                qty: `(${item.qty})`,
              };
            });
            const tooltipData = details.map((it) => Object.values(it).join(""));
            return (
              <tr key={item.$id}>
                <th>{index + 1}</th>
                <td>{item.full_name || "Unknown"}</td>
                <td>{"Unknown"}</td> {/*JSON.parse(item.address).city || */}
                <td>{item.contact || "Unknown"}</td>
                {/* TOOLTIP */}
                <td
                  className="tooltip flex justify-center cursor-pointer"
                  data-tip={tooltipData}
                >
                  <div className="text-center drop-shadow-xl border border-gray-300 text-black bg-gray-200 w-full ">
                    {JSON.parse(item.details).length || "Unknown"}
                  </div>
                </td>
                <td
                  className={
                    item.status === "NEW"
                      ? "text-blue-600"
                      : item.status === "PROCESSING"
                      ? "text-orange-400"
                      : item.status === "CANCELLED"
                      ? "text-red-600"
                      : "text-green-600"
                  }
                >
                  {item.status || "Unknown"}
                </td>
                <td>
                  {item.grand_total}/{item.payment_mode}
                </td>
                <td
                  className={
                    item.payment === "Pending"
                      ? "bg-yellow-200 text-yellow-400 font-bold"
                      : item.payment === "Success"
                      ? "bg-green-200 text-green-500 font-bold"
                      : "bg-red-200 text-red-400 font-bold"
                  }
                >
                  {item.payment || "PENDING"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination buttons */}
      {datac?.cardData?.length !== 0 && (
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
              className={`btn btn-sm btn-outline hover:bg-[#E97208] mx-2  text-black rounded border border-[#E97208] ${
                currentPage === index + 1 ? "bg-[#E97208] text-white" : ""
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
      )}

      {datac?.cardData?.length === 0 && (
        <h1 className="text-center mt-5">NO ORDERS FOUND!</h1>
      )}
    </div>
  );
};

export default AllBookingComp;
