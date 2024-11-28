import React from 'react';
import TextField from '@mui/material/TextField';

export default function CompanyInfo({companyUEN, setCompanyUEN, companyName, setCompanyName}) {
  return (
    <div className='form-content-1'>
    <div className='company-text-field-div1'>
     <TextField
         label="Company UEN"
         placeholder='Enter your company UEN'
         sx={{width:'100%'}}
         onChange={(e)=>setCompanyUEN(e.target.value)}
     />
 </div>
 <div className='company-text-field-div2'>
     <TextField
         label="Company Name"
         placeholder='Enter your company name'
         sx={{width:'100%'}}
         onChange={(e)=>setCompanyName(e.target.value)}
     />
 </div>
</div>
  )
}
