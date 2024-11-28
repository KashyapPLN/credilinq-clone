import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import flag from '../assets/flag.svg'
import './applicantinfo.css';
export default function ApplicantInfo({name,setName, position,setPosition, email,setEmail, confirmEmail,setConfirmEmail, mobile,setMobile,applicant}) {
    return (
        <div className='form-content-2'>
            <section>
                <div className='name-div'>
                    <TextField
                        label="Full Name"
                        sx={{ width: '100%' }}
                        onChange={(e)=>setName(e.target.value)}
                        disabled={!applicant}
                    />
                </div>
                <div className='position-div'>
                    <TextField
                        label="Position within company"
                        sx={{ width: '100%' }}
                        onChange={(e)=>setPosition(e.target.value)}
                        disabled={!applicant}
                    />
                </div>
            </section>
           <section>
                <div className='email-div'>
                    <TextField
                        label="Email Address"
                        sx={{ width: '100%' }}
                        onChange={(e)=>setEmail(e.target.value)}
                        disabled={!applicant}
                    />
                </div>
                <div className='re-enter-div'>
                    <TextField
                        label="Re-enter Email Address"
                        sx={{ width: '100%' }}
                        onChange={(e)=>setConfirmEmail(e.target.value)}
                        disabled={!applicant}
                    />
                </div>
            </section>
           <section>
                <div className='mobile-div'>
                    <TextField
                        label="Mobile Number"
                        sx={{ width: '100%' }}
                        disabled={!applicant}
                        onChange={(e)=>setMobile(e.target.value)}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start">
                                    <img src={flag} className='me-2' style={{width:'auto',height:'20px'}}/>
                                    +65</InputAdornment>,
                            },
                        }}
                    />
                </div>
            </section>
        </div>
    )
}
