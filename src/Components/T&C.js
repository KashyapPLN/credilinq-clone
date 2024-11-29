import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import tick from '../assets/tick.svg';
import './t&c.css'

export default function TandC({checkTerms, setCheckTerms, selectedMonths, uploadedFiles, handleSubmit}) {
  return (
    <div className='terms-div'>
      <FormControlLabel
        control={<Checkbox />}
        sx={{color:'grey'}}
        label="By ticking, you are confirming that you have understood and are agreeing to the details mentioned:"
        disabled={selectedMonths.length!==6||uploadedFiles.length!==6}
        onChange={()=>setCheckTerms(!checkTerms)}
      />
      <ul className='mt-4'>
        <li>
        <img src={tick} alt="Tick icon" className="tick-icon" />
        <span>I confirm that I am the authorized person to upload bank statements on behalf of my company</span>
        </li>
      <li>
      <img src={tick} alt="Tick icon" className="tick-icon" /><span>I assure you that uploaded bank statements and provided company information match and are of the same company,
        if there is a mismatch then my report will not be generated</span></li>
         <li>
         <img src={tick} alt="Tick icon" className="tick-icon" />
        <span>I understand that this is a general report based on the bank statements and Credilinq is not providing a solution or guiding me for my business growth</span>
         </li>
         <li>
         <img src={tick} alt="Tick icon" className="tick-icon" /><span>I have read and understand the 
            
            <span className='ms-1' style={{color:'rgb(96, 26, 121)',cursor:'pointer'}} onClick={()=>{window.open('https://smehealthcheck.credilinq.ai/terms-and-conditions')}}>Terms & Conditions</span></span></li>
      </ul>
      <div className='submit-btn-div'>
      <Button variant="contained" sx={{backgroundColor:'rgb(96, 26, 121)',color:'white'}} 
      disabled={selectedMonths.length!==6||uploadedFiles.length!==6||!checkTerms} 
      onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
}
