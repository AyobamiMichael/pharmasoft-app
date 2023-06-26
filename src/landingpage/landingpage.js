import TextField from "@mui/material/TextField";
import { React, useState, useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import './landingpage.css';
import './pharmaviews';
import Pharmaviews from "./pharmaviews";
import AllDrugsList from "./druglist";
import SignUp from '../components/signup/signup';


const Searchdrugs =() => {


  const [alldrugsList, setDrugsList] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(()=>{
    fetch('https://wegotam.com/viewalldrugs', {

    })
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data, "drugListData");
       // result = data.data.username
        setDrugsList(data);
       
    });

}, [])


const navigate = useNavigate();

const navigateToSignupPage = () => {
  
  navigate('/sign-up');
};
 console.log(alldrugsList);

 let inputHandler = (e) => {
  //convert input text to lower case
  var lowerCase = e.target.value.toLowerCase();
  setInputText(lowerCase);
};




    return(
      <div className='main'>
       <div className='searchbar'>
         <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          label="Search"
          className='searchtextfield'
          InputLabelProps={{
            style: {
               fontSize: 14
            }
          }}
          inputProps={
            {
              style:{
                 height: 20
              }
            }
          }
          
        />
       </div>
       <div className="signin">
          <button type='button' onClick={navigateToSignupPage} className="btn btn-primary">
            Sign In
          </button>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
        <AllDrugsList input={inputText}/>
       </div>
    );
}

export default Searchdrugs;