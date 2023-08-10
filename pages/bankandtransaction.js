import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { BiFilter } from "react-icons/bi";

import { FaGreaterThan } from "react-icons/fa";

import Link from "next/link";

const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label className="labeltoggle">
      <input
        type="checkbox"
        defaultChecked={isToggled}
        onClick={callback}
        className="inputtoggle"
      />
      <span className="spantoggle" />
      {/* <strong className="strongtoggle">{label}</strong> */}
    </label>
  );
};

const bankandtransaction = () => {
  const Menus = [
    { label: "My Orders", url: "/report" },
    { label: "Today Sales", url: "/todaysale" },
    { label: "Total Revenue", url: "/totalrevenue" },
  ];

  //   const router = useRouter();

  const datac = {
    cardData: [
      {
        id: "1",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "2",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "3",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "4",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "5",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "6",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "7",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "8",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "9",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "10",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "11",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "12",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "13",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "14",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "15",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
      },
      {
        id: "16",
        transactionid: "TD12365412336",
        brandname: "Himalaya",
        category: "Face ",
        suppliername: "Supplier 1",
        orderdate: "20/06/23",
        paymentdate: "22/06/23",
        totalprice: "₹ 6,200",
        paymentstaus: "Confirm",
        action: " ",
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

  const logState = (state) => {
    console.log("Toggled:", state);
  };

  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const imgRef = useRef();

  return (
    <div className=" sm:w-full h-screen pb-5 px-5 employeeButton">
      {/* The button to open modal */}
      <div className="flex items-center justify-between">
        <div>
          <div style={{ display: "flex" }} className="text-xl font-bold">
            {" "}
            Setting <FaGreaterThan className=" mt-1 ml-3 mr-3" />
            My Bank & Transactions
          </div>{" "}
        </div>
      </div>

      <div style={{ display: "flex",marginTop:"20px" }}>
        <div
          class="bg-white border border-blue-500 rounded-lg p-4 flex items-center space-x-4  "
          style={{ width: "600px", height: "150px" }}
        >
          <div>
            <input type="radio" value={true} />
          </div>
          <div style={{ marginBottom: "70px", marginLeft: "50px" }}>
            <div>
              <img src="/Image/idfc.png" alt="IDFC Bank logo" />
            </div>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <div>IDFC Bank</div>
            <div>A/c : 12345678901</div>
            <div>IFSC : IDFB008901</div>
            <div>Type : Current Account</div>
          </div>
          <div class="flex space-x-2">
            <div style={{ marginLeft: "60px" }}>
              <img src="/Image/bankedit.png" alt="Edit" />
            </div>
            <div style={{ marginLeft: "30px" }}>
              <img src="/Image/bankdelete.png" alt="Delete" />
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "90px", marginTop: "60px" }}>
          <a
            href="#add_bank"
            className="btn border-0 hover:border hover:border-[#1366D9]
                         bg-[#1366D9] hover:bg-white hover:text-[#1366D9]"
          >
            + Add new Account
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between "style={{marginTop:"20px"}}>
        <div>
          <div style={{ display: "flex" }} className="text-xl font-bold">
          Transactions
          </div>
        </div>
        <div className="flex">
  <div className="ml-4">
    <a
      href=""
      className="btn border border-gray-300 hover:border-[#1366D9] bg-white 
                 hover:bg-[#1366D9] text-gray-500 hover:text-white"
    >
      Download all
    </a>
  </div>
</div>

      </div>

      <table className="table table-compact w-full z-0 employeeTable">
        <thead>
          <tr>
            {/* <th>S.No.</th> */}
            <th>Transaction ID</th>
            <th>Brand Name</th>
            <th>Category</th>
            <th>Supplier Name</th>
            <th>Order Date</th>
            <th>Payment Date</th>
            <th>Total Price</th>
            <th>Payment Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item, index) => (
            <tr key={item.id}>
              {/* <th>{item.id}</th> */}
              <th>{item.transactionid}</th>
              <td className="cursor-pointer">{item.brandname}</td>
              <td>{item.category}</td>
              <td>{item.suppliername}</td>
              <td>{item.orderdate}</td>
              <td>{item.paymentdate}</td>
              <td>{item.totalprice}</td>
              <td style={{ color: "#10A760" }}>{item.paymentstaus}</td>

              <td className="flex">
                <a href="#transactiondetails">
                  <img
                    src="/Image/carbon_view.png"
                    className="text-3xl text-green-600 me-1"
                  />
                </a>
                <Link href={"#"}>
                  <img
                    src="/Image/Delete.png"
                    className="text-3xl text-red-500 ms-1"
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="mx-1"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          bottom: 5,
          right: 20,
        }}
      >
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
            className={`btn btn-sm btn-outline hover:bg-[#1366D9] mx-2  text-black rounded border border-[#1366D9] ${
              currentPage === index + 1 ? "bg-[#1366D9] text-white" : ""
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

      <div
        className="modal fixed inset-0 flex items-center justify-center"
        id="my_modal_8"
      >
        <div className="modal-box max-w-[1120px] min-h-[700px] ">
          <div
            style={{ display: "flex", marginLeft: "50px", marginTop: "5px" }}
            className="text-xl font-semibold mr-4"
          >
            Employee <FaGreaterThan className="mt-1 ml-2 mr-2" /> Add New
            Employee
          </div>
          {/**************INPUT TAGS**************/}
          <div
            type="file"
            accept="image/*"
            style={{
              display: "flex",
              marginTop: "15px",
              marginLeft: "240px",
              marginBottom: "5px",
            }}
            className="cursor-pointer "
          >
            <input type="file" accept="image/*" id="uploadImage" hidden />
            <img src="/Image/EmployeeLogo.png" />
            <label
              htmlFor="uploadImage"
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              {" "}
              <p className="cursor-pointer">Upload Profile Image</p>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-2">
            <div className="" style={{ marginLeft: "250px" }}>
              <p className="mb-2 ">User ID</p>
              <input
                type="text"
                placeholder="#124567"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: "50px" }}>
              <p className="mb-2">Full Name</p>
              <input
                type="text"
                placeholder="John Cooper"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: "250px" }}>
              <p className="mb-2">Email</p>
              <input
                type="email"
                placeholder="johncopper@example.com"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: "50px" }}>
              <p className="mb-2">Contact No.</p>
              <input
                type="text"
                placeholder="+971 123 4577"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: "250px" }}>
              <p className="mb-2">Address</p>
              <input
                type="text"
                placeholder="Sheikh Mohammed Bin Rashed 
                    Boulevard Downtown Dubai,"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: "50px" }}>
              <p className="mb-2">Password</p>
              <input
                type="password"
                placeholder="********"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div style={{ marginLeft: "180px" }}>
              <table
                className="table table-compact w-full z-0 employeeTable"
                style={{ width: "900px" }}
              >
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
                    <td>
                      {" "}
                      <Toggle
                        label="Toggle me"
                        toggled={true}
                        onClick={logState}
                      />
                      View{" "}
                    </td>
                    <td>
                      {" "}
                      <Toggle
                        label="Toggle me"
                        toggled={true}
                        onClick={logState}
                      />
                      Add
                    </td>
                    <td>
                      {" "}
                      <Toggle
                        label="Toggle me"
                        toggled={true}
                        onClick={logState}
                      />
                      Edit
                    </td>
                    <td>
                      {" "}
                      <Toggle
                        label="Toggle me"
                        toggled={true}
                        onClick={logState}
                      />
                      Delete
                    </td>
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

      {/* **********MODAL***** for  Create Add New Bank Account ******* */}

      <div
        className="modal fixed inset-0 flex items-center justify-center"
        id="add_bank"
      >
        <div className="modal-box max-w-[1050px] min-h-[300px] ">
          <div
            style={{ display: "flex", marginLeft: "50px", marginTop: "5px" }}
            className="text-xl font-semibold mr-4"
          >
            Add New Bank Account
          </div>
          {/**************INPUT TAGS**************/}
          <div className="grid grid-cols-2 gap-x-5 gap-y-2">
            <div className="" style={{ marginLeft: "250px" }}>
              <p className="mb-2">Bank Name</p>
              <select
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a bank
                </option>
                <option value="bank1">Bank 1</option>
                <option value="bank2">Bank 2</option>
                <option value="bank3">Bank 3</option>
              </select>
            </div>
            <div className="" style={{ marginLeft: "50px" }}>
              <p className="mb-2">Full Name</p>
              <input
                type="text"
                placeholder="Jenny Smith"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: "250px" }}>
              <p className="mb-2">Account No.</p>
              <input
                type="text"
                placeholder="12345678901"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>

            <div className="" style={{ marginLeft: "50px" }}>
              <p className="mb-2">Confirm Account No.</p>
              <input
                type="text"
                placeholder="12345678901"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: "250px" }}>
              <p className="mb-2">IFSC Code</p>
              <input
                type="text"
                placeholder="IDFB008901"
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1] "
              />
            </div>
            <div className="" style={{ marginLeft: "50px" }}>
              <p className="mb-2">Type of Account</p>
              <select
                className="input w-full max-w-xs border border-[#4169E1] focus:ring-[#4169E1] focus:ring-2 focus:border-[#4169E1]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Account Type
                </option>
                <option value="saving">Saving</option>
                <option value="current">Current</option>
              </select>
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

      {/**End the modal of add employee  */}

      {/* **********MODAL***** for  transactiondetails  ******* */}

      <div className="modal fixed inset-0 flex items-center justify-center" id="transactiondetails">
        <div className="modal-box max-w-[600px] min-h-[550px] ">
          <div style={{ display: 'flex', marginLeft: '50px', marginTop: '5px' }} className="text-xl font-semibold mr-4">View Transaction Details</div>
          {/**************INPUT TAGS**************/}


          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex' }} >
              <div className="mb-2 text-bold " style={{ marginTop: "10px", marginLeft: "47px" }}>Transaction ID</div>
              <div style={{marginTop:"10px",marginLeft:"130px"}}>TC0125DB0123654123</div>
            </div>

            <div style={{ display: 'flex' }}>
              <div style={{ marginTop: "10px", marginLeft: "47px" }}>Brand Name</div>
              <div style={{marginTop:"10px",marginLeft:"146px"}}>Himalaya</div>
            </div>

            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "10px", marginLeft: "47px" }}>Category</div>
              <div style={{marginTop:"10px",marginLeft:"170px"}}>Face</div>
            </div>

            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "10px", marginLeft: "47px" }}>Supplier</div>
              <div style={{marginTop:"10px",marginLeft:"177px"}}>Supplier1</div>
            </div>


            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "10px", marginLeft: "47px" }}>Quantity</div>
             <div style={{marginTop:"10px",marginLeft:"175px"}}>43  Packets</div>
            </div>

            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "10px", marginLeft: "47px" }}>Buying Price</div>
              <div style={{marginTop:"10px",marginLeft:"145px"}}>₹ 240</div>
            </div>


            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "10px", marginLeft: "47px" }}>Order Date</div>
              <div style={{marginTop:"10px",marginLeft:"155px"}}>18/05/23</div>
            </div>
            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "10px", marginLeft: "47px" }}>Total Price</div>
             <div style={{marginTop:"10px",marginLeft:"157px"}}>₹ 6,200</div>
            </div>
            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "10px", marginLeft: "47px" }}>Payment Status</div>
              <div style={{marginTop:"10px",marginLeft:"119px",color:"green"}}>Success</div>
            </div>

            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "10px", marginLeft: "47px" }}>Payment Mode</div>
             <div style={{marginTop:"10px",marginLeft:"121px"}}>Online/Net Banking</div>
            </div>

            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "10px", marginLeft: "47px" }}>Bank Name</div>
             <div style={{marginTop:"10px",marginLeft:"149px"}}>IDFC</div>
            </div>

            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "10px", marginLeft: "47px" }}>Payment Date</div>
              <div style={{marginTop:"10px",marginLeft:"131px"}}>20/06/23</div>
            </div>
            <div style={{ display: 'flex' }} >
              <div style={{ marginTop: "10px", marginLeft: "47px" }}>Remains Payment</div>
            <div style={{marginTop:"10px",marginLeft:"105px"}}>₹ 0,000</div>
            </div>


          </div>
          <div className="modal-action flex justify-center">
            <a
              href="#"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              x
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Layout(bankandtransaction);
