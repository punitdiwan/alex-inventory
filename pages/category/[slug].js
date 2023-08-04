import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";
import { getProducts } from "../../lib/appwrite";
import { useRouter } from "next/router";
import { Query } from "appwrite";
import Link from "next/link";

const Cakes = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { slug } = router.query;

  // ****GETTING PRODUCTS ****
  useEffect(() => {
    async function getProductHandler() {
      try {
        const response = await getProducts(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_COLL_PRODUCTS,
          [Query.equal("category", [slug])]
        );

        setProducts(response.documents);
      } catch (error) {
        console.log(error);
      }
    }
    getProductHandler();
  }, [slug]);

  const datac = {
    cardData: products,
  };

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
    <div className="sm:w-full h-screen pb-5 px-5">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/category">Category </Link>
          </li>
          <li>{slug}</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <h1 className="mb-3 mt-3 font-semibold text-xl text-[#E97208]">
          {slug}
        </h1>

        {/* The button to open modal */}
        {/* <div className=" flex justify-end -mb-5">
          <a
            href="#addService"
            className="btn btn-ghost border border-[#E97208] text-end"
          >
            + Add New Category
          </a>
        </div> */}
        {/* **********MODAL************ */}
        <div className="modal" id="addService">
          <div className="modal-box w-11/12 max-w-3xl">
            {/**************INPUT TAGS**************/}
            <h1 className="font-medium text-xl text-center">
              Add New Category
            </h1>
            <div className="grid grid-cols-6 gap-x-6 gap-y-6 p-5 ">
              <select className="input w-full max-w-xs  border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] col-span-3 ">
                <option value="">Catagory</option>
                <option value="">Category 1</option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
                <option value="">Category 4</option>
                <option value="">Category 5</option>
              </select>

              <div
                type="file"
                accept="image/*"
                className="cursor-pointer  border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] rounded-md col-span-6"
              >
                <input type="file" accept="image/*" id="uploadImage" hidden />

                <label
                  htmlFor="uploadImage"
                  className="flex justify-center my-2"
                >
                  <FaCloudUploadAlt className="text-2xl mx-2" />
                  <p>Upload Profile Image</p>
                </label>
              </div>

              <textarea
                type="text"
                placeholder="Describe something about service......"
                className="input input-bordered py-2  border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208]  w-full max-w-full col-span-6"
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
                className="btn bg-[#E97208] hover:bg-[#E97208] border border-[#E97208] hover:border-[#E97208]"
              >
                Add Category
              </a>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-compact w-full z-0">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Image</th>
            <th>Details</th>
            <th>Item Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.length !== 0 &&
            currentItems.map((item, index) => (
              <tr key={item.$id}>
                <td>{item.full_name}</td>
                <td>
                  <img
                    src={item.img}
                    alt={item.full_name}
                    className="w-16 h-10"
                  />
                </td>
                <td>{item.desc}</td>
                <td>{item.price}</td>
                <td className="flex">
                  {/* The button to open modal */}
                  <a href="#editService">
                    <BiEdit className="text-2xl mx-2" color="green" />
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
                        <a
                          href="#"
                          className="btn bg-[#E97208] hover:bg-[#E97208]"
                        >
                          Add Item
                        </a>
                      </div>
                    </div>
                  </div>

                  <RiDeleteBin6Line className="text-2xl mx-2" color="red" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {currentItems.length === 0 && (
        <div className="text-lg font-semibold text-center mt-5">
          NO PRODUTCS FOUND!
        </div>
      )}

      <div
        className="mx-1"
        style={{ display: "flex", position: "fixed", bottom: 5, right: 20 }}
      >
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
    </div>
  );
};

export default Layout(Cakes);
