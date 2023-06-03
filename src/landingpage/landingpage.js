import React, { Component } from 'react';
import TextField from "@mui/material/TextField";
import './landingpage.css';

const Searchdrugs =() => {
   
    return(
       <div className='searchbar'>
         <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search"
          className='searchtextfield'
        />
       </div>
    );
}

export default Searchdrugs;