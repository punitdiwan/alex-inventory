import React, { useState, useEffect } from "react";
import Link from "next/link";

const Topchefsdata = () => {

    const [isOpen, setIsOpen] = useState(false);

    // const [revenue, setRevenue] = useState([]);

    const [ourchef, setOurchef] = useState([]);



    useEffect(() => {

       

        const fetchOurCheff = async () => {
            try {
                const response = await fetch("https://www.mamtismamas.com/api/cheff/allChefs")
                const jsonData = await response.json()
                // console.log(jsonData, "data")
                setOurchef(jsonData);
            } catch (err) {
                console.log(err)
            }
        }

        
        fetchOurCheff();
    }, []);



    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const defaultImage =
        "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";






    return (
        <>

            <div className={`flex flex-col mx-auto ease-in duration-300 ${isOpen ? "hidden" : ""}`} >
                <div className="h-64 mb-5 overflow-y-scroll shadow-gray-300 shadow-lg rounded-lg flex flex-col justify-between items-center bg-white ">
                    <span className="py-3 w-full h-16 sticky top-0 shadow-lg bg-white mb-2">
                        <div className="flex justify-between mx-7">
                            <p className="font-semibold">Top Chefs</p>

                            <Link href="#" className="text-green-700 text-xs my-1 hover:underline">
                                See More
                            </Link>
                        </div>

                        <h1 className="text-xs mt-1 flex justify-end me-3">Rating & Reviews</h1>
                    </span>


                    {ourchef?.map((item) => (
                        <div key={item.id} className="flex justify-between items-center bg-white h-10 mb-3 py-6 px-3 w-80">

                            <div className="flex">

                                <div className="h-12 overflow-hidden rounded-md me-1">
                                    <img className="h-full" src={item.profile_image || defaultImage} width="50px" height="50px" />

                                </div>

                                <div>
                                    <p className="font-bold text-xs my-2">
                                        {item.fullName || item.username}
                                        <br />
                                        <span className="text-xs font-normal">
                                            {item.country}
                                        </span>
                                    </p>
                                </div>

                            </div>


                            <div className="">
                                <h1 className="text-xs">5 Out of {item.outOfrev || "0"}</h1>    {/* 5 out No. of Reviews */}
                                <div className="flex">

                                    <img src={item.rating} width={15} height={15} />  {/*No. of Stars */}
                                    <img src={item.rating} width={15} height={15} />
                                    <img src={item.rating} width={15} height={15} />
                                    <img src={item.rating} width={15} height={15} />
                                    <img src={item.rating} width={15} height={15} />

                                </div>
                                <h1 className="text-xs font-semibold">{item.review || "0"} Reviews</h1>   {/* No. of Reviews */}
                            </div>


                        </div>
                    ))}



                </div>

                <div className="h-56 overflow-y-scroll shadow-gray-300 shadow-lg rounded-lg flex flex-col justify-between items-center bg-white  ">
                    <span className="py-3 w-full flex justify-between px-4 h-11 sticky top-0 shadow-lg bg-white mb-2">
                        <p className="font-semibold">This Month</p>
                        {/* <p className="font-semibold">Earnings</p> */}

                        <Link href="#" className="text-green-700 text-xs my-1">
                            See More
                        </Link>
                    </span>


                    {ourchef?.map((item) => (
                        <div key={item.id} className="flex justify-between items-center bg-white h-10 mb-2 py-6	px-3 w-80">

                            <div className="flex">

                                <div className="h-12 overflow-hidden rounded-md me-1">
                                    <img className="h-full" src={item.profile_image || defaultImage} width="50px" height="50px" />

                                </div>
                                <p className="font-bold text-xs my-2">
                                    {item.fullName || item.username}
                                    <br />
                                    <span className="text-xs font-normal">
                                        {item.country}
                                    </span>
                                </p>

                            </div>

                            <p className="text-md font-semibold">&euro; {item.total_earnings || "0.00"}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
      /* Customize the scrollbar */
      .overflow-y-scroll::-webkit-scrollbar {
        width: 5px; /* width of the scrollbar */
      }
      .overflow-y-scroll::-webkit-scrollbar-track {
        background: #f1f1f1; /* color of the scrollbar track */
      }
      .overflow-y-scroll::-webkit-scrollbar-thumb {
        background-color: #888; /* color of the scrollbar thumb */
        border-radius: 5px; /* roundness of the scrollbar thumb */
      }
      .overflow-y-scroll::-webkit-scrollbar-thumb:hover {
        background-color: #888; /* color of the scrollbar thumb on hover */
      }
    `}
            </style>
        </>
    )
}

export default Topchefsdata
