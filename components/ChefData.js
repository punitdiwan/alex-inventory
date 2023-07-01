import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

const ChefData = () => {

    const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

    const [isHydrated, setIsHydrated] = useState(false);

    const [ourchef, setOurchef] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newusername, setUsername] = useState({
        username: "",
        Email: ""
    })
    const [toggleState, setToggleState] = useState({});




    useEffect(() => {

        const fetchOurCheff = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://www.mamtismamas.com/api/cheff/allChefs")
                const jsonData = await response.json()
                // console.log(jsonData, "data")
                setOurchef(jsonData);
            } catch (err) {
                console.log(err)
            }
            setLoading(false);
        }
        fetchOurCheff();
    }, []);


    const data = ourchef?.map((item, index) => ({
        serialNumber: index + 1,
        id: "#200" + item.id,
        fullName: item.fullName || item.username,
        username: item.username,
        Email: item.Email,
        country: item.country || "Not Mentioned",
        define_as: item.define_as || "User",
        created_at: item.created_at.split('T')[0],
        // isActive: item.isActive,
        isActive: item.isActive === null ? true : item.isActive,
    }));


    const columns = [
        { name: "S.No.", selector: (_, index) => index + 1, sortable: true },
        { name: "ID", selector: row => row.id, sortable: true },
        { name: "Chef Name", selector: row => row.fullName, sortable: true },
        { name: "Country", selector: row => row.country, sortable: true },
        { name: "Service Type", selector: row => row.define_as, sortable: true },
        { name: "Joining Date", selector: row => row.created_at, sortable: true },
        // { name: "isActive", selector: row => row.isActive, sortable: true },
        {
            name: 'Actions',
            cell: (row) =>
                <div className='flex justify-between'>

                    <button
                        disabled={row.isActive}
                        className='btn btn-xs text-[8px] font-semibold text-green-800 bg-amber-500 hover:text-white border border-amber-500 mx-1'
                        onClick={() => handleEnable(row)}>ENABLE
                    </button>

                    {/* <label
                        htmlFor="my-modal"
                        disabled={!row.isActive}
                        className="btn btn-xs text-[8px] font-semibold text-green-800 bg-amber-500 hover:text-white border border-amber-500 mx-1">
                        DISABLE
                    </label> */}

                    <button
                        disabled={!row.isActive}
                        className='btn btn-xs text-[8px] font-semibold text-green-800 bg-amber-500 hover:text-white border border-amber-500 mx-1'
                        onClick={() => handleDisable(row)}>DISABLE
                    </button>


                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <label
                                htmlFor="my-modal"
                                className="btn btn-sm btn-circle absolute right-2 top-2 bg-white text-black hover:text-white"
                            >
                                ✕
                            </label>

                            <h3 className="font-bold text-lg text-center mt-5">
                                Do you Really wvvant to block this Chef?
                            </h3>

                            <div className="modal-action justify-center mb-5">
                                <button
                                    disabled={!row.isActive}
                                    onClick={() => handleDisable(row)}
                                    className="btn btn-ghost bg-white border border-amber-500 rounded-full hover:bg-green-800 hover:text-white mx-5 px-10">
                                    YES
                                </button>
                                <label
                                    htmlFor="my-modal"
                                    className="btn btn-ghost bg-amber-500 border border-amber-500 rounded-full hover:bg-green-800 hover:text-white mx-5 px-11"

                                >
                                    NO
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

        },

    ];
    const handleEnable = async (row) => {
        console.log(row.username)
        console.log(row.Email)

        const registerdata = {
            username: row.username,
            Email: row.Email
        }

        try {
            const response = await fetch("https://www.mamtismamas.com/api/enable", {
                method: "POST",
                body: JSON.stringify(registerdata)
            });

            const data = await response.json();
            // console.log(data, "dataenable");
            window.location.reload(); // Reload the page
        } catch (error) {
            console.log(error);
        }
    };


    const handleDisable = async (row) => {
        console.log(row.username)
        console.log(row.Email)

        const registerdata = {
            username: row.username,
            Email: row.Email
        }

        try {
            const response = await fetch("https://www.mamtismamas.com/api/disable", {
                method: "POST",
                body: JSON.stringify(registerdata)
            });

            const data = await response.json();
            // console.log(data, "datadibable");
            window.location.reload(); // Reload the page
        }
        catch (error) {
            console.log(error)
        }
    };


    // ******************filter data *****************

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

    // ******************filter data *****************

    const paginationComponentOptions = {
        rowsPerPageText: 'Rows per page',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All',
    };

    const title = React.useMemo(() => {
        return (
            <div>
                <h1 className='text-2xl font-bold '>Chef Status</h1>
            </div>
        )

    })

    return (
        <>

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
                // customStyles={{ headCells: {
                //       style: {
                //         textAlign: 'center',
                //         display:"flex",
                //         justifyContent:"center"
                //       },
                //     },
                //   }}
                pagination
                paginationComponentOptions={paginationComponentOptions}
                paginationPerPage={5}
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
            />



            {/* The button to open modal */}
            {/* <label htmlFor="my-modal" className="btn btn-xs text-[8px] font-semibold text-green-800 bg-amber-500 hover:text-white border border-amber-500 mx-1">
                        DISABLE
                    </label> */}

            {/* Put this part before </body> tag */}
            {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label
                        htmlFor="my-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2 bg-white text-black hover:text-white"
                    >
                        ✕
                    </label>

                    <h3 className="font-bold text-lg text-center mt-5">
                        Do you Really want to block this Chef?
                    </h3>

                    <div className="modal-action justify-center mb-5">
                        <button onClick={() => handleDisable(row)} className="btn btn-ghost bg-white border border-amber-500 rounded-full hover:bg-green-800 hover:text-white mx-5 px-10">
                            YES
                        </button>
                        <label
                            htmlFor="my-modal"
                            className="btn btn-ghost bg-amber-500 border border-amber-500 rounded-full hover:bg-green-800 hover:text-white mx-5 px-11"

                        >
                            NO
                        </label>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default ChefData
