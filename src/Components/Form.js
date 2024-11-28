import React, { useEffect, useState } from 'react';
import './form.css';
import { Container } from 'react-bootstrap';
import ApplicantInfo from './ApplicantInfo';
import UploadDocuments from './UploadDocuments';
import TandC from './T&C';
import CompanyInfo from './CompanyInfo';

export default function Form() {
    const [companyUEN, setCompanyUEN] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [name,setName]=useState('');
    const [position,setPosition]=useState('');
    const [email,setEmail]=useState('');
    const [confirmEmail,setConfirmEmail]=useState('');
    const [mobile,setMobile]=useState('');
    const [applicant,setApplicant]=useState(false);
    const [upload, setUpload]= useState(false);
    const [selectedMonths, setSelectedMonths] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [checkTerms,setCheckTerms] = useState(false);

    useEffect(()=>{
        if(companyUEN!=='' && companyName!==''){
          setApplicant(true);
        }else{
            setApplicant(false);
        }
    },[companyUEN,companyName])

    useEffect(()=>{
        if(name!==''&&position!==''&&email!=''&&confirmEmail!==''&&mobile!==''){
            setUpload(true);
        }
    },[name,email,position,mobile,confirmEmail])

   
    return (
        <Container>
            <div className='sme-health-form'>

                {/* Company info */}
                <div className='form-heading-div1'>
                    {companyName === '' || companyUEN ==='' ? <svg width="24" height="24"><circle cx="12" cy="12" r="12" fill="red" />
                        <text x="12" y="12" text-anchor="middle" dominant-baseline="central" fill="white">1</text></svg> :
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#2e7d32" />
                        <path d="M9 16l-3.5-3.5 1.4-1.4L9 13.2l7.1-7.1 1.4 1.4L9 16z" fill="white" />
                      </svg>                     

                    }

                    <div className='form-heading1'>
                        Company Information
                    </div>
                </div>
                <CompanyInfo setCompanyName={setCompanyName} setCompanyUEN={setCompanyUEN} companyName={companyName} companyUEN={companyUEN}/>
                {/* Applicant info */}
                <div className='form-heading-div1'>
                {name !== '' && position !==''&& email !=='' && confirmEmail!==''&& mobile!=='' ? <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#2e7d32" />
                        <path d="M9 16l-3.5-3.5 1.4-1.4L9 13.2l7.1-7.1 1.4 1.4L9 16z" fill="white" />
                      </svg>  : applicant ? <svg width="24" height="24"><circle cx="12" cy="12" r="12" fill="red" />
                      <text x="12" y="12" text-anchor="middle" dominant-baseline="central" fill="white">2</text></svg>:
                      <svg width="24" height="24">
                      <circle cx="12" cy="12" r="12" fill="lightgrey" />
                      <text x="12" y="12" text-anchor="middle" dominant-baseline="central" fill="white">2</text>
                  </svg>     
                    
                    }
                    <div className='form-heading1'>
                        Applicant Information
                    </div>
                </div>
                <ApplicantInfo name={name} setName={setName} email={email} setEmail={setEmail} position={position} applicant={applicant} 
                setPosition={setPosition} confirmEmail={confirmEmail} setConfirmEmail={setConfirmEmail} mobile={mobile} setMobile={setMobile}/>
                {/* Upload documents */}
                <div className='form-heading-div1'>
                {
  (name === '' || position === '' || email === '' || confirmEmail === '' || mobile === '') 
    ? (
      // Render lightgrey SVG
      <svg width="24" height="24">
        <circle cx="12" cy="12" r="12" fill="lightgrey" />
        <text x="12" y="12" text-anchor="middle" dominant-baseline="central" fill="white">3</text>
      </svg>
    ) 
    : (name !== '' && position !== '' && email !== '' && confirmEmail !== '' && mobile !== '' && selectedMonths.length === 6 && uploadedFiles.length === 6)
    ? (
      // Render tick (green circle) SVG
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#2e7d32" />
        <path d="M9 16l-3.5-3.5 1.4-1.4L9 13.2l7.1-7.1 1.4 1.4L9 16z" fill="white" />
      </svg>
    )
    : (
      // Render red SVG
      <svg width="24" height="24">
        <circle cx="12" cy="12" r="12" fill="red" />
        <text x="12" y="12" text-anchor="middle" dominant-baseline="central" fill="white">3</text>
      </svg>
    )
}

                    <div className='form-heading1'>
                        Upload Documents
                    </div>
                </div>
                <UploadDocuments upload={upload} setSelectedMonths={setSelectedMonths} setUploadedFiles={setUploadedFiles} selectedMonths={selectedMonths} uploadedFiles={uploadedFiles}/>
                {/* Terms and conditions */}
                <div className='form-heading-div1'>
                    {<svg width="24" height="24">
                        <circle cx="12" cy="12" r="12" fill="lightgrey" />
                        <text x="12" y="12" text-anchor="middle" dominant-baseline="central" fill="white">4</text>
                    </svg>}
                    <div className='form-heading1'>
                        Terms & Conditions
                    </div>
                </div>
                <TandC checkTerms={checkTerms} setCheckTerms={setCheckTerms} selectedMonths={selectedMonths} uploadedFiles={uploadedFiles}/>
            </div>


        </Container>
    )
}
