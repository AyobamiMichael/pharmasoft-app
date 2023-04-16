import RegisterPharmacy from "../pharmacy/registerpharmacy";
import Navbar from "./sidenavbar/Navbar";
import ViewDrugs from "../drugs/viewdrugs";
import SelectPharmacy from "../pharmacy/selectpharmacy";
import React, { useState, useEffect, useRef } from 'react';



const UserDetails =() =>{

     const [username, setUname] = useState('');

     const [userviewsList, setuserViews] = useState([]);

     useEffect(()=>{
         fetch('http://54.89.82.209:4000/userviews', {
   
         })
         .then((res)=> res.json())
         .then((data)=>{
             console.log(data, "userViewsData");
            // result = data.data.username
             setuserViews(data.data);
            
         });
   
     }, [])
      
      // console.log(userviewsList);
       const userViews = userviewsList.map((userViews)=>(userViews.username));
       console.log(userViews);
        

     useEffect(()=>{
     
      fetch('http://54.89.82.209:4000/userData',{

        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token")
         
        }),

      })
       .then((res) => res.json())
       .then((data) =>{
         console.log(data.data.uname);
         setUname(data.data.uname);
         window.localStorage.setItem('userdata', JSON.stringify(data.data))           
       });

  }, [])

  var resultViews = [];
  var result = userViews.includes(username);
  console.log(result);

  var numberOfViews = 0;
   if(result){
    resultViews = userViews.filter((views) =>(
            username === views))
            numberOfViews = resultViews.length;
   }else{
        numberOfViews = 0;
   }
   console.log(resultViews);
   
   return(
    <>
    <Navbar />
      
    <div>
      Welcome <h1>{username}</h1> 
     
    </div>
    <div>
      Number of views <h1>{numberOfViews}</h1>
    </div>
    </>
   )
}

export default UserDetails;


