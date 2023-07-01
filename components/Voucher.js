import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';

const Voucher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch data from API or set the data directly
        const datac = {
            cardData: [
                { id: "1", discountCode: "NEW1234", description: "Get 50% off on your 1st booking", discountType: "50%", startingDate: "28/05/2023", endingDate: "05/06/23", status: "Active", action: "..." },
                { id: "2", discountCode: "NEW5678", description: "Get 50% off on your 1st booking", discountType: "50%", startingDate: "28/05/2023", endingDate: "05/06/23", status: "Active", action: "..." },
                { id: "3", discountCode: "NEW8912", description: "Get 50% off on your 1st booking", discountType: "50%", startingDate: "28/05/2023", endingDate: "05/06/23", status: "Inactive", action: "..." },
                { id: "4", discountCode: "NEW3456", description: "Get 50% off on your 1st booking", discountType: "50%", startingDate: "28/05/2023", endingDate: "05/06/23", status: "Active", action: "..." },
            ]
        };
        const mappedData = datac?.cardData?.map((item, index) => ({
            id: item.id,
            discountCode: item.discountCode,
            description: item.description,
            discountType: item.discountType,
            startingDate: item.startingDate,
            endingDate: item.endingDate,
            status: item.status,
            action: item.action,
        }));
        setData(mappedData);
    }, []);

    const handleStatusToggle = (row) => {
        const updatedData = data.map((item) => {
            if (item.id === row.id) {
                return {
                    ...item,
                    status: item.status === "Active" ? "Inactive" : "Active",
                };
            }
            return item;
        });
        setData(updatedData);
    };

    const columns = [
        { name: "Discount Code", selector: row => row.discountCode, sortable: true },
        { name: "Description", selector: row => row.description, sortable: true },
        { name: "Discount Type", selector: row => row.discountType, sortable: true },
        { name: "Starting Date", selector: row => row.startingDate, sortable: true },
        { name: "Ending Date", selector: row => row.endingDate, sortable: true },
        {
            name: "Status",
            cell: (row) => (
                <ToggleButton
                    active={row.status === "Active"}
                    onClick={() => handleStatusToggle(row)}
                />
            ),
            sortable: true,
        },
        { name: "Action", selector: row => row.action, sortable: true },
    ];

    const title = React.useMemo(() => {
        return (
            <div className="">
                <h1 className='text-2xl font-bold '>Discount Vouchers</h1>
            </div>
        )
    })

    return (
        <div className="ease-in duration-300 overflow-x-auto pt-5 w-full">
            <DataTable
                title={title}
                columns={columns}
                data={data}
                selectableRows
                highlightOnHover
                pointerOnHover
                responsive
                pagination
                subHeader
            />
        </div>
    );
};

const ToggleButton = ({ active, onClick }) => {
    return (
        <div>
            <label className="toggle-button mx-2">
                <input type="checkbox" checked={active} onChange={onClick} />
                <span className="checkmark"></span>
            </label>
            <button className={`toggle-button ${active ? 'active' : ''}`} onClick={onClick}>
                {active ? "Active" : "Inactive"}
            </button>
        </div>

    );
};



export default Voucher;
