import React, { useState, useEffect, useRef } from 'react';



const Pharmaviews = () =>{

    const [phamaviewsList, setpharmaViews] = useState([]);
    const [userviewsList, setuserViews] = useState([]);


    useEffect(()=>{
        fetch('https://wegotam.com/userviews', {
  
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data, "userViewsData");
           // result = data.data.username
            setuserViews(data.data);
           
        });
  
    }, [])


    useEffect(()=>{
        fetch('https://wegotam.com/listpharmacies', {
  
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data, "pharmaciesData");
           // result = data.data.username
            setpharmaViews(data.data);
           
        });
  
    }, [])
    
   



    const userViews = userviewsList.map((userViews)=>(userViews.username));
    //const pharmalist = phamaviewsList.map((items) =>(items.pname));
    console.log(userViews);
    console.log(phamaviewsList);


   // return(
     //   <ul>
       //    {phamaviewsList.map((item) => (
         //       <li key={item._id}>{item.pname}</li>
          //  ))}
        //</ul>
    //)


}


export default Pharmaviews;