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




    const userViews = userviewsList.map((userViews)=>(userViews.username));
    console.log(userViews);
}