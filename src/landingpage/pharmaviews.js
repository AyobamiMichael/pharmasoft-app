import React, { useState, useEffect, useRef } from 'react';



const Pharmaviews = () =>{

    const [phamaviewsList, setpharmaViews] = useState([]);
   // const [userviewsList, setuserViews] = useState([]);
    const myList = [];
     /*
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

*/
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
    
   



 //   const userViews = userviewsList.map((userViews)=>(userViews.username));

   // const pharmalist = phamaviewsList[0].pname;
   // console.log(userViews);
   // console.log(pharmalist);
   
    console.log(phamaviewsList);

     return(
        <div>
        {phamaviewsList.map(({_id, pname, paddres}) => {
          return (
            <div key={_id}>
              <h2>Pharmacy: {pname}</h2>
              <h2>Address: {paddres}</h2>
  
              <hr />
            </div>
          );
        })}
      </div>
    )


}


export default Pharmaviews;