import { FiFilter } from "react-icons/fi";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";

//Inventory Page

const orders = () => {
  const router = useRouter();

  const datac = {
    cardData: [
      {
        id: "1",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "2",
        category_name: "skins Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "3",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "4",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "5",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "6",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "7",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "8",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "9",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "10",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "11",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "12",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "13",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "14",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "15",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "16",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "17",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "18",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "19",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: " /Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "20",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
      },
      {
        id: "21",
        category_name: "Face Products",
        total_Brands: "12 Brands",
        total_product: "43 Products",
        image: "/Image/cate_image.jpg",
        description: "Lorem ipsum dolor sit amet, ",
        action: "...",
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

  const handleDetail = () => {
    router.push("/orderDetails");
  };

  return (
    <div
      className=" sm:w-full h-screen pb-5 px-5 "
      style={{ background: "#eeeee4" }}
    >
      <div className="flex flex-row justify-between top-8">
        {/* <div className="dropdown dropdown-hover">
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
                </div> */}

        {/* <div className="form-control">

                    <input type="date" className="input input-bordered input-md border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208]" />

            </div> */}
        <div
          className="bg-white rounded-lg p-4 "
          style={{ width: "1150px", marginTop: "5px" }}
        >
          <h2 className="text-xl font-bold" style={{ color: "black" }}>
            Overall Inventory
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="ml-4 border-r-4 border-blue-500 pr-4">
              <h4 style={{ color: "#1570EF" }}>Categories</h4>
              <div className="ml-1 mt-2">14</div>
              <div className="ml-1 mt-2">Last 7 days</div>
            </div>

            <div className="ml-4 border-r-4 border-blue-500 pr-4">
              <h4 style={{ color: "#E19133" }}>Total Products</h4>
              <div className="flex justify-between items-center">
                <p className="ml-1 mt-2">868</p>
                <p className="ml-16 mt-2">25000</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="ml-1 mt-2">Last 7 days</p>
                <p className="ml-12 mt-2">Revenue</p>
              </div>
            </div>
            <div className="ml-4 border-r-4 border-blue-500 pr-4">
              <p style={{ color: "#845EBC" }}>Top Selling</p>
              <div className="flex justify-between items-center">
                <p className="ml-1 mt-2">5</p>
                <p className="ml-12 mt-2">$2500</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="ml-1 mt-2">Last 7 days</p>
                <p className="ml-12 mt-2">Cost</p>
              </div>
            </div>
            <div className="ml-4">
              <p style={{ color: "#F36960" }}> Low Stocks</p>
              <div className="flex justify-between items-center">
                <p className="ml-1 mt-2">12</p>
                <p className="ml-12 mt-2">2</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="ml-1 mt-2">Ordered</p>
                <p className="ml-12 mt-2">Not in stock</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white" style={{ marginTop: "10px" }}>
        <div className="flex justify-between items-center">
          <h2 style={{ color: "black", fontWeight: "bold" }} className="ml-3">
            Category
          </h2>

          <div className="mt-2">
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2">
              Add Category
            </button>
            <button className="bg-gray-300 text-gray-600 rounded-lg px-4 py-2">
              Download all
            </button>
          </div>
        </div>

        <div style={{ marginTop: "15px" }}>
          <table className="table table-compact w-full white-background ">
            <thead>
              <tr>
                {/* <th>Order ID</th> */}
                <th className="grey-bg">Category Name</th>
                <th className="grey-bg">Total Brands</th>
                <th className="grey-bg">Total Product</th>
                <th className="grey-bg">Images</th>
                <th className="grey-bg">Description</th>
                <th className="grey-bg">Action</th>
                {/* <th>Payment Status</th> */}
              </tr>
            </thead>

            <tbody>
              {currentItems.map((item, index) => (
                <tr
                  key={item.id}
                  onClick={handleDetail}
                  className="cursor-pointer border-b"
                >
                  <td className="px-2 py-2 border-b border-gray-300">
                    {item.category_name}
                  </td>
                  <td className="px-2 py-2 border-b border-gray-300">
                    {item.total_Brands}
                  </td>
                  <td className="px-2 py-2 border-b border-gray-300">
                    {item.total_product}
                  </td>
                  <td className="px-2 py-2 border-b border-gray-300">
                    <img src={item.image} alt={item.category_name} />
                  </td>
                  <td className="px-2 py-2 border-b border-gray-300">
                    {item.description}
                  </td>

                  <td
                    className=" px-2 py-2 border-b border-gray-300 mt-9 "
                    style={{ display: "flex", alignItems: "center"  }}
                  >
                    <a href=""className="mb-6 mr-4">
                      <img src="/Image/carbon_view.png" />
                    </a>
                    {/* The button to open modal */}
                    <a href="#editService" className="mb-6 mr-4">
                      <img src="/Image/Edit.png" />
                    </a>

                    {/* **********MODAL************ */}
                    <div className="modal" id="editService">
                      <div className="modal-box w-11/12 max-w-3xl">
                        {/**************INPUT TAGS**************/}
                        <h1 className="font-medium text-xl text-center">
                          Add New Items
                        </h1>
                        <div className="grid grid-cols-8 gap-x-6 gap-y-6 p-5 ">
                          <select className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] col-span-3 ">
                            <option value="">Catagory</option>
                            <option value="">Catagory 1</option>
                            <option value="">Catagory 2</option>
                            <option value="">Catagory 3</option>
                          </select>

                          <input
                            type="text"
                            placeholder="Enter Item Name"
                            className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] col-span-3 "
                          />
                          <input
                            type="text"
                            placeholder="Enter Price"
                            className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] col-span-2"
                          />
                          <div
                            type="file"
                            accept="image/*"
                            className="cursor-pointer border border-[#E97208] rounded-md col-span-8"
                          >
                            <input
                              type="file"
                              accept="image/*"
                              id="uploadImage"
                              hidden
                            />

                            <label
                              htmlFor="uploadImage"
                              className="flex justify-center my-2"
                            >
                              <FaCloudUploadAlt className="text-2xl mx-2"  />
                              <p>Upload Profile Image</p>
                            </label>
                          </div>

                          <textarea
                            type="text"
                            placeholder="Describe something about that item and ingredents......"
                            className="input input-bordered py-2 border-[#E97208] focus:ring-[#E97208] focus:border[#E97208]  w-full max-w-full col-span-8"
                          />
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
                            className="btn bg-[#E97208] hover:bg-[#E97208]"
                          >
                            Add Item
                          </a>
                        </div>
                      </div>
                    </div>

                    <img src="/Image/Delete.png" className="mb-6 mr-4" />
                  </td>
                </tr>
              ))}
            </tbody>

            {/* <td>
                {item.amount}
                {item.method}
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
                {item.payment}
              </td> */}
          </table>
        </div>

        <div
          className="mx-1"
          style={{ display: "flex", position: "fixed", bottom: 5, right: 20 }}
        >
          {/* Pagination buttons */}

          <button
            className="btn btn-sm hover:bg-[#1570EF] text-xs  rounded text-white bg-[#1570EF]"
            disabled={currentPage === 1}
            onClick={previousPage}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`btn btn-sm btn-outline hover:bg-[#1570EF] mx-2  text-black rounded  border-[#1570EF] ${
                currentPage === index + 1 ? "bg-[#1570EF] text-white" : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="btn btn-sm hover:bg-[#1570EF] text-xs  rounded text-white bg-[#1570EF]"
            disabled={currentPage === totalPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout(orders);

//Inventory  Page
