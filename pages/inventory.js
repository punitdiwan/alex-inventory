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
import { LuShoppingBag} from "react-icons/lu";
import { GiSellCard } from "react-icons/gi";
import { BiShow } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";



//Inventory Page

const inventory = () => {
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
      style={{ background: "white" }}>
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

               <div className="flex flex-row ml-[15px] mt-[20px]"> <BiCategory className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden "
                      style={{ color: "#629FF4" }}/>
                <h4 style={{ color: "black" }} className="text-3xl font-bold mt-[5px] ml-[15px]">Categories</h4> </div>
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
                <LuShoppingBag className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden "
                      style={{ color: "#E19133" }}/>
                <h4 style={{ color: "black" }} className="text-3xl font-bold mt-[5px] ml-[15px]">Total Products</h4> </div>
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
          <div className="mt-[15px]" >
            <Link href="/topselling">
              <div className="cursor-pointer border-2 ml-[-1px] ms:w-[341px] ms:h-[200px]">
              <div className="flex flex-row ml-[15px] mt-[20px]">
                <GiSellCard className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden "
                      style={{ color: "#845EBC" }}/>
                <h4 style={{ color: "black" }} className="text-3xl font-bold mt-[5px] ml-[15px]">Top Selling</h4> </div>
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
            <Link href="lowstock">
              <div className="border-2 ms:w-[341px] ms:h-[200px] ml-[15px] cursor-pointer">
              <div className="flex flex-row ml-[15px] mt-[20px]">
                <MdOutlineLowPriority className="ms:w-[80px] ms:h-[80px]  lg:hidden md:hidden "
                      style={{ color: "#F36960" }}/>
                <h4 style={{ color: "black" }} className=" text-3xl font-bold mt-[5px] ml-[15px]"> Low Stocks</h4> </div>
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

      <div className="bg-white ms:mt-[20px] md:mt-[10px]" >
        <div className="flex justify-between items-center">
          <h2 style={{ color: "black", fontWeight: "bold" }} className="ml-3
          ms:text-4xl 
          md:text-xl
          lg:text-xl
          ">
            Category
          </h2>

          <div className="mt-2">
            <a href="#addProduct">
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2  ms:text-2xl 
          md:text-sm ms:font-bold md:font-normal">
              Add Category
            </button>
            </a>
            <button className="bg-gray-300 text-gray-600 rounded-lg px-4 py-2  ms:text-2xl 
          md:text-sm  ms:font-bold md:font-normal">
              Download all
            </button>
          </div>
        </div>

        <section className="border-2 ms:mt-[10px] md:border-none ms:max-h-[790px] ms:max-w-[700px] md:max-h-[550px] md:max-w-[1200px] ms:overflow-y-auto md:overflow-y-auto lg:scrollbar-hide">
          
         <table className="table table-compact w-full  employeeTable  ">
          
          <thead>
            <tr>
              {/* <th>S.No.</th> */}
              <th 
              className="ms:font-extrabold text-2xl md:text-sm lg:text-sm"
              >Category Name</th>
              <th  className=" ms:font-extrabold text-2xl md:text-sm lg:text-sm">Total Brands</th>
              <th  className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Total Product</th>
              <th  className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Images</th>
              <th  className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Description</th>

              <th className="ms:font-extrabold text-2xl md:text-sm lg:text-sm lg:font-extrabold">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id}>
                {/* <th>{item.id}</th> */}
                <th>
                  <div style={{ display: "flex" }} className="ms:text-xl ms:font-bold md:text-sm md:font-normal">{item.category_name}</div>
                </th>
                <td className="cursor-pointer">
                  <div style={{ display: "flex",color:"black" }} className="ms:text-xl ms:font-bold md:text-sm md:font-normal">{item.total_Brands}</div>
                </td>
                <td style={{color:"black"}} className=" ms:text-xl ms:font-bold md:text-sm md:font-normal">{item.total_product}</td>
                <td>
                  <img src={item.image} />
                </td>
                <td style={{color:"black"}} className=" ms:text-xl ms:font-bold md:text-sm md:font-normal">{item.description}</td>
                
                <td className="flex">
                  <a href="#emp_Profile">
                    <BiShow style={{color:"#002054"}}
                      className="  ms:w-[80px] ms:h-[50px] md:w-[] md:h-[] lg:w-[90px] lg:h-[20px]"
                    />
                  </a>
                  <a href="#emp_Profile">
                    <BiSolidEdit
                      className=" text-green-600   ms:w-[80px] ms:h-[50px] lg:w-[90px] lg:h-[20px]"
                    />
                  </a>
                  <Link href={"#"}>
                    <MdOutlineDeleteOutline
                      className=" text-red-500  ms:w-[80px] ms:h-[50px] lg:w-[90px] lg:h-[20px]"
                    />
                  </Link>
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
            <div style={{display:"flex",marginTop:"-10px"}}>
              <div style={{marginLeft:"160px"}}>
            <a
              href="#" 
              className="btn border-0 hover:border hover:border-[#858D9D] bg-[#858D9D] hover:bg-[#858D9D] "
            >
              Discard
            </a>
            </div>
            <div style={{marginLeft:"20px"}}>
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
      
    </div>
  );
};

export default Layout(inventory);

//Inventory  Page
