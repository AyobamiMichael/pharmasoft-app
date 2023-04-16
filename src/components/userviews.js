import React, { Component } from "react";
import React, { useState, useEffect, useRef } from 'react';


const Getuserviews = () =>{
    const [userviewsList, setuserViews] = useState([]);

    useEffect(()=>{
        fetch('http://54.89.82.209:4000/userviews', {

        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data, "userViewsData");
            result = data.data.username
            setuserViews(result);
        });

    }, [])
     
    console.log(userviewsList);
    const userViews = userviewsList.map((userViews)=>(userViews.username));
    //console.log(userViews) 
    

    return (
       <div>
       </div>
    )
}

export default Getuserviews;