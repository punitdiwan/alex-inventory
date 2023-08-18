import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { BiFilter } from "react-icons/bi";

import { FaGreaterThan } from "react-icons/fa";

import Link from "next/link";




const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled)

  const callback = () => {
    toggle(!isToggled)
    onClick(!isToggled)
  }

  return (
    <label className="labeltoggle">
      <input type="checkbox" defaultChecked={isToggled} onClick={callback} className="inputtoggle" />
      <span className="spantoggle" />
      {/* <strong className="strongtoggle">{label}</strong> */}
    </label>
  )
}




const report = () => {


  const Menus = [
    { label: "My Orders", url: "/report" },
    { label: "Today Sales", url: "/todaysale" },
    { label: "Total Revenue", url: "/totalrevenue" },
  ];


  const router = useRouter();

  const datac = {
    cardData: [
      {
        id: "1",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "2",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "3",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "4",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "5",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "6",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "7",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "8",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "9",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "10",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "11",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "12",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "13",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "14",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "15",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },
      {
        id: "16",
        productname: "Forest Essentials",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        quantity: "43 Packets",
        buyingprice: "₹ 130",
        totalprice: "₹ 6,200",
        totaldue: '₹ 00',
        paymentstaus: 'Confirm',
        action: ' ',
      },

    ],
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);

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


  const logState = state => {
    console.log("Toggled:", state)
  }

  const [open, setOpen] = useState(false);


  const menuRef = useRef();
  const imgRef = useRef();



  return (

    <div className=" sm:w-full h-screen pb-5 px-5 employeeButton">


      {/* The button to open modal */}
      <div className="lg:block md:block ms:hidden sm:hidden">
      <div className="flex items-center justify-between ">
        <div >
          <div style={{ display: 'flex' }} className="text-xl font-bold">
            <div> <h2>Reports </h2> </div> 
             <div> <FaGreaterThan className=" mt-1 ml-3 mr-3" /> </div>
            <div><h2>My Orders</h2>  </div> 
          </div>
        </div>
      
        <div className="flex">
          <div >
            <a href="#create_order"
              className="btn border-0 hover:border hover:border-[#1366D9] bg-[#1366D9] hover:bg-white hover:text-[#1366D9]"
            >
              Create new Order
            </a>
          </div>
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
                ref={menuRef}
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
          <div className="ml-4">
            <a
              href=""
              className="btn border-0 hover:border hover:border-[#1366D9] bg-[#1366D9] hover:bg-white hover:text-[#1366D9]"
            >
              Download all
            </a>
          </div>
        </div>
      </div>
      </div>

      <div className="md:hidden lg:hidden">
        <div className="flex items-center ">
        <div>
          <div className="flex items-center">
          <div className="mr-3 ms:text-4xl font-bold underline">Report</div>
          <div>
            <FaGreaterThan className="mt-1 ml-3 mr-3 ms:text-3xl font-bold " />
          </div>
          <div className="ms:text-4xl font-bold underline" >My Orders</div>
           </div>
        </div>
       </div>
        <div className="mt-[55px]">
       <div className="flex flex-row justify-end ">
          <div >
            <a href="#create_order"
              className="btn border-0 hover:border hover:border-[#1366D9] bg-[#1366D9] hover:bg-white hover:text-[#1366D9] "
            >
              Create new Order
            </a>
          </div>
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
                ref={menuRef}
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
          <div className="ml-4">
            <a
              href=""
              className="btn border-0 hover:border hover:border-[#1366D9] bg-[#1366D9] hover:bg-white hover:text-[#1366D9]"
            >
              Download all
            </a>
          </div>
      </div>
      </div>  
      </div>

      <section className="border-2 ms:mt-[50px] md:border-none ms:max-h-[990px] ms:max-w-[700px] md:max-h-[550px] md:max-w-[1200px] ms:overflow-y-auto md:overflow-y-auto lg:scrollbar-hide">
      <table className="table table-compact w-full  employeeTable ms:mt-[-5px] ">

        <thead>
          <tr>
            {/* <th>S.No.</th> */}
            <th className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Product Name</th>
            <th className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Brand Name</th>
            <th className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Category</th>
            <th className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Supplier Name</th>
            <th className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Quantity</th>
            <th className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Buying Price</th>
            <th className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Total Price</th>
            <th className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Total Due</th>
            <th className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Payment Status</th>
            <th className="ms:font-extrabold text-2xl md:text-sm lg:text-sm">Action</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item, index) => (
            <tr key={item.id}>
              {/* <th>{item.id}</th> */}
              <th className="ms:font-extrabold text-2xl md:text-sm lg:text-sm
              ms:py-[55px]
              ">{item.productname}</th>
              <td className="cursor-pointer">{item.brandname}</td>
              <td className="cursor-pointer ms:text-xl ms:font-bold md:text-sm md:font-normal ">{item.category}</td>
              <td className="cursor-pointer ms:text-xl ms:font-bold md:text-sm md:font-normal ">{item.suppliername}</td>
              <td className="cursor-pointer ms:text-xl ms:font-bold md:text-sm md:font-normal ">{item.quantity}</td>
              <td className="cursor-pointer ms:text-xl ms:font-bold md:text-sm md:font-normal ">{item.buyingprice}</td>
              <td className="cursor-pointer ms:text-xl ms:font-bold md:text-sm md:font-normal " >{item.totalprice}</td>
              <td className="cursor-pointer ms:text-xl ms:font-bold md:text-sm md:font-normal " >{item.totaldue}</td>
              <td style={{ color: "#10A760" }} className="cursor-pointer ms:text-xl ms:font-bold md:text-sm md:font-normal ">{item.paymentstaus}</td>

              <td class="flex">
                <button className="bg-[#1570EF] text-white border border-blue-700 rounded px-4 py-2">
                  Pay now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
       </table>
      </section>
      <div
        className="mx-1 ms:mt-[55px]"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          bottom: 5,
          right: 20,
        }}  >
        {/* Pagination buttons */}

        <button
          className="btn btn-sm hover:bg-[#1366D9] text-xs border rounded text-white bg-[#1366D9]"
          disabled={currentPage === 1}
          onClick={previousPage}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`btn btn-sm btn-outline hover:bg-[#1366D9] mx-2  text-black rounded border border-[#1366D9] ${currentPage === index + 1 ? "bg-[#1366D9] text-white" : ""
              }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="btn btn-sm hover:bg-[#1366D9] text-xs border rounded text-white bg-[#1366D9]"
          disabled={currentPage === totalPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      {/* **********MODAL***** for  AddEmployee ******* */}

      <div className="modal fixed inset-0 flex items-center justify-center" id="my_modal_8">
        <div className="modal-box max-w-[1120px] min-h-[700px] ">
          <div style={{ display: 'flex', marginLeft: '50px', marginTop: '5px' }} className="text-xl font-semibold mr-4">Employee <FaGreaterThan className="mt-1 ml-2 mr-2" /> Add New Employee</div>
          {/**************INPUT TAGS**************/}
          <div type="file"
            accept="image/*" style={{
              display: 'flex', marginTop: '15px',
              marginLeft: '240px', marginBottom: '5px'
            }} className="cursor-pointer ">
            <input type="file" accept="image/*" id="uploadImage" hidden />
            <img src="/Image/EmployeeLogo.png" />
            <label htmlFor="uploadImage" style={{ marginLeft: '10px', marginTop: '10px' }}> <p className="cursor-pointer" >Upload Profile Image</p></label>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-2">
            <div className="" style={{ marginLeft: '250px' }}>
              <p className="mb-2 ">User ID</p>
              <input
                type="text"
                placeholder="#124567"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '50px' }}>
              <p className="mb-2">Full Name</p>
              <input
                type="text"
                placeholder="John Cooper"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '250px' }}>
              <p className="mb-2">Email</p>
              <input
                type="email"
                placeholder="johncopper@example.com"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '50px' }}>
              <p className="mb-2">Contact No.</p>
              <input
                type="text"
                placeholder="+971 123 4577"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>


            <div className="" style={{ marginLeft: '250px' }}>
              <p className="mb-2">Address</p>
              <input
                type="text"
                placeholder="Sheikh Mohammed Bin Rashed 
                Boulevard Downtown Dubai,"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: '50px' }}>
              <p className="mb-2">Password</p>
              <input
                type="password"
                placeholder="********"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>


            <div style={{ marginLeft: '180px' }}>
              <table className="table table-compact w-full z-0 employeeTable" style={{ width: '900px' }}>

                <thead>
                  <tr>
                    <th>Permissions</th>
                    <th>View</th>
                    <th>Add</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>permission1</td>
                    <td > <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />View </td>
                    <td> <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />Add</td>
                    <td> <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />Edit</td>
                    <td> <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />Delete</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
              className="btn border-0 hover:border hover:border-[#1570EF] bg-[#1570EF] hover:bg-[#1570EF]"
            >
              Add Employee
            </a>
          </div>
        </div>
      </div>

      {/**End the modal of add employee  */}



      {/* **********MODAL***** for  Create New Order ******* */}

      <div className="modal fixed inset-0 flex items-center justify-center" id="create_order">
        <div className="modal-box max-w-[600px] min-h-[650px] ">
          <div style={{ display: 'flex', marginLeft: '50px', marginTop: '5px' }} className="text-xl font-semibold mr-4">Create New Order</div>
          {/**************INPUT TAGS**************/}


          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex' }} >
              <div className="mb-2 text-bold " style={{ marginTop: "20px", marginLeft: "47px" }}>Supplier Name</div>
              <input
                type="text"
                placeholder="Supplier 1"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{ marginTop: '10px', marginLeft: "65px", borderColor: "grey" }} />
            </div>

            <div style={{ display: 'flex' }}>
              <div style={{ marginTop: "20px", marginLeft: "47px" }}>Brand Name</div>
              <input
                type="text"
                placeholder="Himalaya"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{ marginTop: '10px', marginLeft: "80px", borderColor: "grey" }} />
            </div>

            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "20px", marginLeft: "47px" }}>Category</div>
              <input
                type="email"
                placeholder="Face"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{ marginTop: '10px', marginLeft: "103px", borderColor: "grey" }} />
            </div>

            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "20px", marginLeft: "47px" }}>Supplier</div>
              <input
                type="text"
                placeholder="Supplier1"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{ marginTop: '10px', marginLeft: "111px", borderColor: "grey" }} />
            </div>


            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "20px", marginLeft: "47px" }}>Quantity</div>
              <input
                type="text"
                placeholder="43  Packets"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{ marginTop: '10px', marginLeft: "110px", borderColor: "grey" }} />
            </div>
            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "20px", marginLeft: "47px" }}>Buying Price</div>
              <input
                type="password"
                placeholder="₹ 240"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{ marginTop: '10px', marginLeft: "81px", borderColor: "grey" }} />
            </div>

            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "20px", marginLeft: "47px" }}>Order Date</div>
              <input
                type="date"
                placeholder="18/05/23"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{ marginTop: '10px', marginLeft: "93px", borderColor: "grey" }} />
            </div>
            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "20px", marginLeft: "47px" }}>Total Price</div>
              <input
                type="text"
                placeholder="14,253"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
                style={{ marginTop: '10px', marginLeft: "93px", borderColor: "grey" }} />
            </div>


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
              className="btn border-0 hover:border hover:border-[#858D9D] bg-[#858D9D] hover:bg-[#858D9D]"
            >
              Discard
            </a>
            <a
              href="#"
              className="btn border-0 hover:border hover:border-[#1570EF] bg-[#1570EF] hover:bg-[#1570EF]"
            >
              Place Order
            </a>
          </div>
        </div>
      </div>




      {/* **********MODAL***** for  Employee Profile ******* */}

      <div className="modal fixed inset-0 flex items-center justify-center" id="emp_Profile">
        <div className="modal-box max-w-[1120px] min-h-[700px] ">
          <div style={{ display: 'flex', marginLeft: '50px', marginTop: '5px' }} className="text-xl font-semibold mr-4">Employee <FaGreaterThan className="mt-1 ml-2 mr-2" />Profile</div>
          {/**************INPUT TAGS**************/}
          <div style={{
            display: 'flex', marginTop: '15px',
            marginLeft: '240px', marginBottom: '5px'
          }}>

            <img src="/Image/EmpLogo.png" />
            <div>
              <div style={{ marginLeft: '10px', marginTop: '10px' }}> <p>John Copper</p></div>
              <div style={{ marginLeft: '10px', marginTop: '10px' }}> <p>employee@example.com</p></div>
            </div>

          </div>
          {/* 
          <div
            type="file"
            accept="image/*"
            className="cursor-pointer "
          >
            <input type="file" accept="image/*" id="uploadImage" hidden />

            <label htmlFor="uploadImage" className="flex justify-center my-2">

              <p>Upload Profile Image</p>
            </label>
          </div> */}



          <div className="grid grid-cols-2 gap-x-5 gap-y-2">
            <div className="" style={{ marginLeft: '250px' }}>
              <p className="mb-2 ">User ID</p>
              <input
                type="text"
                placeholder="#124567"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '50px' }}>
              <p className="mb-2">Full Name</p>
              <input
                type="text"
                placeholder="John Cooper"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '250px' }}>
              <p className="mb-2">Email</p>
              <input
                type="email"
                placeholder="johncopper@example.com"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: '50px' }}>
              <p className="mb-2">Contact No.</p>
              <input
                type="text"
                placeholder="+971 123 4577"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            {/* <div className="">
              <p className="mb-2">Date of Birth</p>
              <input
                type="date"
                className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] "
              />
            </div> */}

            {/* <div className="">
              <p className="mb-2">Gender</p>
              <select className="input w-full max-w-xs border border-[#E97208] focus:ring-[#E97208] focus:ring-2 focus:border-[#E97208] ">
                <option value="">Male</option>
                <option value="">Famale</option>
              </select>
            </div> */}

            <div className="" style={{ marginLeft: '250px' }}>
              <p className="mb-2">Address</p>
              <input
                type="text"
                placeholder="Sheikh Mohammed Bin Rashed 
                Boulevard Downtown Dubai,"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: '50px' }}>
              <p className="mb-2">Password</p>
              <input
                type="password"
                placeholder="********"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            {/* <div
              type="file"
              accept="image/*"
              className="cursor-pointer "
             >
              <input type="file" accept="image/*" id="uploadImage" hidden />

              <label htmlFor="uploadImage" className="flex justify-center my-2">

                <p>Upload Profile Image</p>
              </label>
            </div> */}
            <div style={{ marginLeft: '180px' }}>
              <table className="table table-compact w-full z-0 employeeTable" style={{ width: '900px' }}>

                <thead>
                  <tr>
                    <th>Permissions</th>
                    <th>View</th>
                    <th>Add</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>permission1</td>
                    <td > <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />View </td>
                    <td> <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />Add</td>
                    <td> <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />Edit</td>
                    <td> <Toggle
                      label="Toggle me"
                      toggled={true}
                      onClick={logState}
                    />Delete</td>
                  </tr>
                </tbody>
              </table>
            </div>
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

export default Layout(report);
