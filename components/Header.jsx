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
import { BsSearch } from "react-icons/bs";
import { BiMessageRoundedDots } from "react-icons/bi";
import { MdOutlineNightsStay } from "react-icons/md";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

            <div className="dropdown block  " >
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
                className={`dropdown-content menu shadow   w-[550px]    bg-slate-700  ${
                  isMobileMenuOpen ? "slide-in" : "slide-out"
                }`}
                style={{
                  position: "fixed",   // Set the position to fixed
                  top: 0,              // Position from the top of the viewport
                  left: 0,             // Position from the left of the viewport
                  height: "100%",      // Set the height to 100% to cover the entire viewport height
                  overflowY: "auto",   // Set overflow-y to auto to enable scrolling if content overflows
                }}
              >
                <div className="flex justify-between">
                  <div
                    style={{
                      color: "white",
                      marginLeft: "20px",
                      marginTop: "20px",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)} // Close sidebar
                  >
                    <BsArrowLeftCircleFill className="w-[50px] h-[50px]" />
                  </div>
                  <div
                    style={{
                      color: "white",
                      marginTop: "19px",
                      marginRight: "9px",
                    }}
                  >
                    <img src="/Image/Logo.png" className="w-[150px] h-[50px]" />
                  </div>
                </div>

                <div>
                  <h3
                    style={{
                      marginTop: "20px",
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
                  <div className="flex mt-5 my-1">
                    <div className="ms-7 me-3">
                      <TbLayoutDashboard
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          pathname == "/dashboard" ? { color: "#1570EF" } : ""
                        }
                      />
                    </div>
                    <h1 className="font-bold text-4xl  font-serif text-[#E2E8F0]">
                      Dashboard
                    </h1>
                  </div>
                </Link>

                <Link href="/orders">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <AiOutlineShoppingCart
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          // pathname == "/orders" ? { color: "white" } : ""
                          pathname !== "/orders"
                          ? { color: "grey" }
                          : pathname === "/orders"
                          ? { color: "#6366f1" }
                          : {}
                        
                        }
                      />
                    </div>
                    <h1 className="font-bold text-4xl   font-serif text-[#E2E8F0]">
                      Inventory
                    </h1>
                  </div>
                </Link>

                <Link href="/report">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <TbAlignBoxBottomCenter
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          // pathname == "/report" ? { color: "#E2E8F0" } : ""
                          pathname !== "/report"
                          ? { color: "grey" }
                          : pathname === "/report"
                          ? { color: "#6366f1" }
                          : {}
                        }
                      />
                    </div>
                    <h1 className="font-bold text-4xl  font-serif  text-[#E2E8F0]">
                      Report
                    </h1>
                  </div>
                </Link>
                <Link href="/customer">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <TbUsers
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          // pathname == "/customer" ? { color: "#E2E8F0" } : ""
                          pathname !== "/customer"
                          ? { color: "grey" }
                          : pathname === "/customer"
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
                <Link href="/totalproducts">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <PiToteSimpleLight
                        className="text-2xl w-[60px] h-[60px] "
                        style={
                          // pathname == "/totalproducts"
                          //   ? { color: "#1570EF" }
                          //   : ""
                          pathname !== "/totalproducts"
                          ? { color: "grey" }
                          : pathname === "/totalproducts"
                          ? { color: "#6366f1" }
                          : {}
                        }
                      />
                    </div>
                    <h1 className="font-bold  font-serif text-4xl  text-[#E2E8F0]">
                      Total Products
                    </h1>
                  </div>
                </Link>
                <Link href="/lowstock">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <AiOutlineShoppingCart
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          // pathname == "/lowstock" ? { color: "#E2E8F0" } : ""
                          pathname !== "/lowstock"
                          ? { color: "grey" }
                          : pathname === "/lowstock"
                          ? { color: "#6366f1" }
                          : {}
                        }
                      />
                    </div>
                    <h1 className="font-bold  font-serif text-4xl  text-[#E2E8F0]">
                      Low Stocks
                    </h1>
                  </div>
                </Link>
                <Link href="/topselling">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <MdOutlineSell
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          // pathname == "/topselling" ? { color: "#E2E8F0" } : ""
                          pathname !== "/topselling"
                          ? { color: "grey" }
                          : pathname === "/topselling"
                          ? { color: "#6366f1" }
                          : {}
                        }
                      />
                    </div>
                    <h1 className="font-bold  font-serif text-4xl text-[#E2E8F0] ">
                      Top Selling
                    </h1>
                  </div>
                </Link>

                <Link href="/todaysale">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <MdOutlineToday
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          // pathname == "/todaysale" ? { color: "#E2E8F0" } : ""
                          pathname !== "/todaysale"
                          ? { color: "grey" }
                          : pathname === "/todaysale"
                          ? { color: "#6366f1" }
                          : {}
                        }
                      />
                    </div>
                    <h1 className="font-bold  font-serif text-4xl text-[#E2E8F0] ">
                      Today Sale
                    </h1>
                  </div>
                </Link>

                <Link href="/totalrevenue">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <TbMoneybag
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          // pathname == "/totalrevenue"
                          //   ? { color: "#E2E8F0" }
                          //   : ""

                          pathname !== "/totalrevenue"
                          ? { color: "grey" }
                          : pathname === "/totalrevenue"
                          ? { color: "#6366f1" }
                          : {}
                        }
                      />
                    </div>
                    <h1 className="font-bold  font-serif text-4xl  text-[#E2E8F0]">
                      Total Revenue
                    </h1>
                  </div>
                </Link>

                <Link href="/revenue">
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
                </Link>

                <Link href="/profile">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <CgProfile
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          // pathname == "/profile" ? { color: "#E2E8F0" } : ""
                          pathname !== "/profile"
                          ? { color: "grey" }
                          : pathname === "/prefrenceNotification"
                          ? { color: "#6366f1" }
                          : {}
                        }
                      />
                    </div>
                    <h1 className="font-bold  font-serif text-4xl text-[#E2E8F0] ">
                      Profile
                    </h1>
                  </div>
                </Link>
                <Link href="/prefrenceNotification">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <RiLockPasswordFill
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          // pathname == "/prefrenceNotification"
                          //   ? { color: "#E2E8F0" }
                          //   : ""
                          pathname !== "/prefrenceNotification"
                          ? { color: "grey" }
                          : pathname === "/prefrenceNotification"
                          ? { color: "#6366f1" }
                          : {}
                        }
                      />
                    </div>
                    <h1 className="font-bold  font-serif text-4xl text-[#E2E8F0] ">
                      Change Password
                    </h1>
                  </div>
                </Link>
                <Link href="/bankandtransaction">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <AiOutlineTransaction
                        className="text-2xl w-[60px] h-[60px]"
                        style={
                          pathname !== "/bankandtransaction"
                            ? { color: "grey" }
                            : pathname === "/bankandtransaction"
                            ? { color: "#6366f1" }
                            : {}
                        }
                      />
                    </div>
                    <h1 className="font-bold font-serif text-4xl text-[#E2E8F0]">
                      Bank And Transaction
                    </h1>
                  </div>
                </Link>
              </ul>
            </div>

            {/**      end of navigation of   side bar  */}

            {/* ******************LOGO for md sm ms  or more mobile for that use*************** */}
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
              ) : pathname == "/prefrenceNotification" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/customer" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/employee" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ) : pathname == "/orders" ? (
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

          <div className="ms:ml-[-200px] ms:mt-[10px]">
            <div className="flex  ">
              <Link href="/notification" className="indicator mx-4  ">
                <span className="indicator-item badge badge-xs border border-[#1570EF] bg-[#1570EF]"></span>
                <MdOutlineNotificationsActive
                  className="text-2xl "
                  style={
                    pathname == "/notification" ? { color: "#1570EF" } : ""
                  }
                />
              </Link>

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
                {/* <ul
                tabIndex={0}
                style={{ position: "absolute", right: "-30px" }}
                className="dropdown-content border menu p-2 shadow bg-base-100 rounded-box w-28">
                <Link href="#" className="flex p-2">
                  <img
                    className="me-5"
                    src="/Image/headerImage/ENflag.png"
                    style={{ width: "40px", height: "20px" }}
                    alt="logo"
                  />
                  <span className="font-bold text-lg">EN</span>
                </Link>
                <Link href="#" className="flex p-2">
                  <img
                    className="me-5"
                    src="/Image/headerImage/UnitedArabFlag.png"
                    style={{ width: "40px", height: "20px" }}
                    alt="logo"
                  />
                  <span className="font-bold text-lg">AR</span>
                </Link>
              </ul> */}
              </div>

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
                        : pathname == "/prefrenceNotification"
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
                        : pathname == "/prefrenceNotification"
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
                    className="flex me-3 hover:bg-slate-100 mt-1 mb-3"
                  >
                    <img
                      className="mx-3"
                      src="/Image/headerImage/logout.png"
                      width={20}
                      height={20}
                      alt="logo"
                    />
                    <h1 className="font-semibold text-xl hover:text-black">
                      Logout
                    </h1>
                  </label>

                  <Link
                    href="/prefrenceNotification"
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
                    }
                  />
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
