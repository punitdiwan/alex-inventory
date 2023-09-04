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


const logout = () => {
  return (
    <div>
        
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
  )
}

export default logout