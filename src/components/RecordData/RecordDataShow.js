import React, { useEffect, useState } from 'react';
import Table from 'rc-table';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const RecordDataShow = () => {
    const columns = [
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
            width: 200,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 300,
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            width: 200,
        },
        {
            title: 'Availability',
            dataIndex: 'availability',
            key: 'availability',
            width: 200,
        },
        {
            title: 'Needing_repair',
            dataIndex: 'needing_repair',
            key: 'needing_repair',
            width: 200,
        },
        {
            title: 'Durability',
            dataIndex: 'durability',
            key: 'durability',
            width: 200,
        },
        {
            title: 'Max_durability',
            dataIndex: 'max_durability',
            key: 'max_durability',
            width: 200,
        },
        {
            title: 'Mileage',
            dataIndex: 'mileage',
            key: 'mileage',
            width: 200,
        },
        {
            title: 'minimum_rent_period',
            dataIndex: 'minimum_rent_period',
            key: 'minimum_rent_period',
            width: 200,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            width: 200,
        },
        {
            title: 'Total Rent Days',
            dataIndex: 'totalRentDays',
            key: 'totalRentDays',
            width: 200,
        },
        {
            title: 'Total Cost',
            dataIndex: 'totalCost',
            key: 'totalCost',
            width: 200,
        },

        // {
        //   title: 'Book',
        //   dataIndex: '',
        //   key: 'operations',
        //   render: (value) => <button  onClick={() =>deleteData(value)} >Book</button>,
        // //   render: (value) => <h6 onClick={() =>deleteData(value)}>Return</h6>,
        // },
        {
            title: 'Return',
            dataIndex: '',
            key: 'operations',
            render: (value) => <button onClick={() => returnBook(value)}>Return</button>,
            //   render: (value) => <h6 onClick={() =>deleteData(value)}>Return</h6>,
        },
    ];
    const [bookedData, setbookedData] = useState([]);
    const [allbookedData, setallbookedData] = useState([]);
    const [todayDate, settodayDate] = useState();

    useEffect(() => {
        let book = JSON.parse(localStorage.getItem("book"));
        if (book != null) {
            setbookedData(book);
            setallbookedData(book);
        }
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd;
        settodayDate(today)
    }, [])
    const [returnModal, setreturnModal] = useState(false)
    const [returnModalData, setReturnModalData] = useState(false)
    const [returnModalDataPrice, setReturnModalDataPrice] = useState(false)
    const [totalDay, setTotalDay] = useState();
    const [returnTotalCost, setreturnTotalCost] = useState();

    const returnBook = (book) => {
        let retunBookdata = book
        var totalDecdurability;
        const date1 = new Date(book.fromDate);
        const date2 = new Date(todayDate);
        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = date2.getTime() - date1.getTime();
        const diffDays = Math.round(diffInTime / oneDay) + 1;
        setTotalDay(diffDays)
        if(diffDays > 0) {
            let totalMiles = diffDays * 10
            let totalMilesDurabilityDec = totalMiles / 10 * 2
            if (book.type == 'plain') {
                totalDecdurability = totalMilesDurabilityDec + diffDays
            } else {
                totalDecdurability = totalMilesDurabilityDec + diffDays * 2
            }
            retunBookdata.totalDecdurability = totalDecdurability
            if (retunBookdata.mileage) {
                retunBookdata.totalMiles = totalMiles + retunBookdata.mileage
            } else {
                retunBookdata.totalMiles = totalMiles
            }
            // retunBookdata.totalMiles =totalMiles + retunBookdata.mileage
            setReturnModalData(retunBookdata)
            setreturnModal(true)
        }else{
            alert("Your Rent is not stared yet")
        }
    }
    const handleCloseReturnModal = () => {
        setreturnModal(false)
    }
    const handleReturnDataPrice = (value) => {
        var totalCosttoday = totalDay * value.price
        setreturnTotalCost(totalCosttoday)
        setreturnModal(false)
        setReturnModalDataPrice(true)
    }
    const handleConfirmReturn = (value) => {
        let result = window.confirm("Do you want to delete your favourite?");
        if (result) {
            // let word = JSON.parse(localStorage.getItem("word"));
            const filterItems = bookedData.filter(p => p.code !== returnModalData.code);
            saveWordtToSession(filterItems);
            setbookedData(filterItems);
            setReturnModalDataPrice(false)

        }
    }
    const saveWordtToSession = (word) => {
        if (word.length === 0) {
            clearWordFromSession();
        } else {
            localStorage.setItem("book", JSON.stringify(word));
        }
    }

    const clearWordFromSession = () => {
        localStorage.removeItem("book");
    }
    const handleNameSearch = (e) => {
        if (e.target.value.length > 2) {
                let allWord = bookedData
                let searchBasedWord = allWord.filter((el) => {
                    let wordType = el.name?.toLowerCase();
                    let search = e.target.value.toLowerCase();
                    return (
                        wordType?.includes(search)
                    );
                });
                setbookedData(searchBasedWord);
            
        } else {
            setbookedData(allbookedData);
        }
    };
      const handleCodeSearch = (e) => {    
        if (e.target.value.length >= 1) {
                let allWord = bookedData
                let searchBasedWord = allWord.filter((el) => {
                    let wordType = el.code?.toLowerCase();
                    let search = e.target.value.toLowerCase();
                    return (
                        wordType?.includes(search)
                    );
                });
                setbookedData(searchBasedWord);
            
        } else {
            setbookedData(allbookedData);
        }
    };
    return (
        <>
         <input type="serach" placeholder="Name Search" onChange={handleNameSearch}/>
        <input type="serach" placeholder="Code Search" onChange={handleCodeSearch}/>
            <Table columns={columns} data={bookedData} />
            <Modal
                isOpen={returnModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3>Return a Product </h3>
                <h4>{returnModalData?.name}/{returnModalData?.code}</h4>
                <p>Needing Repair :  {returnModalData?.Needing_repair}</p>
                <p>Durability : {returnModalData?.durability}</p>
                <p>Durability Decresed: {returnModalData?.totalDecdurability}</p>
                <p>Mileage : {returnModalData?.mileage}</p>
                <p>Used Mileage : {returnModalData?.totalMiles}</p>
                <p>Minimum Rent Period : {returnModalData?.minimum_rent_period}</p>

                <br />
                <button onClick={() => handleCloseReturnModal()}>No</button>
                <button onClick={() => handleReturnDataPrice(returnModalData)}>Yes</button>
            </Modal>
            <Modal
                isOpen={returnModalDataPrice}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3>Book a Product </h3>
                <h4>Your Total Price is {returnTotalCost} </h4>

                <br />
                <button onClick={() => handleConfirmReturn(returnModalData)}>Confirm</button>
            </Modal>
        </>
    );
};

export default RecordDataShow;