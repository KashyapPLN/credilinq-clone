import React, { useState, useEffect } from 'react';
import './uploadDocuments.css';
import tick from '../assets/tick.svg';
import { MdOutlineUploadFile } from 'react-icons/md';
import { Checkbox, FormControlLabel, Chip } from '@mui/material';
import { Row } from 'react-bootstrap';

export default function UploadDocuments({ upload, setSelectedMonths, setUploadedFiles, uploadedFiles, selectedMonths }) {
  const [months, setMonths] = useState([]);
  // Generate the last 6 months
  useEffect(() => {
    const now = new Date();
    const lastSixMonths = [];
    for (let i = 0; i < 6; i++) {
      const month = new Date(now.getFullYear(), now.getMonth() - i, 1).toLocaleString('default', { month: 'short' });
      lastSixMonths.push(month);
    }
    setMonths(lastSixMonths);
  }, []);

  // Handle checkbox toggle
  const handleMonthChange = (month) => {
    setSelectedMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const updatedFiles = files.map((file) => ({
      name: file.name,
      type: file.type,
      size: file.size,
    }));  
    setUploadedFiles((prev) => [...prev, ...updatedFiles]);
  }

  // Handle chip delete
  const handleDelete = (fileName) => {
    setUploadedFiles((prev) => prev.filter((file) => file.name !== fileName));
  };

  return (
    <div className='mb-4'>
      <div className="upload-div">
        <div className="upload-button-div">
          <div
            className="upload"
            onClick={() => {
                if(upload){
                    document.getElementById('file-input').click();
                }
                
            }}
            style={{ color: upload ? 'rgb(0, 0, 84)' : 'grey' }}
          >
            <div className="upload-icon"><MdOutlineUploadFile /></div>
            <p><span>Click to upload</span> or drag and drop Bank Statements</p>
          </div>
          <input
            id="file-input"
            type="file"
            multiple
            accept=".pdf"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
          {upload && <div>
            {months.map((month) => (
              <FormControlLabel
                key={month}
                control={
                  <Checkbox
                    checked={selectedMonths.includes(month)}
                    onChange={() => handleMonthChange(month)}
                  />
                }
                label={month}
                sx={{ color: 'grey' }}
              />
            ))}
          </div>}
        </div>
        <div className="conditions-info-div">
          <ul className="custom-list">
            <li>
              <img src={tick} alt="Tick icon" className="tick-icon" />
              <span>
                PDFs (not scanned copies) of company's operating bank current account(s) statements for the past 6 months.
                Example: If today is 28 Nov 24, then please upload bank statements from May 24 to Oct 24 (both months inclusive).
              </span>
            </li>
            <li>
              <img src={tick} alt="Tick icon" className="tick-icon" />
              <span>
                If your company is multi-banked, then please upload 6 months bank statements for each bank account.
              </span>
            </li>
            <li>
              <img src={tick} alt="Tick icon" className="tick-icon" />
              <span>
                If your file is password protected, we request you to remove the password and upload the file to avoid submission failure.
              </span>
            </li>
            <li>
              <img src={tick} alt="Tick icon" className="tick-icon" />
              <span>
                In case you are facing any issues while uploading bank statements, please contact us at support@credilinq.ai.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Row>
        <div className='chip-div'>
        {uploadedFiles.map((file) => (
         <Chip
         key={file.name}
         label={file.name}
         onDelete={() => handleDelete(file.name)}
         sx={{
           margin: 1,
           color: file.type === 'application/pdf' ? 'green' : 'red', // Check for 'application/pdf'
           borderColor: file.type === 'application/pdf' ? 'green' : 'red',
           borderWidth: 1,
           borderStyle: 'solid',
           width: 'max-content',
         }}
         variant="outlined"
       />
        ))}
        </div>
      </Row>
    </div>
  );
}
