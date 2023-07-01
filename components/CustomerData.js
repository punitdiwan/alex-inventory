import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';


const CustomerData = () => {

    const [ourcustomer, setOurcustomer] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [loading, setLoading] = useState(false);

    // *************Featch data from API****************
    // const datac = {
    //     cardData: [
    //         { id: "1",fullName:"Johnny Depp",address:"3093 Cheshire Road",contact:"+971 21456320",serviceDate:"28/05/2023",serviceAssigned:"John Cooper",wallet:"IQD 100.25",serviceStatus:"Completed",payment:"Success" },
    //         { id: "2",fullName:"Johnny Depp",address:"3093 Cheshire Road",contact:"+971 21456320",serviceDate:"28/05/2023",serviceAssigned:"John Cooper",wallet:"IQD 100.25",serviceStatus:"Completed",payment:"Success"},
    //         { id: "3",fullName:"Johnny Depp",address:"3093 Cheshire Road",contact:"+971 21456320",serviceDate:"28/05/2023",serviceAssigned:"John Cooper",wallet:"IQD 100.25",serviceStatus:"Completed",payment:"Failed"},
    //         { id: "4",fullName:"Johnny Depp",address:"3093 Cheshire Road",contact:"+971 21456320",serviceDate:"28/05/2023",serviceAssigned:"John Cooper",wallet:"IQD 100.25",serviceStatus:"Completed",payment:"Pending"},
    //         { id: "5",fullName:"Johnny Depp",address:"3093 Cheshire Road",contact:"+971 21456320",serviceDate:"28/05/2023",serviceAssigned:"John Cooper",wallet:"IQD 100.25",serviceStatus:"Completed",payment:"Success"},
    //         { id: "6",fullName:"Johnny Depp",address:"3093 Cheshire Road",contact:"+971 21456320",serviceDate:"28/05/2023",serviceAssigned:"John Cooper",wallet:"IQD 100.25",serviceStatus:"Completed",payment:"Success"},
    //         { id: "7",fullName:"Johnny Depp",address:"3093 Cheshire Road",contact:"+971 21456320",serviceDate:"28/05/2023",serviceAssigned:"John Cooper",wallet:"IQD 100.25",serviceStatus:"Completed",payment:"Pending"},

    //     ]
    // }


    useEffect(() => {

        const fetchOurCustomer = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://www.mamtismamas.com/api/customer/allCustomer")
                const jsonData = await response.json()
                console.log(jsonData, "customer_data")
                setOurcustomer(jsonData);
            } catch (err) {
                console.log(err)
            }
            setLoading(false);
        }
        fetchOurCustomer();

    }, []);



    // *************map data from featched data****************
    const data = ourcustomer?.map((item, index) => ({
        serialNumber: index + 1,
        fullName: item.fullName || item.username,
        address: item.address || "address",
        contact: item.contact || "contact",
        serviceDate: item.serviceDate || "serviceDate",
        serviceAssigned: item.serviceAssigned || "serviceAssigned",
        wallet: item.wallet || "wallet",
        serviceStatus: item.serviceStatus || "serviceStatus",
        payment: item.payment || "payment",
    }));


    // *************map data from featched data****************
    const columns = [
        { name: "S.No.", selector: (_, index) => index + 1, sortable: true, },
        { name: "Customer Name", selector: row => row.fullName, sortable: true,  },
        { name: "Address", selector: row => row.address, sortable: true },
        { name: "Contact No.", selector: row => row.contact, sortable: true, },
        { name: "Service Date", selector: row => row.serviceDate, sortable: true },
        { name: "Assigned", selector: row => row.serviceAssigned, sortable: true },
        { name: "Wallet", selector: row => row.wallet, sortable: true },
        { name: "Status", selector: row => row.serviceStatus, sortable: true },
        { name: "Payment", selector: row => row.payment, sortable: true },
    ];

    // *************filter data****************

    const filteredItems = data.filter(
        item => item.fullName.toLowerCase().includes(filterText.toLowerCase())
    );
    const subHeaderComponentMemo = React.useMemo(() => {
        return (
            <input
                className='rounded-lg border border-green-800 focus:ring-2 focus:ring-green-800 focus:border-green-800'
                type="text"
                placeholder="Filter by name"
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
            />

        );
    }, [filterText]);


    // *************title of data****************
    const title = React.useMemo(() => {
        return (
            <div className="">
                <h1 className='text-2xl font-bold '>Customer Details</h1>
            </div>
        )

    })


    return (
        <div>


            <div className="ease-in duration-300 overflow-x-auto pt-5">
              

                <DataTable
                    title={title}
                    columns={columns}
                    data={filteredItems}
                    progressPending={loading}
                    // selectableRows
                    highlightOnHover
                    pointerOnHover
                    // theme='dark'
                    responsive
                    pagination
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                />

            </div>

        </div>
    )
}

export default CustomerData
