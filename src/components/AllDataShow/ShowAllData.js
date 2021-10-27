import React, { useEffect, useState } from 'react';
import Table from 'rc-table';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
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
const AllDataShow = () => {
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
          title: 'Book',
          dataIndex: '',
          key: 'operations',
          render: (value) => <button  onClick={() =>deleteData(value)} >Book</button>,
        //   render: (value) => <h6 onClick={() =>deleteData(value)}>Return</h6>,
        },
        // {
        //   title: 'Return',
        //   dataIndex: '',
        //   key: 'operations',
        //   render: (value) => <button onClick={() =>deleteData(value)}>Return</button>,
        // //   render: (value) => <h6 onClick={() =>deleteData(value)}>Return</h6>,
        // },
      ];
      
      const data = [
        {
            "code":"p1",
            "name":"Air Compressor 12 GAS",
            "type":"plain",
            "availability":"true",
            "needing_repair":"false",
            "durability":3000,
            "max_durability":3000,
            "mileage":null,
            "price": 4500,
            "minimum_rent_period":1
          },
          {
            "code":"p2",
            "name":"Air Compressor 5 Electric",
            "type":"plain",
            "availability":"true",
            "needing_repair":"false",
            "durability":1500,
            "max_durability":2000,
            "mileage":null,
            "price": 6500,
            "minimum_rent_period":1
          },
          {
            "code":"p3",
            "name":"Dia Blade 14 inch",
            "type":"plain",
            "availability":"true",
            "needing_repair":"false",
            "durability":40000,
            "max_durability":50000,
            "mileage":null,
            "price": 3000,
            "minimum_rent_period":2
          },
          {
            "code":"p4",
            "name":"Copper Blade 5 inch",
            "type":"plain",
            "availability":"false",
            "needing_repair":"true",
            "durability":0,
            "max_durability":2000,
            "mileage":null,
            "price": 200,
            "minimum_rent_period":2
          },
          {
            "code":"p5",
            "name":"Copper Blade 5 inch",
            "type":"plain",
            "availability":"false",
            "needing_repair":"true",
            "durability":0,
            "max_durability":2000,
            "mileage":null,
            "price": 200,
            "minimum_rent_period":2
          },
          {
            "code":"p6",
            "name":"Copper Blade 8 inch",
            "type":"plain",
            "availability":"true",
            "needing_repair":"false",
            "durability":1500,
            "max_durability":2000,
            "mileage":null,
            "price": 300,
            "minimum_rent_period":2
          },
          {
            "code":"p7",
            "name":"Beam Clamp",
            "type":"plain",
            "availability":"true",
            "needing_repair":"false",
            "durability":15000,
            "max_durability":20000,
            "mileage":null,
            "price": 800,
            "discount": 2800,
            "minimum_rent_period":30
          },
          {
            "code":"p8",
            "name":"Beam Clamp",
            "type":"plain",
            "availability":"true",
            "needing_repair":"false",
            "durability":10000,
            "max_durability":20000,
            "mileage":null,
            "price": 800,
            "minimum_rent_period":30
          },
          {
            "code":"p9",
            "name":"Beam Clamp",
            "type":"plain",
            "availability":"false",
            "needing_repair":"false",
            "durability":5000,
            "max_durability":20000,
            "mileage":null,
            "price": 800,
            "discount": 2800,
            "minimum_rent_period":30
          },
          {
            "code":"m1",
            "name":"Boom lift 40",
            "type":"meter",
            "availability":"true",
            "needing_repair":"false",
            "durability":4000,
            "max_durability":8000,
            "mileage":10000,
            "price": 1000,
            "minimum_rent_period":4
          },
          {
            "code":"m2",
            "name":"Boom lift 60",
            "type":"meter",
            "availability":"true",
            "needing_repair":"false",
            "durability":8000,
            "max_durability":10000,
            "mileage":5000,
            "price": 1500,
            "minimum_rent_period":4
          },
          {
            "code":"m3",
            "name":"Boom lift 80",
            "type":"meter",
            "availability":"false",
            "needing_repair":"true",
            "durability":500,
            "max_durability":12000,
            "mileage":200,
            "price": 2000,
            "minimum_rent_period":2
          },
          {
            "code":"m4",
            "name":"Boom lift 100",
            "type":"meter",
            "availability":"true",
            "needing_repair":"false",
            "durability":4000,
            "max_durability":12000,
            "mileage":8500,
            "price": 2500,
            "minimum_rent_period":2
          },
          {
            "code":"m5",
            "name":"Boom lift 20",
            "type":"meter",
            "availability":"true",
            "needing_repair":"false",
            "durability":1200,
            "max_durability":8000,
            "mileage":600,
            "price": 500,
            "minimum_rent_period":1
          },
          {
            "code":"m6",
            "name":"Boom lift 20",
            "type":"meter",
            "availability":"true",
            "needing_repair":"false",
            "durability":8000,
            "max_durability":8000,
            "mileage":0,
            "price": 500,
            "minimum_rent_period":1
          },
          {
            "code":"m7",
            "name":"Boom lift 20",
            "type":"meter",
            "availability":"true",
            "needing_repair":"false",
            "durability":5000,
            "max_durability":8000,
            "mileage":1200,
            "price": 500,
            "minimum_rent_period":1
          },
          {
            "code":"m8",
            "name":"Boom lift 40",
            "type":"meter",
            "availability":"true",
            "needing_repair":"false",
            "durability":8000,
            "max_durability":10000,
            "mileage":2500,
            "price": 1000,
            "minimum_rent_period":2
          }
      ];
      const [todayDate, settodayDate] = useState();
      const [columnsData, setcolumnsData] = useState();
      useEffect(() => {
        setcolumnsData(data)
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 
        
        if(mm<10) 
        {
            mm='0'+mm;
        } 
        today =yyyy+'-'+ mm+'-'+dd;
        settodayDate(today)
      }, [])
      const [bookModal , setBookModal] = useState(false)
      const [bookModalData , setBookModalData] = useState()
      const [fromDate, setFromDate] = useState();
      const [toDate, setToDate] = useState();
      const [bookTotalCost, setBookTotalCost] = useState();
      const [bookModalLast, setbookModalLast] = useState();
      const [totalDay, setTotalDay] = useState();
      const deleteData =(value)=>{
            setBookModalData(value)
            setBookModal(true)
      }
      const handleCloseBookModal = ()=>{
        setBookModal(false)
      }
      const handleCloseBookModallast = ()=>{
        setbookModalLast(false)
      }
      const FromDate = (e)=>{
        setFromDate(e.target.value)
      }
      const ToDate = (e)=>{
        setToDate(e.target.value)
      }
      const handleBook = (value)=>{
          const date1 = new Date(fromDate);
          const date2 = new Date(toDate);
          const oneDay = 1000 * 60 * 60 * 24;
          const diffInTime = date2.getTime() - date1.getTime();
          const diffDays = Math.round(diffInTime / oneDay) + 1;
          setTotalDay(diffDays)
            if(value.availability=='true'){
                if(diffDays >=value.minimum_rent_period ){
                    let totalCost;
                      if(diffDays >value.minimum_rent_period){
                          if(value.discount){
                            totalCost = diffDays * value.price - value.discount
                          }else{
                            totalCost = diffDays * value.price
                          }
                      }else{
                         totalCost = diffDays * value.price
                      }
                    setBookTotalCost(totalCost)
                    handleCloseBookModal()
                    setbookModalLast(true)
                  }else{
                      alert("Please select Minimum Rent Period")
                  }
              }else{
                alert("This Product is not available")
              }         
      }
      const handleBookLast = (value)=>{
        if (localStorage.getItem("book") != null) {
            let word = JSON.parse(localStorage.getItem("book"));
              const newObj = {
                ...value,
                totalCost:bookTotalCost,
                totalRentDays:totalDay,
                fromDate:fromDate,
                toDate:toDate,
              }
            let newItems = [...word,newObj];        
            saveWordtToSession(newItems)
            Swal.fire(
              'Thanks!',
              'Booked Successfully',
              'success'
            ) 
           
        }else{
          let bookArray =[]
          const newObj = {
            ...value,
            totalCost:bookTotalCost,
            totalRentDays:totalDay,
            fromDate:fromDate,
            toDate:toDate,
          }
            let addWord = bookArray.push(newObj)
            Swal.fire(
                'Thanks!',
                'Booked Successfully',
                'success'
              )
            saveWordtToSession(bookArray)
        }
        setbookModalLast(false)
      }
      const saveWordtToSession = (book) => {
        if(book.length===0){
            clearWordFromSession();
        }else{
          localStorage.setItem("book", JSON.stringify(book));
        }
      }
      const clearWordFromSession = () => {
        localStorage.removeItem("book");
      }
      const handleNameSearch = (e) => {
        if (e.target.value.length > 2) {
                let allWord = columnsData
                let searchBasedWord = allWord.filter((el) => {
                    let wordType = el.name?.toLowerCase();
                    let search = e.target.value.toLowerCase();
                    return (
                        wordType?.includes(search)
                    );
                });
                setcolumnsData(searchBasedWord);
            
        } else {
            setcolumnsData(data);
        }
    };
      const handleCodeSearch = (e) => {       
        if (e.target.value.length >= 1) {
                let allWord = columnsData
                let searchBasedWord = allWord.filter((el) => {
                    let wordType = el.code?.toLowerCase();
                    let search = e.target.value.toLowerCase();
                    return (
                        wordType?.includes(search)
                    );
                });
                setcolumnsData(searchBasedWord);
            
        } else {
            setcolumnsData(data);
        }
    };
      const handleAvailablitySearch = (e) => {       
        if (e.target.value.length >= 1) {
                let allWord = columnsData
                let searchBasedWord = allWord.filter((el) => {
                    let wordType = el.availability?.toLowerCase();
                   
                    let search = e.target.value.toLowerCase();
                    return (
                        wordType?.includes(search)
                    );
                });
                setcolumnsData(searchBasedWord);
            
        } else {
            setcolumnsData(data);
        }
    };

    return (
        <>
        <input type="serach" placeholder="Name Search" onChange={handleNameSearch}/>
        <input type="serach" placeholder="Code Search" onChange={handleCodeSearch}/>
        <input type="serach" placeholder="Availablity Search" onChange={handleAvailablitySearch}/>
        <Table columns={columns} data={columnsData} />
       <Modal
        isOpen={bookModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>Book a Product </h3>
        <h4>{bookModalData?.name}/{bookModalData?.code}</h4>
        <p>Needing Repair :  {bookModalData?.Needing_repair}</p>
        <p>Durability : {bookModalData?.durability}</p>
        <p>Mileage : {bookModalData?.mileage}</p>
        <p>Minimum Rent Period : {bookModalData?.minimum_rent_period}</p>
        <p>Price : {bookModalData?.price}</p>
        From
        <input type="date" min={todayDate} onChange={(e)=>FromDate(e)}/>
        To
        <input type="date" min={todayDate} onChange={(e)=>ToDate(e)}/>
        <br/>
        <button onClick={() =>handleCloseBookModal()}>No</button>
        <button onClick={() =>handleBook(bookModalData)}>Yes</button>
      </Modal>
       <Modal
        isOpen={bookModalLast}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>Book a Product </h3>
        <h4>Your Estimated Price is {bookTotalCost} </h4>
        
        <br/>
        <button onClick={() =>handleCloseBookModallast()}>No</button>
        <button onClick={() =>handleBookLast(bookModalData)}>Yes</button>
      </Modal>
        </>
    );
};

export default AllDataShow;