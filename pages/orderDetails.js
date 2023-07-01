import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link';


const orderDetails = () => {
  return (
    <div className='grid grid-cols-4 gap-x-10 mx-5 w-full'>
      <div className='md:col-span-3 col-span-4 rounded-xl border border-slate-300 mx-4'>
        <h1 className='font-semibold text-xl text-[#E97208] mx-auto text-center mt-3 mb-2'>Customer Order & Delivery Details</h1>


        <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-5 mx-auto  px-10 pb-2">

          <div className="">

            <p className="mb-2 text-base font-medium">Order ID</p>
            <input type="text" placeholder="Order ID" className="input h-9 input-bordered focus:ring-1 focus:ring-[#E97208] focus:border-[#E97208] w-full" />
          </div>

          <div className="">

            <p className="mb-2 text-base font-medium">Full Name</p>
            <input type="text" placeholder="Full Name" className="input h-9 input-bordered focus:ring-1  focus:ring-[#E97208] focus:border-[#E97208] w-full " />
          </div>


          <div className="-mt-2">

            <p className="mb-2 text-base font-medium">Email</p>
            <input type="email" placeholder="Email" className="input h-9 input-bordered focus:ring-1  focus:ring-[#E97208] focus:border-[#E97208] w-full  " />
          </div>

          <div className="-mt-2">

            <p className="mb-2 text-base font-medium">Mobile No.</p>
            <input type="number" placeholder="Mobile No." className="input h-9 input-bordered focus:ring-1  focus:ring-[#E97208] focus:border-[#E97208] w-full " />
          </div>

          <div className="-mt-2">

            <p className="mb-2 text-base font-medium">Order Item</p>
            <input type="text" placeholder="Order Item" className="input h-9 input-bordered focus:ring-1  focus:ring-[#E97208] focus:border-[#E97208] w-full " />
          </div>

          <div className="-mt-2">

            <p className="mb-2 text-base font-medium">Items Qty.</p>
            <select className="input h-9 input-bordered focus:ring-1  focus:ring-[#E97208] focus:border-[#E97208] w-full ">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
          </div>



          <div className="-mt-2">

            <p className="mb-2 text-base font-medium">Ordering Date & Time</p>
            <div className="flex">
              <input type="text" placeholder="Date" className="input h-9 input-bordered focus:ring-1 focus:ring-green-800 focus:border-green-800 w-full me-2" />
              <input type="text" placeholder="Time" className="input h-9 input-bordered focus:ring-1 focus:ring-green-800 focus:border-green-800 w-full ms-2" />
            </div>
          </div>

          <div className="-mt-2">

            <p className="mb-2 text-base font-medium">Order Status</p>
            <div className="flex">
              <input type="text" placeholder="Status" className="input h-9 input-bordered focus:ring-1 focus:ring-green-800 focus:border-green-800 w-full me-2" />
            </div>
          </div>

          <div className="-mt-2">

            <p className="mb-2 text-base font-medium">Payment Status</p>
            <input type="text" placeholder="Status" className="input h-9 input-bordered focus:ring-1 focus:ring-green-800 focus:border-green-800 w-full " />
          </div>

         


          <div className="-mt-2">

            <p className="mb-2 text-base font-medium">Order Completed By</p>
            <input type="text" placeholder="Name" className="input h-9 input-bordered focus:ring-1 focus:ring-green-800 focus:border-green-800 w-full " />
          </div>

          <div className="-mt-2">

            <p className="mb-2 text-base font-medium">Order Completed Date & Time</p>
            <div className="flex">
              <input type="text" placeholder="Date" className="input h-9 input-bordered focus:ring-1 focus:ring-green-800 focus:border-green-800 w-full me-2" />
              <input type="text" placeholder="Time" className="input h-9 input-bordered focus:ring-1 focus:ring-green-800 focus:border-green-800 w-full ms-2" />
            </div>
          </div>





        </div>
      </div>







    </div>
  )
}

export default Layout(orderDetails)

