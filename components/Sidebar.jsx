import React from "react";
import Image from "next/image";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import { TbLayoutDashboard } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar1 = () => {

  const params = useRouter();
  const { pathname } = params;
  const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar
      defaultCollapsed={false}
      width="180px"
      collapsedWidth="65px"
      className="hidden md:block" >

        

      <main>

        <button
          onClick={() => collapseSidebar()}
          className="hover:text-[#1570EF]" >
          <div className="flex">
            <div className="ms-7 me-3">
              <IoIosMenu className="text-3xl " />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/dashboard" ? "text-[#1570EF]" : ""
              }`}
            ></h1>
          </div>
        </button>
        
      </main>

      <Menu className="overflow-hidden">

      <Link href="/dashboard">
          <div className="flex mb-6">
            <div className="ms-7 me-3">
              <TbLayoutDashboard
                className="text-2xl"
                style={pathname === "/dashboard" ? { color: "#1570EF" } : {}}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/dashboard" ? "text-[#1570EF]" : ""

              }`}
            >
              Dashboard
            </h1>
          </div>
        </Link>


        <Link href="/dashboard_Retailer">
          <div className="flex mb-6">
            <div className="ms-7 me-3">
              <TbLayoutDashboard
                className="text-2xl"
                style={pathname === "/dashboard_Retailer" ? { color: "#1570EF" } : {}}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/dashboard_Retailer" ? "text-[#1570EF]" : ""
              }`}
            >
              Dashboard Retailer
            </h1>
          </div>
        </Link>
        

        <Link href="/inventory">
          <div className="flex my-6">
            <div className="ms-7 me-3">
              <AiOutlineShoppingCart
                className="text-2xl"
                style={pathname == "/inventory" ? { color: "#1570EF" } : ""}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/inventory" ? "text-[#1570EF]" : ""
              }`}
            >
              Inventory
            </h1>
          </div>
        </Link>

        <Link href="/retailerInventory">
          <div className="flex my-6">
            <div className="ms-7 me-3">
              <AiOutlineShoppingCart
                className="text-2xl"
                style={pathname == "/retailerInventory" ? { color: "#1570EF" } : ""}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/retailerInventory" ? "text-[#1570EF]" : ""
              }`}
            >
              Retailer Inventory
            </h1>
          </div>
        </Link>
        
        {/**for  report */}

        <SubMenu
          label="Reports"
          className={`text-xl font-bold z-40 -my-3 -ms-1 ${
            pathname === "/report"
              ? "text-[#1570EF]"
              : pathname === "/todaysale"
              ? "text-[#1570EF]"
              : pathname ==="/totalrevenue"
              ? "text-[#1570EF]"
              : ""
          }`}
          icon={
            <GiProgression
              className="text-5xl pl-3"
              style={
                pathname == "/report"
                  ? { color: "#1570EF" }
                  : pathname == "/todaysale"
                  ? { color: "#1570EF" }
                  : pathname == "/totalrevenue"
                  ? { color: "#1570EF" }
                  : ""
              }
            />
          }
        >
          <Link
            className="z-40 py-2 text-base flex justify-between  mx-3"
            href="/report"
          >
            <p className="text-sm ms-10 text-black">My Orders</p>
            <img
              className=""
              src="/Image/SidebarImage/rightarrow.png"
              style={{ width: "10px", height: "20px" }}
              alt="icon"
            />
          </Link>
          <Link
            className=" z-40 py-2 text-base flex justify-between mx-3"
            href="/todaysale"
          >
            <p className="text-sm ms-10 text-black">Today Sales</p>
            <img
              className="my-auto"
              src="/Image/SidebarImage/rightarrow.png"
              style={{ width: "10px", height: "20px" }}
              alt="icon"
            />
          </Link>
          <Link
            className=" z-40 py-2 text-base flex justify-between mx-3"
            href="/totalrevenue"
          >
            <p className="text-sm ms-10 text-black">Total Revenue</p>
            <img
              className="my-auto"
              src="/Image/SidebarImage/rightarrow.png"
              style={{ width: "10px", height: "20px" }}
              alt="icon"
            />
          </Link>
        </SubMenu>
        
        <Link href="/retailer">
          <div className="flex my-6">
            <div className="ms-7 me-3">
              <TbUsers
                className="text-2xl"
                style={pathname == "/retailer" ? { color: "#1570EF" } : ""}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/retailer" ? "text-[#1570EF]" : ""
              }`}
            >
              Retailer
            </h1>
          </div>
        </Link>

        <Link href="/employee">
          <div className="flex my-6">
            <div className="ms-7 me-3">
              <HiOutlineCurrencyDollar
                className="text-2xl"
                style={pathname == "/employee" ? { color: "#1570EF" } : ""}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/employee" ? "text-[#1570EF]" : ""
              }`}
            >
              Employees
            </h1>
          </div>
        </Link>

       {/** for settings */}

        <SubMenu
          label="Setting"
          className={`text-xl font-bold z-40 -my-3 -ms-1 ${
            pathname === "/profile"
              ? "text-[#1570EF]"
              : pathname === "/prefrenceNotification"
              ? "text-[#1570EF]"
              : pathname ==="/bankandtransaction"
              ? "text-[#1570EF]"
              : ""
          }`}
          icon={
            <AiFillSetting
              className="text-5xl pl-3"
              style={
                pathname == "/profile"
                  ? { color: "#1570EF" }
                  : pathname == "/prefrenceNotification"
                  ? { color: "#1570EF" }
                  : pathname == "/bankandtransaction"
                  ? { color: "#1570EF" }
                  : ""
              }
            />
          }
        >
          <Link
            className="z-40 py-2 text-base flex justify-between  mx-3"
            href="/profile"
          >
            <p className="text-sm ms-10 text-black">Admin Profile</p>
            <img
              className=""
              src="/Image/SidebarImage/rightarrow.png"
              style={{ width: "10px", height: "20px" }}
              alt="icon"
            />
          </Link>
          <Link
            className=" z-40 py-2 text-base flex justify-between mx-3"
            href="/prefrenceNotification"
          >
            <p className="text-sm ms-10 text-black">Change Password</p>
            <img
              className="my-auto"
              src="/Image/SidebarImage/rightarrow.png"
              style={{ width: "10px", height: "20px" }}
              alt="icon"
            />
          </Link>
          <Link
            className=" z-40 py-2 text-base flex justify-between mx-3"
            href="/bankandtransaction"
          >
            <p className="text-sm ms-10 text-black">Bank & Transactions</p>
            <img
              className="my-auto"
              src="/Image/SidebarImage/rightarrow.png"
              style={{ width: "10px", height: "20px" }}
              alt="icon"
            />
          </Link>
        </SubMenu>

        <Link href="/">
          <div className="flex my-6">
            <div className="ms-7 me-3">
              <BiLogOut
                className="text-2xl"
                style={pathname == "/" ? { color: "#1570EF" } : ""}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/" ? "text-[#1570EF]" : ""
              }`}
            >
              Logout
            </h1>
          </div>
        </Link>
        
      </Menu>
    </Sidebar>
  );
};

export default Sidebar1;
