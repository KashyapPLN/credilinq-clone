import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import flag from '../assets/flag.svg';
import './applicantinfo.css';

export default function ApplicantInfo({ 
  name, 
  setName, 
  position, 
  setPosition, 
  email, 
  setEmail, 
  confirmEmail, 
  setConfirmEmail, 
  mobile, 
  setMobile, 
  applicant 
}) {
  const formik = useFormik({
    initialValues: {
      name: name || '',
      position: position || '',
      email: email || '',
      confirmEmail: confirmEmail || '',
      mobile: mobile || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full Name is required'),
      position: Yup.string().required('Position is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Emails must match')
        .required('Please confirm your email'),
      mobile: Yup.string()
        .matches(/^\d{8}$/, 'Mobile number must be 8 digits')
        .required('Mobile number is required'),
    }),
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <div className="form-content-2 pb-4">
      <section>
        <div className="name-div">
          <TextField
            label="Full Name"
            sx={{ width: '100%' }}
            value={formik.values.name}
            onChange={(e) => {
              formik.handleChange(e);
              setName(e.target.value);
            }}
            onBlur={formik.handleBlur}
            name="name"
            disabled={!applicant}
            error={formik.touched.name && !!formik.errors.name}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
        <div className="position-div">
          <TextField
            label="Position within company"
            sx={{ width: '100%' }}
            value={formik.values.position}
            onChange={(e) => {
              formik.handleChange(e);
              setPosition(e.target.value);
            }}
            onBlur={formik.handleBlur}
            name="position"
            disabled={!applicant}
            error={formik.touched.position && !!formik.errors.position}
            helperText={formik.touched.position && formik.errors.position}
          />
        </div>
      </section>
      <section>
        <div className="email-div">
          <TextField
            label="Email Address"
            sx={{ width: '100%' }}
            value={formik.values.email}
            onChange={(e) => {
              formik.handleChange(e);
              setEmail(e.target.value);
            }}
            onBlur={formik.handleBlur}
            name="email"
            disabled={!applicant}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className="re-enter-div">
          <TextField
            label="Re-enter Email Address"
            sx={{ width: '100%' }}
            value={formik.values.confirmEmail}
            onChange={(e) => {
              formik.handleChange(e);
              setConfirmEmail(e.target.value);
            }}
            onBlur={formik.handleBlur}
            name="confirmEmail"
            disabled={!applicant}
            error={formik.touched.confirmEmail && !!formik.errors.confirmEmail}
            helperText={formik.touched.confirmEmail && formik.errors.confirmEmail}
          />
        </div>
      </section>
      <section>
        <div className="mobile-div">
          <TextField
            label="Mobile Number"
            sx={{ width: '100%' }}
            value={formik.values.mobile}
            onChange={(e) => {
              formik.handleChange(e);
              setMobile(e.target.value);
            }}
            onBlur={formik.handleBlur}
            name="mobile"
            disabled={!applicant}
            error={formik.touched.mobile && !!formik.errors.mobile}
            helperText={formik.touched.mobile && formik.errors.mobile}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src={flag}
                    className="me-2"
                    style={{ width: 'auto', height: '20px' }}
                    alt="flag"
                  />
                  +65
                </InputAdornment>
              ),
            }}
          />
        </div>
      </section>
    </div>
  );
}
