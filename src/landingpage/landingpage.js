import TextField from "@mui/material/TextField";
import { React, useState } from "react";
import './landingpage.css';

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
       </div>
    );
}

export default Searchdrugs;