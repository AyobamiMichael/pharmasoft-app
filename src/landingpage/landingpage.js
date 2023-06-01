import React, { Component } from 'react';
import TextField from "@mui/material/TextField";

const Searchdrugs =() => {
   
    return(
       <div className='drugsearchbar'>
           <h1>Search</h1>
           <div className='searchbar'>
            <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"
            />
           </div>
           <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Register Pharmacy
          </button>
        </div>
       </div>  
    );
}

export default Searchdrugs;