import { FiFilter } from "react-icons/fi";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineLowPriority } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { LuShoppingBag } from "react-icons/lu";
import { GiSellCard } from "react-icons/gi";

//Inventory Page

const totalproducts = () => {
  const router = useRouter();

  const datac = {
    cardData: [
      {
        id: "1",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "2",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "3",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "4",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "5",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "6",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "7",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "8",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "9",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "10",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "11",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "12",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "13",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "14",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "15",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "16",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "17",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "18",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "19",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "20",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
      },
      {
        id: "21",
        image: "/Image/cate_image.jpg",
        product_name: "soul flower",
        category_name:"Face Products",
        cost_price:"25",
        selling_price:"40",
        quantity:"43 packates",
        avalibility:"in-stock"
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
      style={{ background: "white" }}
    >
      {/**for mobile device */}

      <div className="ms:block lg:hidden md:hidden sm:hidden">
        <h3 class="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-white text-4xl font-medium">
          Overall Inventory
        </h3>

        <div className="  mt-[50px]">
          <div className="flex flex-row">
            <div>
              <Link href="/inventory">
                <div className="cursor-pointer border-2 ml-[-1px] ms:w-[341px] ms:h-[200px]">
                  <div className="flex flex-row ml-[15px] mt-[20px]">
                    {" "}
                    <BiCategory
                      className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden "
                      style={{ color: "#629FF4" }}
                    />
                    <h4
                      style={{ color: "black" }}
                      className="text-3xl font-bold mt-[5px] ml-[15px]"
                    >
                      Categories
                    </h4>{" "}
                  </div>
                  <div className="ml-[110px] mt-[-25px]">
                    <div className="ml-1 mt-2 text-4xl font-bold ">14</div>
                    <div className="ml-1 mt-2">Last 7 days</div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/totalproducts">
                <div className=" border-2 ms:w-[341px] ms:h-[200px] ml-[15px] cursor-pointer">
                  <div className="flex flex-row ml-[15px] mt-[20px]">
                    <LuShoppingBag
                      className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden "
                      style={{ color: "#E19133" }}
                    />
                    <h4
                      style={{ color: "black" }}
                      className="text-3xl font-bold mt-[5px] ml-[15px]"
                    >
                      Total Products
                    </h4>{" "}
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="ml-1 mt-2 text-4xl font-bold">868</p>
                    <p className="ml-16 mt-2 text-4xl font-bold">25000</p>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer">
                    <p className="ml-1 mt-2">Last 7 days</p>
                    <p className="ml-12 mt-2">Revenue</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mt-[15px]">
              <Link href="/topselling">
                <div className="cursor-pointer border-2 ml-[-1px] ms:w-[341px] ms:h-[200px]">
                  <div className="flex flex-row ml-[15px] mt-[20px]">
                    <GiSellCard
                      className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden "
                      style={{ color: "#845EBC" }}
                    />
                    <h4
                      style={{ color: "black" }}
                      className="text-3xl font-bold mt-[5px] ml-[15px]"
                    >
                      Top Selling
                    </h4>{" "}
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="ml-1 mt-2 text-4xl font-bold">5</p>
                    <p className="ml-1 mt-2 text-4xl font-bold">$2500</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="ml-1 mt-2">Last 7 days</p>
                    <p className="ml-12 mt-2">Cost</p>
                  </div>
                </div>
              </Link>{" "}
            </div>
            <div className="mt-[15px]">
              <Link href="/lowstock">
                <div className="border-2 ms:w-[341px] ms:h-[200px] ml-[15px] cursor-pointer">
                  <div className="flex flex-row ml-[15px] mt-[20px]">
                    <MdOutlineLowPriority
                      className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden "
                      style={{ color: "#F36960" }}
                    />
                    <h4
                      style={{ color: "black" }}
                      className=" text-3xl font-bold mt-[5px] ml-[15px]"
                    >
                      {" "}
                      Low Stocks
                    </h4>{" "}
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="ml-1 mt-2 text-4xl font-bold">12</p>
                    <p className="ml-16 mt-2 text-4xl font-bold">2</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="ml-1 mt-2">Ordered</p>
                    <p className="ml-12 mt-2">Not in stock</p>
                  </div>
                </div>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>

      {/**this section for Inventroy category */}
      <div className="flex flex-row justify-between top-8 ">
        <div
          className="bg-white rounded-lg p-4 ms:hidden lg:block md:block "
          style={{ width: "1150px", marginTop: "5px" }}
        >
          <h2 className="text-xl font-bold" style={{ color: "black" }}>
            Overall Inventory{" "}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 ">
            <Link href="/inventory">
              <div className="ml-4 border-r-4 border-blue-500 pr-4 cursor-pointer">
                <h4 style={{ color: "#1570EF" }}>Categories</h4>
                <div className="ml-1 mt-2">14</div>
                <div className="ml-1 mt-2">Last 7 days</div>
              </div>
            </Link>
            <Link href="/totalproducts">
              <div className="ml-4 border-r-4 border-blue-500 pr-4 cursor-pointer">
                <h4 style={{ color: "#E19133" }}>Total Products</h4>
                <div className="flex justify-between items-center">
                  <p className="ml-1 mt-2">868</p>
                  <p className="ml-16 mt-2">25000</p>
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                  <p className="ml-1 mt-2">Last 7 days</p>
                  <p className="ml-12 mt-2">Revenue</p>
                </div>
              </div>
            </Link>
            <Link href="/topselling">
              <div className="ml-4 border-r-4 border-blue-500 pr-4 cursor-pointer">
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
            </Link>
            <Link href="lowstock">
              <div className="ml-4 cursor-pointer">
                <p style={{ color: "#F36960" }}> Low Stocks</p>
                <div className="flex justify-between items-center ">
                  <p className="ml-1 mt-2">12</p>
                  <p className="ml-12 mt-2">2</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="ml-1 mt-2">Ordered</p>
                  <p className="ml-12 mt-2">Not in stock</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/**end the for Inventroy category */}

      <div className="bg-white ms:mt-[20px] md:mt-[10px]">
        <div className="flex justify-between items-center">
          <h2
            style={{ color: "black", fontWeight: "bold" }}
            className="ml-3
          ms:text-4xl 
          md:text-xl
          lg:text-xl
          "
          >
            Products
          </h2>

          <div className="mt-2">
          <a href="#addProduct">
            <button
              className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2  ms:text-2xl 
          md:text-sm ms:font-bold md:font-normal"
            >
              Add Product
            </button>
            </a>
            <button
              className="bg-gray-300 text-gray-600 rounded-lg px-4 py-2  ms:text-2xl 
          md:text-sm  ms:font-bold md:font-normal"
            >
              Download all
            </button>
          </div>
        </div>
        <section className="border-2 ms:mt-[50px] md:border-none ms:max-h-[990px] ms:max-w-[700px] md:max-h-[550px] md:max-w-[1200px] ms:overflow-y-auto md:overflow-y-auto lg:scrollbar-hide">
          <table className="table table-compact w-full  employeeTable ms:mt-[-5px] ">
            <thead className="">
              <tr>
                <th
                  style={{ textAlign: "center" }}
                  className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Products Image
                </th>
                <th
                  style={{ textAlign: "center" }}
                  className="ms:text-3xl ms:font-bold  ms:text-white ms:bg-gray-600 ms:rounded-md text-2xl md:text-sm lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Products Name
                </th>
                <th
                  style={{ textAlign: "center" }}
                  className="ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 ms:rounded-md text-2xl md:text-sm lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Category Name
                </th>
                <th
                  style={{ textAlign: "center" }}
                  className="ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 ms:rounded-md text-2xl md:text-sm lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Cost Price/Item
                </th>
                <th
                  style={{ textAlign: "center" }}
                  className="ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 ms:rounded-md text-2xl md:text-sm lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Selling Price/Item
                </th>
                <th
                  style={{ textAlign: "center" }}
                  className="ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 ms:rounded-md text-2xl md:text-sm lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Quantity
                </th>
                <th
                  style={{ textAlign: "center" }}
                  className="ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 ms:rounded-md text-2xl md:text-sm lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Availability
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
                  <th
                    style={{ textAlign: "center", background: "none" }}
                    className={` ms:text-3xl  lg:text-sm ms:py-[45px] lg:py-[14px]`}
                    
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img src={item.image} alt="Product Image" style={{}} />
                    </div>
                  </th>

                  <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >
                    {item.product_name}
                  </td>
                  <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >
                    {item.category_name}
                  </td>
                  <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >
                    {item.cost_price}
                  </td>
                  <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >
                    {item.selling_price}
                  </td>

                  <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >
                    {item.quantity}
                  </td>

                  <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm text-green-500"
                  >
                    {item.avalibility}
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </section>
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

      {/* **********MODAL************ */}

      <div
        className="modal fixed inset-0 flex items-center justify-center :overflow-y-auto "
        id="addProduct"
      >
        <div className="modal-box max-w-[650px] min-h-[590px] scrollable-area overflow-hidden">
          <div
            style={{ display: "flex", marginLeft: "20px", marginTop: "-5px" }}
            className="text-xl font-semibold mr-4"
          >
            New Product
          </div>
          {/**************INPUT TAGS**************/}

          <div
            type="file"
            accept="image/*"
            style={{
              display: "flex",
              marginTop: "15px",
              marginLeft: "170px",
              marginBottom: "5px",
            }}
            className="cursor-pointer "
          >
            <input type="file" accept="image/*" id="uploadImage" hidden />
            <img src="/Image/supplierLogo.png" />
            <label
              htmlFor="uploadImage"
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              {" "}
              <p className="cursor-pointer">Upload Profile Image</p>
            </label>
          </div>

          <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex" }}>
              <div
                className="mb-2 text-bold "
                style={{ marginTop: "15px", marginLeft: "27px" }}
              >
                Product Name
              </div>
              <input
                type="text"
                placeholder="Enter product name"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{
                  marginTop: "5px",
                  marginLeft: "95px",
                  borderColor: "grey",
                }}
              />
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "15px", marginLeft: "27px" }}>
                Category
              </div>
              <input
                type="text"
                placeholder="Select product category "
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{
                  marginTop: "10px",
                  marginLeft: "133px",
                  borderColor: "grey",
                }}
              />
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "20px", marginLeft: "27px" }}>
                Brand Name
              </div>
              <input
                type="text"
                placeholder="Himalaya"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{
                  marginTop: "10px",
                  marginLeft: "110px",
                  borderColor: "grey",
                }}
              />
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "20px", marginLeft: "27px" }}>
                Cost Price
              </div>
              <input
                type="text"
                placeholder="Enter buying price"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{
                  marginTop: "10px",
                  marginLeft: "126px",
                  borderColor: "grey",
                }}
              />
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "20px", marginLeft: "27px" }}>
                Quantity
              </div>
              <input
                type="text"
                placeholder="Enter product quantity"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{
                  marginTop: "10px",
                  marginLeft: "142px",
                  borderColor: "grey",
                }}
              />
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "20px", marginLeft: "27px" }}>
                Selling Price
              </div>
              <input
                type="text"
                placeholder="Enter product unit"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{
                  marginTop: "10px",
                  marginLeft: "114px",
                  borderColor: "grey",
                }}
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
            <div style={{ display: "flex", marginTop: "-10px" }}>
              <div style={{ marginLeft: "160px" }}>
                <a
                  href="#"
                  className="btn border-0 hover:border hover:border-[#858D9D] bg-[#858D9D] hover:bg-[#858D9D] "
                >
                  Discard
                </a>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <a
                  href="#"
                  className="btn border-0 hover:border hover:border-[#1570EF] bg-[#1570EF] hover:bg-[#1570EF]"
                >
                  Add Product
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  




      {/* **********MODAL************ */}
      <div className="modal" id="editService">
        <div className="modal-box w-11/12 max-w-3xl">
          {/**************INPUT TAGS**************/}
          <h1 className="font-medium text-xl text-center">Add New Items</h1>
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
              <input type="file" accept="image/*" id="uploadImage" hidden />

              <label htmlFor="uploadImage" className="flex justify-center my-2">
                <FaCloudUploadAlt className="text-2xl mx-2" />
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
            <a href="#" className="btn bg-[#E97208] hover:bg-[#E97208]">
              Add Item
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout(totalproducts);

//Inventory  Page
