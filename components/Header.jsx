import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import { TbLayoutDashboard } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { MdOutlineSell } from "react-icons/md";
import { MdOutlineToday } from "react-icons/md";
import { TbAlignBoxBottomCenter } from "react-icons/tb";
import { PiToteSimpleLight } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";
import { AiOutlineTransaction } from "react-icons/ai";

import { FaUsers } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsBank,BsHouseLockFill } from "react-icons/bs";
import { BiMessageRoundedDots } from "react-icons/bi";
import { MdOutlineNightsStay } from "react-icons/md";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrUserSettings,GrOrderedList } from "react-icons/gr";
import { MdCategory,MdOutlineLowPriority } from "react-icons/md";
import { TbSum} from "react-icons/tb";
import { RiAlignTop} from "react-icons/ri";
import { FcSalesPerformance } from "react-icons/fc";
import { BsBarChartLineFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";



const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isBankTransactionOpen, setIsBankTransactionOpen] = useState(false);

  let pageTitleLogo = "";
  pageTitleLogo = <img src="/Images/Logo.png" alt="Dashboard Logo" />;

  const params = useRouter();
  const { pathname } = params;

  return (
    <div className="bg-white z-10">
      <div style={{ zIndex: 10 }}>
        {/** Navigation bar start  */}

        <div className="navbar flex  justify-between ">
          <div className="flex-1">
            {/* ***************sidebar for mobile navigation bar *************** */}

            <div className="dropdown block  ">
              <label
                tabIndex={0}
                className=""
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle sidebar
              >
                <IoIosMenu className="text-xl ms:ml-[10px] ms:w-[50px] ms:h-[50px]   sm:w-[50px] sm:h-[50px] lg:hidden md:hidden" />
              </label>

              {/**sidebar color   */}
              <ul
                tabIndex={0}
                className={`dropdown-content menu shadow   w-[550px]      ${
                  isMobileMenuOpen ? "slide-in" : "slide-out"
                }`}
                style={{
                  position: "fixed", // Set the position to fixed
                  top: 0, // Position from the top of the viewport
                  left: 0, // Position from the left of the viewport
                  height: "100%", // Set the height to 100% to cover the entire viewport height
                  overflowY: "auto", // Set overflow-y to auto to enable scrolling if content overflows
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity))",
                  
                }}
              >
                {/**for side bar in mobile image with close icon */}

                <div className="flex justify-between">
                 
                <div
                    style={{
                      color: "white",
                      marginTop: "19px",
                      marginRight: "9px",
                    }}
                >
                    <img src="/Image/Logo.png" className="w-[150px] h-[50px]" />
                  </div>


                  <div
                    style={{
                      color: "white",
                      // marginLeft: "20px",
                      marginTop: "20px",
                      marginRight:"30px"
                    }}
                    onClick={() => setIsMobileMenuOpen(false)} // Close sidebar
                  >
                    <BsArrowLeftCircleFill className="w-[50px] h-[50px]" />
                  </div>
               
                </div>
                <div className="h-px mt-5 bg-sky-300"></div>

                <div>
                  <h3
                    style={{
                      marginTop: "30px",
                      marginLeft: "30px",
                      fontSize: "40px ",
                      color: "#1570EF",
                    }}
                    className="text-2xl  font-extrabold"
                  >
                    PAGES
                  </h3>
                </div>

                {/** Side bar naming */}

                <Link href="/dashboard">
                  <div className="flex mt-9 my-1">
                    <div className="ms-7 me-3">
                      <TbLayoutDashboard
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          pathname === "/dashboard"
                            ? { color: "#1570EF" }
                            : { color: "white" }}
                      />
                    </div>
                    <h1 className="font-bold text-4xl  font-serif text-[#E2E8F0]">
                      Dashboard
                    </h1>
                  </div>
                </Link>
                <div className="h-px mt-5 bg-sky-300"></div>
                <div>
                  {/* Use a button instead of div for better accessibility */}
                  <button
            className="flex my-1 focus:outline-none"
            onClick={() => {
              setIsInventoryOpen(!isInventoryOpen);
              setIsReportOpen(false);
              setIsProfileOpen(false);
            }}
          >
                    <div className="ms-7 me-3">
                      <AiOutlineShoppingCart
                        className={`text-2xl w-[60px] h-[60px] ${
                          pathname !== "/inventory"
                            ? "text-gray-500"
                            : isInventoryOpen
                            ? "text-indigo-600"
                            : ""
                        }`}
                      />
                    </div>
                    <h1
                      className={`font-bold font-serif text-4xl ${
                        pathname !== "/inventory"
                          ? "text-gray-100"
                          : "text-gray-400"
                      }`}
                    >
                      Inventory
                    </h1>
                    
                  </button>
                </div>

                {/* Inventory Details */}
                {isInventoryOpen && (
                  <ul className="mt-2 ml-16 text-gray-300 list-none">
                    <li>
                      <Link href="/inventory">
                        <MdCategory className="w-[30px] h-[30px]"/>
                       <h2 className="text-2xl font-medium">Categories</h2> 
                        
                        </Link>
                    </li>
                    <li>
                      <Link href="/totalproducts">
                        <TbSum className="w-[30px] h-[30px]"/>
                       <h2 className="text-2xl font-medium">Total Products</h2> 
                        
                        </Link>
                    </li>
                    <li>
                      <Link href="/topselling">
                        <RiAlignTop className="w-[30px] h-[30px]"/>
                        <h2 className="text-2xl font-medium" >Top Selling</h2>
                        
                        </Link>
                    </li>
                    <li>
                      <Link href="/lowstock">
                        <MdOutlineLowPriority className="w-[30px] h-[30px]"/>
                        <h2 className="text-2xl font-medium">Low Stocks</h2>                       
                        </Link>
                    </li>
                  </ul>
                )}
                <div className="h-px mt-5 bg-sky-300"></div>

                <div>
                  {/* Use a button instead of div for better accessibility */}
                  <button
            className="flex my-1 focus:outline-none"
            onClick={() => {
              setIsReportOpen(!isReportOpen);
              setIsInventoryOpen(false);
              setIsProfileOpen(false);
            }}
          >
                    <div className="ms-7 me-3">
                      <TbAlignBoxBottomCenter
                        className={`text-2xl w-[60px] h-[60px] ${
                          pathname !== "/report"
                            ? "text-gray-500"
                            : isReportOpen
                            ? "text-indigo-600"
                            : ""
                        }`}
                      />
                    </div>
                    <h1
                      className={`font-bold font-serif text-4xl ${
                        pathname !== "/report"
                          ? "text-gray-100"
                          : "text-gray-400"
                      }`}
                    >
                      Report
                    </h1>
                  </button>
                </div>

                {/* Report Details */}
                {isReportOpen && (
                  <ul className="mt-2 ml-16 text-gray-300 list-none">
                    <li>
                      <Link href="/report">
                        <GrOrderedList className="w-[30px] h-[30px]" />
                      <h2 className="text-2xl font-medium">My Orders</h2>
                        
                        </Link>
                    </li>
                    <li>
                      <Link href="/todaysale">
                       <BsBarChartLineFill className="w-[30px] h-[30px]"  /> 
                      <h2 className="text-2xl font-medium">Today Sales</h2>
                      </Link>
                    </li>
                    <li>
                      
                      <Link href="/totalrevenue">
                      <FcSalesPerformance className="w-[30px] h-[30px]" />  
                      <h2 className="text-2xl font-medium">
                        
                         Total Revenue </h2> 
                        </Link>
                    </li>
                  </ul>
                )}

                <div className="h-px mt-5 bg-sky-300"></div>
                <Link href="/supplier">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <TbUsers
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                       
                          pathname !== "/supplier"
                            ? { color: "grey" }
                            : pathname === "/supplier"
                            ? { color: "#6366f1" }
                            : {}
                        }
                      />
                    </div>
                    <h1 className="font-bold  font-serif text-4xl text-[#E2E8F0] ">
                      Supplier
                    </h1>
                  </div>
                </Link>
                <div className="h-px mt-5 bg-sky-300"></div>
                <Link href="/employee">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <FaUsers
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          // pathname == "/employee" ? { color: "#E2E8F0" } : ""
                          pathname !== "/employee"
                            ? { color: "grey" }
                            : pathname === "/employee"
                            ? { color: "#6366f1" }
                            : {}
                        }
                      />
                    </div>
                    <h1 className="font-bold  font-serif text-4xl text-[#E2E8F0] ">
                      Employee
                    </h1>
                  </div>
                </Link>
                <div className="h-px mt-5 bg-sky-300"></div>

                {/* <Link href="/revenue">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <HiOutlineCurrencyDollar
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          // pathname == "/revenue" ? { color: "#E2E8F0" } : ""
                          pathname !== "/revenue"
                            ? { color: "grey" }
                            : pathname === "/revenue"
                            ? { color: "#6366f1" }
                            : {}
                        }
                      />
                    </div>
                    <h1 className="font-bold  font-serif text-4xl text-[#E2E8F0] ">
                      Revenue
                    </h1>
                  </div>
                </Link> */}

                <div>
                  {/* Use a button instead of div for better accessibility */}
                  <div className="ms-7 me-3">
                  <button
            className="flex my-1 focus:outline-none"
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
              setIsInventoryOpen(false);
              setIsReportOpen(false);
            }}
          >
                    <div>
                      <GrUserSettings
                        className={`text-2xl w-[60px] h-[60px] ${
                          pathname !== "/report"
                            ? "text-gray-500"
                            : isProfileOpen
                            ? "text-indigo-600"
                            : ""
                        }`}
                      />
                    </div>

                    <h1
                      className={`font-bold font-serif text-4xl ${
                        pathname !== "/profile"
                          ? "text-gray-100"
                          : "text-gray-400"
                      }`}
                    >
                      Settings
                    </h1>
                    <div className="ml-[80px] me-3">
                      {isProfileOpen ? (
                        <IoMdArrowDropup
                          className={`text-2xl w-[60px] h-[60px] ${
                            pathname === "/profile" ? "text-indigo-600" : ""
                          }`}
                        />
                      ) : (
                        <IoMdArrowDropdown
                          className={`text-2xl w-[60px] h-[60px] ${
                            pathname === "/profile"
                              ? "text-indigo-600"
                              : "text-gray-500"
                          }`}
                        />
                      )}
                    </div>
                  </button>
                  </div>
                </div>

                {/* Profile Details */}
                {isProfileOpen && (
                  <ul className="mt-2 ml-16 text-gray-300 list-none">
                    <li>
                      <Link href="/profile">
                        <FaUserTie className="w-[30px] h-[30px]"/>
                       <h2 className="text-2xl font-medium">Profile</h2> 
                        </Link>
                    </li>
                    <li>
                      
                      <Link href="/bankandtransaction">
                        <BsBank className="w-[30px] h-[30px]"/>
                      <h2 className="text-2xl font-medium"> Bank And Transaction</h2>  
                      </Link>
                    </li>
                    <li>
                      
                      <Link href="/change_Password">
                        <BsHouseLockFill className="w-[30px] h-[30px]"/>
                      <h2 className="text-2xl font-medium"> Change Password</h2>  
                      </Link>
                    </li>
                  </ul>
                )}
                 <div className="h-px mt-5 bg-sky-300"></div>
              </ul>
              
            </div>
           

            {/**      end of navigation of   side bar  */}

            {/* ****************** abcde LOGO for md sm ms  or more mobile for that use*************** */}
            <Link href="/dashboard">
              <img
                className="mx-10 lg:hidden  "
                src="/Image/Logo.png"
                style={{ width: "600px", height: "40px" }}
                alt="logo"
              />
            </Link>
            {/**search for mobile */}
            {/* <div><BsSearch className="ms:ml-[70px] ms:w-[50px] ms:h-[20px] sm:ml-[70px] sm:w-[50px] sm:h-[20px] md:hidden lg:hidden"/></div>
          
          <div>
          <BiMessageRoundedDots className=""/>
          </div>
          <div>
            <MdOutlineNightsStay className="ms:ml-[10px]"/></div>  */}

            <a className="normal-case text-xl mx-5 font-bold text-[#1570EF]">
              {/* Hello, Admin */}

              {pathname == "/dashboard" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/report" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/change_Password" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/supplier" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/employee" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/inventory" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/revenue" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/security" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/notification" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/orderDetails" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/profile" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/totalrevenue" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/todaysale" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/bankandtransaction" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/totalproducts" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/topselling" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/lowstock" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/dashboard_Retailer" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : (
                ""
              )}
            </a>
          </div>
          <div
            className="w-full max-w-sm mx-auto p-1 relative text-gray-600 "
            style={{ marginRight: "410px" }}
          >
            {/** search bar for large screen   */}
            <div className="md:hidden ms:hidden  sm:hidden">
              <input
                class="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
                type="search"
                name="search"
                placeholder="Search product, supplier, order"
              />
            </div>

            {/* <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              ></svg>
            </button> */}
          </div>

          {/* *******************work on dashboard mobile screen ms **************** */}

          <div className="ms:ml-[-220px] ms:mt-[10px]">
            <div className="flex  ">
              <Link href="/notification" className="indicator mx-4  ">
                <span className="indicator-item badge badge-xs border border-[#1570EF] bg-[#1570EF] ms:mt-[15px] ms:mr-[10px]"></span>
                <MdOutlineNotificationsActive
                  className="text-2xl ms:mt-[5px] ms:w-[50px] ms:h-[50px]"
                  style={
                    pathname == "/notification" ? { color: "#1570EF" } : ""
                  }
                />
              </Link>
                    
              {/*  notification ke bagale me
              <div className="dropdown mx-5">
                <label tabIndex={0} className="">
                  <img
                    className=""
                    src="/Image/headerImage/translater.png"
                    width={50}
                    height={50}
                    alt="logo"
                  />
                </label>
                
              </div> */}

              <div className="dropdown   ">
                <label tabIndex={0} className="flex">
                  <img
                    className=" ms:ml-[10px] "
                    src="/Image/headerImage/HeaderPerson.png"
                    width={50}
                    height={50}
                    alt="logo"
                  />

                  <div
                    className=""
                    style={
                      pathname == "/profile"
                        ? { color: "#1570EF" }
                        : pathname == "/change_Password"
                        ? { color: "#1570EF" }
                        : { color: "black" }
                    }
                  >
                    <p className="font-semibold">Jonathan</p>
                    <h1>Admin</h1>
                  </div>

                  <BiChevronDown
                    className="text-4xl mt-3"
                    style={
                      pathname == "/profile"
                        ? { color: "#1570EF" }
                        : pathname == "/change_Password"
                        ? { color: "#1570EF" }
                        : ""
                    }
                  />
                </label>

                {/**profile logo click dropdown  */}
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56"
                >
                  <Link
                    href="/profile"
                    className="flex me-3 hover:bg-slate-100 my-3"
                  >
                    <img
                      className="mx-2"
                      src="/Image/headerImage/HeaderPerson.png"
                      width={35}
                      height={35}
                      alt="logo"
                    />
                    <h1 className="font-semibold text-xl hover:text-black">
                      {" "}
                      Profile
                    </h1>
                  </Link>

                  {/* The button to open modal / for md/*/}

                  <label
                    htmlFor="my-modal-6"
                    className="flex me-3 hover:bg-slate-100 mt-1 mb-3">
                    <img
                      className="mx-3"
                      src="/Image/headerImage/logout.png"
                      width={20}
                      height={20}
                      alt="logo" />

                    <h1 className="font-semibold text-xl hover:text-black">
                      Logout
                    </h1>
                  </label>

                  <Link
                    href="/change_Password"
                    className="flex me-3 hover:bg-slate-100 my-3"
                  >
                    <h1 className="font-semibold text-xl hover:text-black mx-2">
                      Change Password
                    </h1>
                  </Link>
                </ul>
                {/**profile end click dropdown  */}
                
              </div>
            </div>
          </div>

          {/********************hidden below md************* */}

          <div className="dropdown dropdown-end block md:hidden">
            <label tabIndex={0} className="flex">
              <img
                className=""
                src="/Image/headerImage/HeaderPerson.png"
                width={700}
                height={70}
                alt="logo"
              />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link
                href="/profile"
                className=" flex me-3 hover:bg-slate-100 my-3"
              >
                <h1 className="font-semibold text-md flex">
                  <MdOutlinePersonOutline
                    className="mx-2 mt-1"
                    style={pathname == "/profile" ? { color: "#1570EF" } : ""}
                  />
                  Profile
                </h1>
              </Link>

              <Link href="/notification" className="flex ">
                <h1>
                  <MdOutlineNotificationsActive
                    className="mx-2 my-1"
                    style={
                      pathname == "/notification" ? { color: "#1570EF" } : ""
                    } />
                </h1>

                <h1 className="font-semibold text-md">Notification</h1>
              </Link>

              <label
                htmlFor="my-modal-6"
                className="flex me-3 hover:bg-slate-100 mt-2 mb-3"
              >
                {/**mobile screen  */}

                <img
                  className="mx-2 p-1"
                  src="/Image/headerImage/logout.png"
                  width={20}
                  height={20}
                  alt="logo"
                />
                <h1 className="font-semibold text-md">Logout</h1>
              </label>

              <hr />

              <div className="  mt-2 mb-1">
                <h1 className="font-semibold text-md text-center">Language</h1>
                <div className="flex justify-around mt-2">
                  <h1>EN</h1>
                  <h1>GR</h1>
                </div>
              </div>
            </ul>
          </div>
        </div>
        {/** Navigation bar end  */}

        {/**not a important  part for navigation  */}

        {/* Put this part before </body> tag (Logout modal)*/}
        
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center my-5">
              Do you Really want to Logout ?{" "}
            </h3>
            <div className="modal-action flex justify-center mb-5">
              <Link
                href="/"
                className="btn border border-[#1570EF] hover:border-[#1570EF] bg-white text-[#1570EF] hover:bg-[#1570EF] hover:text-white w-24 rounded-3xl mx-2"
              >
                Yes
              </Link>
              <label
                htmlFor="my-modal-6"
                className="btn bg-[#1570EF] border border-[#1570EF] hover:bg-white hover:text-[#1570EF] hover:border-[#1570EF] w-24 rounded-3xl mx-2"
              >
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
