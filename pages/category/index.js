import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";
import Link from "next/link";
import { getCategory, updateCategory } from "../../lib/appwrite";
import { useRouter } from "next/router";

const category = () => {
  const [category, setCategory] = useState([]);

  const router = useRouter();

  // ****UPDATING CATEGORY STATUS****
  async function catStatusChangeHandler({ catId, catStatus }) {
    try {
      const response = await updateCategory(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLL_CATEGORIES,
        catId,
        {
          status: !catStatus,
        }
      );
      console.log(response);
      // router.reload();
    } catch (error) {
      console.log(error.message);
    }
  }

  // ****GETTING CATEGORY ****
  useEffect(() => {
    async function getCategoryHandler() {
      try {
        const response = await getCategory(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_COLL_CATEGORIES
        );
        setCategory(response.documents);
        console.log("Category: ", response.documents[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getCategoryHandler();
  }, []);

  // ****ADDING NEW CATEGORY ****
  function addCategoryHandler(event) {
    event.preventDefault();
  }

  const datac = {
    cardData: category,
  };

  // {
  //   name: ,
  //   desc: ,
  //   status: ,
  // }

  // "unique()", {}

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
      <div className="flex justify-between">
        <h1 className="mb-3 mt-3 font-semibold text-xl">Category</h1>

        {/* The button to open modal */}
        <div className=" flex justify-end -mb-5">
          <a
            href="#addService"
            className="btn btn-ghost border hover:bg-[#E97208] hover:text-white border-[#E97208] text-end"
          >
            + Add New Category
          </a>
        </div>
        {/* **********MODAL************ */}
        <div className="modal" id="addService">
          <div className="modal-box max-w-3xl">
            {/**************INPUT TAGS**************/}
            <h1 className="text-xl text-center font-bold">Add New Category</h1>

            <form id="categoryAddForm" onSubmit={addCategoryHandler}>
              <div className="myInputsforNewCategory flex justify-center gap-2 mt-5">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Category Name:
                    </span>
                  </label>
                  <input
                    name="category_name"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    required
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text font-semibold">Details:</span>
                  </label>
                  <input
                    name="category_desc"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    required
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
                <button className="btn bg-[#E97208] hover:bg-[#E97208] border border-[#E97208] hover:border-[#E97208]">
                  + Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <table className="table table-compact w-full z-0">
        <thead>
          <tr>
            <th>Category</th>

            <th>Details</th>

            <th>Action</th>

            <th>ID</th>

            {/* <th>Disable/Enable</th> */}
          </tr>
        </thead>

        <tbody>
          {currentItems.map((cat) => (
            <tr key={cat.$id} className={!cat.status ? "text-gray-400" : ""}>
              <th>
                <Link disabled href={`/category/${cat.category_name}`}>
                  {cat.category_name}
                </Link>
              </th>
              {/* <td>
                <img
                  src={cat.image}
                  alt="Service Image"
                  className="w-16 h-10"
                />
              </td> */}
              <td>{cat.desc}</td>
              <td className="flex">
                {/* The button to open modal */}
                <a href="#editService">
                  <BiEdit
                    className="text-2xl mx-2 mt-3"
                    color={cat.status ? "green" : "gray"}
                  />
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

                <RiDeleteBin6Line
                  className="text-2xl mx-2 mt-3"
                  color={cat.status ? "red" : "gray"}
                />
              </td>
              <th>{cat.$id}</th>

              <th>
                <select
                  onChange={catStatusChangeHandler.bind(null, {
                    catId: cat.$id,
                    catStatus: cat.status,
                  })}
                  defaultValue={cat.status ? "enabled" : "disabled"}
                  className={`select select-bordered w-full max-w-xs ${
                    cat.status ? "border-green-600" : "border-red-600"
                  } `}
                >
                  <option value={cat.status ? "enabled" : "disabled"}>
                    {cat.status ? "enabled" : "disabled"}
                  </option>
                  <option value={cat.status ? "disabled" : "enabled"}>
                    {cat.status ? "disabled" : "enabled"}
                  </option>
                </select>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

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

export default Layout(category);
