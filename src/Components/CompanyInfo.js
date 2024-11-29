import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';

// Validation schema
const validationSchema = Yup.object({
  companyUEN: Yup.string()
    .required('Company UEN is required')
    .matches(/^\d{8}[A-Z]$/, 'Invalid UEN format (must be 8 digits followed by a capital letter)'),
  companyName: Yup.string()
    .required('Company Name is required')
    .min(3, 'Company Name must be at least 3 characters'),
});

export default function CompanyInfo({ companyUEN, setCompanyUEN, companyName, setCompanyName }) {
  const formik = useFormik({
    initialValues: {
      companyUEN: companyUEN || '',
      companyName: companyName || '',
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });

  return (
    <div className="form-content-1 pb-4">
      <div className="company-text-field-div1">
        <TextField
          name="companyUEN"
          label="Company UEN"
          placeholder="Enter your company UEN"
          fullWidth
          value={formik.values.companyUEN}
          onChange={(e) => {
            formik.handleChange(e);
            setCompanyUEN(e.target.value); // Update parent state
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.companyUEN && !!formik.errors.companyUEN}
          helperText={formik.touched.companyUEN && formik.errors.companyUEN}
        />
      </div>
      <div className="company-text-field-div2">
        <TextField
          name="companyName"
          label="Company Name"
          placeholder="Enter your company name"
          fullWidth
          value={formik.values.companyName}
          onChange={(e) => {
            formik.handleChange(e);
            setCompanyName(e.target.value); // Update parent state
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.companyName && !!formik.errors.companyName}
          helperText={formik.touched.companyName && formik.errors.companyName}
        />
      </div>
    </div>
  );
}
