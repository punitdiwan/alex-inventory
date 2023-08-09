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
import { AiOutlineLock } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdPassword } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  let pageTitleLogo = "";
  pageTitleLogo = <img src="/Images/Logo.png" alt="Dashboard Logo" />;

  const params = useRouter();
  const { pathname } = params;

  return (
    <div className="bg-white z-10">
      <div style={{ zIndex: 10 }}>
        {/* ***********LOGO for mob screen************** */}
        <Link href="/dashboard" className="block md:hidden">
          <img
            className="mx-auto"
            src="/logobgRemove.png"
            width={50}
            height={56}
            alt="logo"
          />
        </Link>

        <div className="navbar">
          <div className="flex-1">
            {/* ***************dropdown for mobile*************** */}
            <div className="dropdown block md:hidden">
              <label tabIndex={0} className="">
                <IoIosMenu className="text-xl" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-base-100 rounded-box w-screen"
                style={{ position: "absolute", top: "20px", left: "10px" }}
              >
                <Link href="/dashboard">
                  <div className="flex mt-5 my-1">
                    <div className="ms-7 me-3">
                      <TbLayoutDashboard
                        className="text-2xl"
                        style={
                          pathname == "/dashboard" ? { color: "#E97208" } : ""
                        }
                      />
                    </div>
                    <h1 className="font-bold text-xl ">Dashboard</h1>
                  </div>
                </Link>

                <Link href="/orders">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <AiOutlineShoppingCart
                        className="text-2xl"
                        style={
                          pathname == "/orders" ? { color: "#E97208" } : ""
                        }
                      />
                    </div>
                    <h1 className="font-bold text-xl ">Orders</h1>
                  </div>
                </Link>

                <Link href="/report">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <AiOutlineLock
                        className="text-2xl"
                        style={
                          pathname == "/report" ? { color: "#E97208" } : ""
                        }
                      />
                    </div>
                    <h1 className="font-bold text-xl ">Category</h1>
                  </div>
                </Link>
                
                <Link href="/todaysale">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <AiOutlineLock
                        className="text-2xl"
                        style={
                          pathname == "/todaysale" ? { color: "#E97208" } : ""
                        }
                      />
                    </div>
                    <h1 className="font-bold text-xl ">todaysale</h1>
                  </div>
                </Link>


                <Link href="/totalrevenue">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <AiOutlineLock
                        className="text-2xl"
                        style={
                          pathname == "/totalrevenue" ? { color: "#E97208" } : ""
                        }
                      />
                    </div>
                    <h1 className="font-bold text-xl ">Total revenue</h1>
                  </div>
                </Link>

                <Link href="/customer">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <TbUsers
                        className="text-2xl"
                        style={
                          pathname == "/customer" ? { color: "#E97208" } : ""
                        }
                      />
                    </div>
                    <h1 className="font-bold text-xl ">Customer</h1>
                  </div>
                </Link>

                <Link href="/employee">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <MdDesignServices
                        className="text-2xl"
                        style={
                          pathname == "/employee" ? { color: "#E97208" } : ""
                        }
                      />
                    </div>
                    <h1 className="font-bold text-xl ">Employee</h1>
                  </div>
                </Link>

                <Link href="/revenue">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <HiOutlineCurrencyDollar
                        className="text-2xl"
                        style={
                          pathname == "/revenue" ? { color: "#E97208" } : ""
                        }
                      />
                    </div>
                    <h1 className="font-bold text-xl ">Revenue</h1>
                  </div>
                </Link>

                <Link href="/profile">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <CgProfile
                        className="text-2xl"
                        style={
                          pathname == "/profile" ? { color: "#E97208" } : ""
                        }
                      />
                    </div>
                    <h1 className="font-bold text-xl ">Profile</h1>
                  </div>
                </Link>
                <Link href="/prefrenceNotification">
                  <div className="flex my-1">
                    <div className="ms-7 me-3">
                      <MdPassword
                        className="text-2xl"
                        style={
                          pathname == "/prefrenceNotification"
                            ? { color: "#E97208" }
                            : ""
                        }
                      />
                    </div>
                    <h1 className="font-bold text-xl ">Change Password</h1>
                  </div>
                </Link>
              </ul>
            </div>

            {/* ******************LOGO for md or more*************** */}
            {/*<Link href="/dashboard" >
            <img className='mx-10 md:block hidden' src="/logobgRemove.png" style={{ width: "150px", height: "100px" }} alt="logo" />
          </Link>*/}

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
              ) : pathname =="/totalrevenue" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              ): pathname =="/todaysale" ? (
                <img src="/Image/Logo.png" alt="Dashboard Logo" />
              )

                : (
                ""
              )}
            </a>
          </div>
          <div className="w-full max-w-sm mx-auto p-1 relative text-gray-600 " style={{marginRight:'410px'}} >
            <div >
              {/* <CiSearch className="mt-6"/> */}
            <input  
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
              type="search"
              name="search"
              placeholder=" Search product, supplier, order" 
            /></div>
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* <path
                  className="heroicon-ui"
                  d="M21.707 20.293l-5.28-5.28a7.5 7.5 0 1 0-1.414 1.414l5.28 5.28a1 1 0 0 0 1.414-1.414zM10 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
                /> */}
              </svg>
            </button>
          </div>

          {/* *******************hidden below md **************** */}
          <div className="flex-none me-14 hidden md:block">
            <Link href="/notification" className="indicator mx-4 ">
              <span className="indicator-item badge badge-xs border border-[#1570EF] bg-[#1570EF]"></span>
              <MdOutlineNotificationsActive
                className="text-2xl"
                style={pathname == "/notification" ? { color: "#E97208" } : ""}
              />
            </Link>

            <div className="dropdown mx-5">
              {/* <label tabIndex={0} className="">
              <img className='' src="/Image/headerImage/translater.png" width={50} height={50} alt="logo" />
            </label> */}
              <ul
                tabIndex={0}
                style={{ position: "absolute", right: "-30px" }}
                className="dropdown-content border menu p-2 shadow bg-base-100 rounded-box w-28"
              >
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
              </ul>
            </div>

            <div className="dropdown ">
              <label tabIndex={0} className="flex">
                <img
                  className="mx-3"
                  src="/Image/headerImage/HeaderPerson.png"
                  width={50}
                  height={50}
                  alt="logo"
                />

                <div
                  className=""
                  style={
                    pathname == "/profile"
                      ? { color: "#E97208" }
                      : pathname == "/prefrenceNotification"
                      ? { color: "#E97208" }
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
                      ? { color: "#E97208" }
                      : pathname == "/prefrenceNotification"
                      ? { color: "#E97208" }
                      : ""
                  }
                />
              </label>

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

                {/* The button to open modal */}
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
            </div>
          </div>
          {/********************hidden below md************* */}

          <div className="dropdown dropdown-end block md:hidden">
            <label tabIndex={0} className="flex">
              <img
                className=""
                src="/Image/headerImage/HeaderPerson.png"
                width={50}
                height={50}
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
                    style={pathname == "/profile" ? { color: "#E97208" } : ""}
                  />
                  Profile
                </h1>
              </Link>

              <Link href="/notification" className="flex ">
                <h1>
                  <MdOutlineNotificationsActive
                    className="mx-2 my-1"
                    style={
                      pathname == "/notification" ? { color: "#E97208" } : ""
                    }
                  />
                </h1>

                <h1 className="font-semibold text-md">Notification</h1>
              </Link>

              <label
                htmlFor="my-modal-6"
                className="flex me-3 hover:bg-slate-100 mt-2 mb-3"
              >
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
                className="btn border border-[#E97208] hover:border-[#E97208] bg-white text-[#E97208] hover:bg-[#E97208] hover:text-white w-24 rounded-3xl mx-2"
              >
                Yes
              </Link>
              <label
                htmlFor="my-modal-6"
                className="btn bg-[#E97208] border border-[#E97208] hover:bg-white hover:text-[#E97208] hover:border-[#E97208] w-24 rounded-3xl mx-2"
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
