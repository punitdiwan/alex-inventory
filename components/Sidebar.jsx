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
      className="hidden md:block"
    >
      <main>
        <button
          onClick={() => collapseSidebar()}
          className="hover:text-[#E97208]"
        >
          <div className="flex">
            <div className="ms-7 me-3">
              <IoIosMenu className="text-3xl " />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/dashboard" ? "text-[#E97208]" : ""
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
                style={pathname === "/dashboard" ? { color: "#E97208" } : {}}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/dashboard" ? "text-[#E97208]" : ""
              }`}
            >
              Dashboard
            </h1>
          </div>
        </Link>

        <Link href="/orders">
          <div className="flex my-6">
            <div className="ms-7 me-3">
              <AiOutlineShoppingCart
                className="text-2xl"
                style={pathname == "/orders" ? { color: "#E97208" } : ""}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/orders" ? "text-[#E97208]" : ""
              }`}
            >
              Orders
            </h1>
          </div>
        </Link>
        <Link href="/category">
          <div className="flex my-6">
            <div className="ms-7 me-3">
              <AiOutlineLock
                className="text-2xl"
                style={pathname == "/category" ? { color: "#E97208" } : ""}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/category" ? "text-[#E97208]" : ""
              }`}
            >
              Category
            </h1>
          </div>
        </Link>
        <Link href="/customer">
          <div className="flex my-6">
            <div className="ms-7 me-3">
              <TbUsers
                className="text-2xl"
                style={pathname == "/customer" ? { color: "#E97208" } : ""}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/customer" ? "text-[#E97208]" : ""
              }`}
            >
              Customer
            </h1>
          </div>
        </Link>

        {/* <Link href="/employee">
          <div className="flex my-6">
            <div className="ms-7 me-3">
              <MdDesignServices
                className="text-2xl"
                style={pathname == "/employee" ? { color: "#E97208" } : ""}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/employee" ? "text-[#E97208]" : ""
              }`}
            >
              Employee
            </h1>
          </div>
        </Link> */}

        <Link href="/revenue">
          <div className="flex my-6">
            <div className="ms-7 me-3">
              <HiOutlineCurrencyDollar
                className="text-2xl"
                style={pathname == "/revenue" ? { color: "#E97208" } : ""}
              />
            </div>
            <h1
              className={`font-bold text-xl ${
                pathname === "/revenue" ? "text-[#E97208]" : ""
              }`}
            >
              Revenue
            </h1>
          </div>
        </Link>

        <SubMenu
          label="Setting"
          className={`text-xl font-bold z-40 -my-3 -ms-1 ${
            pathname === "/profile"
              ? "text-[#E97208]"
              : pathname === "/prefrenceNotification"
              ? "text-[#E97208]"
              : ""
          }`}
          icon={
            <AiFillSetting
              className="text-5xl pl-3"
              style={
                pathname == "/profile"
                  ? { color: "#E97208" }
                  : pathname == "/prefrenceNotification"
                  ? { color: "#E97208" }
                  : pathname == "/discountVoucher"
                  ? { color: "#E97208" }
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
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default Sidebar1;