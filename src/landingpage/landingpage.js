import TextField from "@mui/material/TextField";
import { React, useState } from "react";
import './landingpage.css';
import './pharmaviews';
import Pharmaviews from "./pharmaviews";

const Searchdrugs =() => {
   
    return(
      <div className='main'>
       <div className='searchbar'>
         <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search"
          className='searchtextfield'
        />
       </div>
       <div className="signin">
          <button type='button' className="btn btn-primary">
            Sign In
          </button>
        </div>
        <Pharmaviews />
       </div>
    );
}

export default Searchdrugs;