import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout"


const notification = () => {

    const [noti, setNoti] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = noti * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = noti?.info?.slice(0, 20);
    const npage = Math.ceil(noti?.info?.length / recordsPerPage);
    const numbers = Array.from({ length: npage }, (_, i) => i + 1);

    function prePage() {
        if (noti !== 1) {
            setNoti(noti - 1)
        }
    }
    function changePage(id) {
        setNoti(id)
    }
    function nextPage() {
        if (noti !== npage) {
            setNoti(noti + 1)
        }
    }


    useEffect(() => {

        const fetchnotification = async () => {
            try {
                const response = await fetch("/notification/notification.json");
                const jsonData = await response.json();
                setNoti(jsonData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchnotification();

    }, []);




    return (
        <div className="w-full">
            <div className="flex justify-between mx-5 my-5">
                <h1 className="text-md font-semibold">Today</h1>
                <Link href="#" className="text-[#E97208]">Clear All</Link>
            </div>

            <div className=" mx-3 rounded-xl">

                {noti?.info ?.map((item, index) => (

                    <div key={item.id} className="mx-5  my-5 ">
                        <li className="bg-white my-2">{item.info}</li>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Layout(notification)
