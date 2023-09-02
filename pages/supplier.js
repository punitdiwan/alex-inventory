import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { FiFilter } from "react-icons/fi";
import Link from "next/link";
import { BiFilter } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const supplier = () => {
  
  const Menus = [
    { label: "In-stock", url: "/" },
    { label: "Low stock", url: "/" },
    { label: "Out of stock", url: "/" },
  ];


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

  const [open, setOpen] = useState(false);

  return (
    <div className="sm:w-full h-screen pb-5 px-5">
        <div className="lg:block md:block ms:hidden sm:hidden">
      <div className="flex flex-row justify-between">
        <div className="text-xl font-bold ml-3">Supplier</div>
        
        <div className="flex space-x-2">
          {/** button to open suppplier */}
          <a href="#addsupplier">
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2">
              Add Supplier
            </button>{" "}
          </a>
          <div className="relative ml-4">
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer btn border-0 hover:border hover:border-[grey] hover:bg-white hover:text-[#1366D9] fiterIcon"
            >
              <BiFilter className="" />
              Filters
            </div>

            {open && (
              <div
               
                className="bg-white p-4 w-52 shadow-lg absolute top-full right-0 mt-2 z-10"
              >
                <ul>
                  {Menus.map((menu) => (
                    <li
                      onClick={() => setOpen(false)}
                      className="p-2 text-lg cursor-pointer rounded hover:bg-blue-200"
                      key={menu.label}
                    >
                      <Link href={menu.url}>{menu.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button className="bg-gray-300 text-gray-600 rounded-lg px-4 py-2">
            <i className="fas fa-download mr-2"></i>
            Download all
          </button>
        </div>
      </div>
      </div>

       <div className="md:hidden lg:hidden">
        <div className="flex items-center ">
        <div>
          <div className="flex items-center">
          <div className="mr-3 ms:text-4xl font-bold underline">Suppliers</div>         
           </div>
        </div>
       </div>
        <div className="mt-[55px]">
        <div className="flex flex-row justify-end">
          {/** button to open suppplier */}
          <a href="#addsupplier">
            <button className="btn border-0 hover:border hover:border-[#1366D9] bg-[#1366D9] hover:bg-white hover:text-[#1366D9] ">
              Add Supplier
            </button>
          </a>
          <div className="relative ml-4">
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer btn border-0 hover:border hover:border-[grey] hover:bg-white hover:text-[#1366D9] fiterIcon"
            >
              <BiFilter className="" />
              Filters
            </div>

            {open && (
              <div
               
                className="bg-white p-4 w-52 shadow-lg absolute top-full right-0 mt-2 z-10"
              >
                <ul>
                  {Menus.map((menu) => (
                    <li
                      onClick={() => setOpen(false)}
                      className="p-2 text-lg cursor-pointer rounded hover:bg-blue-200"
                      key={menu.label}
                    >
                      <Link href={menu.url}>{menu.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button className="bg-gray-300 text-gray-600 rounded-lg px-4 py-2">
            <i className="fas fa-download mr-2"></i>
            Download all
          </button>
        </div>
      </div>  
      </div>

      {/* **********MODAL************ */}
      {/* **********MODAL***** for  Create New Order ******* */}

      <div
        className="modal fixed inset-0 flex items-center justify-center"
        id="addsupplier"
      >
        <div className="modal-box max-w-[600px] min-h-[580px] ">
          <div
            style={{ display: "flex", marginLeft: "20px", marginTop: "5px" }}
            className="text-xl font-semibold mr-4"
          >
            New Supplier
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
                style={{ marginTop: "20px", marginLeft: "27px" }}
              >
                Supplier Name
              </div>
              <input
                type="text"
                placeholder="enter a supplier"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{
                  marginTop: "10px",
                  marginLeft: "65px",
                  borderColor: "grey",
                }}
              />
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "20px", marginLeft: "27px" }}>
                Supplier Brand
              </div>
              <input
                type="text"
                placeholder=" enter supplier brand "
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{
                  marginTop: "10px",
                  marginLeft: "63px",
                  borderColor: "grey",
                }}
              />
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "20px", marginLeft: "27px" }}>
                Phone No.
              </div>
              <input
                type="number"
                placeholder="854697123"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{
                  marginTop: "10px",
                  marginLeft: "95px",
                  borderColor: "grey",
                }}
              />
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "20px", marginLeft: "27px" }}>
                Email Id
              </div>
              <input
                type="text"
                placeholder="example@gmai.com"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{
                  marginTop: "10px",
                  marginLeft: "114px",
                  borderColor: "grey",
                }}
              />
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "20px", marginLeft: "27px" }}>
                Country
              </div>
              <input
                type="text"
                placeholder="Select Brand Category"
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
          <a href="#" className="btn btn-success btn-circle btn-ghost absolute right-2 top-2">
            <AiFillCloseCircle style={{width:"30px",height:"30px",color:"#1570EF"}} className=""/>
            </a>
            <div style={{display:"flex",marginTop:"10px"}}>
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
              Add Supplier
            </a>
            </div>
            </div>
          </div>
        </div>
      </div>

      <section className="border-2 ms:mt-[50px] md:border-none ms:max-h-[990px] ms:max-w-[700px] md:max-h-[550px] md:max-w-[1200px] ms:overflow-y-auto md:overflow-y-auto lg:scrollbar-hide">
          <table className="table table-compact w-full  employeeTable ms:mt-[-5px] ">
            <thead className="">
          <tr>
            {/* <th>S.No.</th> */}
            <th
                  style={{ textAlign: "center" }}
                  className="ms:py-4 ms:text-3xl ms:font-bold ms:text-white ms:bg-gray-600 text-2xl md:text-sm lg:py-[15px] lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Supplier Name
                  </th>
                  <th
                  style={{ textAlign: "center" }}
                  className="ms:text-3xl ms:font-bold  ms:text-white ms:bg-gray-600 ms:rounded-md text-2xl md:text-sm lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Supplier Brand
                  </th>
                  <th
                  style={{ textAlign: "center" }}
                  className="ms:text-3xl ms:font-bold  ms:text-white ms:bg-gray-600 ms:rounded-md text-2xl md:text-sm lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Phone No.
                  </th>
                  <th
                  style={{ textAlign: "center" }}
                  className="ms:text-3xl ms:font-bold  ms:text-white ms:bg-gray-600 ms:rounded-md text-2xl md:text-sm lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Email Id
                  </th>
                  <th
                  style={{ textAlign: "center" }}
                  className="ms:text-3xl ms:font-bold  ms:text-white ms:bg-gray-600 ms:rounded-md text-2xl md:text-sm lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Country
                  </th>
                  <th
                  style={{ textAlign: "center" }}
                  className="ms:text-3xl ms:font-bold  ms:text-white ms:bg-gray-600 ms:rounded-md text-2xl md:text-sm lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Last Purchasing Date
                   </th>
                   <th
                  style={{ textAlign: "center" }}
                  className="ms:text-3xl ms:font-bold  ms:text-white ms:bg-gray-600 ms:rounded-md text-2xl md:text-sm lg:text-sm lg:bg-gray-600 lg:text-white"
                >
                  Action
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
              {/* <th>{item.id}</th> */}
              <th
                    style={{ textAlign: "center", background: "none" }}
                    className={` ms:text-3xl  lg:text-sm ms:py-[45px] lg:py-[14px]`}
                    
                  >
                <div style={{display:"flex"}} >
                <img src="/Image/empl.png" style={{marginRight:'5px'}}/>
                {item.supplier_name}
                </div>
                </th>
                <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >
                  {item.supplier_brand}</td>
              <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >
                    {item.phone_no}
                    </td>
                    <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >
                    {item.email_id}
                    </td>
                    <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >
                    {item.country}
                    </td>
                    <td
                    style={{ textAlign: "center", background: "none" }}
                    className="  ms:text-3xl  lg:text-sm"
                  >
                    {item.last_purchasing_date}
                    
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      background: "none",
                      borderBottom: "none",
                    }}
                    className="flex justify-center items-center ms:mt-[35px]"
                  >
                <a href="#emp_Profile">
                  <img src="/Image/carbon_view.png" className="text-3xl text-green-600 me-1" />
                </a>

                <a href="#emp_Profile">
                  <img src="/Image/Edit.png" className="text-3xl text-green-600 me-1" />
                </a>
                <Link href={"#"}>
                  <img src="/Image/Delete.png" className="text-3xl text-red-500 ms-1" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </section>
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

       {/* **********MODAL***** for  Employee Profile ******* */}

       <div className="modal fixed inset-0 flex items-center justify-center" id="emp_Profile">
        <div className="modal-box max-w-[1120px] min-h-[500px] ">
          <div style={{ display: 'flex', marginLeft: '50px', marginTop: '5px' }} className="text-xl font-semibold mr-4">Suppliers <FaGreaterThan className="mt-1 ml-2 mr-2" />Profile</div>
          {/**************INPUT TAGS**************/}
          <div style={{
              display: 'flex', marginTop: '15px',
              marginLeft: '240px', marginBottom: '5px'
            }}>
          
            <img src="/Image/EmpLogo.png" />
            <div>
            <div  style={{ marginLeft: '10px', marginTop: '10px' }}> <p>John Copper</p></div>
            <div  style={{ marginLeft: '10px', marginTop: '10px' }}> <p>employee@example.com</p></div>
            </div>
            
          </div>
  
          <div className="grid grid-cols-3 gap-x-5 gap-y-2">
            <div className="" style={{ marginLeft: '10px' }}>
              <p className="mb-2 ">Supplier Name</p>
              <input
                type="text"
                placeholder="John Cooper"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '10px' }}>
              <p className="mb-2">Brand Name</p>
              <input
                type="text"
                placeholder="Himalaya"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '10px' }}>
              <p className="mb-2">Contact no.</p>
              <input
                type="number"
                placeholder="+971 123 4577"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '10px' }}>
              <p className="mb-2">Country</p>
              <input
                type="text"
                placeholder="India"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>


            <div className="" style={{ marginLeft: '10px' }}>
              <p className="mb-2">Bank Name</p>
              <input
                type="text"
                placeholder="Punjab National Bank"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: '10px' }}>
              <p className="mb-2">Ifsc Code</p>
              <input
                type="text"
                placeholder="PUNB0404800"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: '10px' }}>
              <p className="mb-2">Account No.</p>
              <input
                type="text"
                placeholder="01245 0404 8004 4048"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: '10px' }}>
              <p className="mb-2">Last Purchase Date</p>
              <input
                type="date"
                placeholder="18/05/2023"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: '10px' }}>
              <p className="mb-2">Last Purchase  amount</p>
              <input
                type="number"
                placeholder="14,253"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: '10px' }}>
              <p className="mb-2">Payment Status</p>
              <input
                type="text"
                placeholder="Success"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: '10px' }}>
              <p className="mb-2">Payment Mode</p>
              <input
                type="text"
                placeholder="NEFT"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: '10px' }}>
              <p className="mb-2">Payment ID</p>
              <input
                type="text"
                placeholder="TC0125DB0123654123"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
          </div>
          <div className="modal-action flex justify-center">
          <a href="#" className="btn btn-success btn-circle btn-ghost absolute right-2 top-2">
            <AiFillCloseCircle style={{width:"30px",height:"30px",color:"#1570EF"}} className=""/>
            </a>
            <a
              href="#"
              className="btn border-0 hover:border hover:border-[#1570EF] bg-[#1570EF] hover:bg-[#1570EF]"
            >
              Save
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout(supplier);
