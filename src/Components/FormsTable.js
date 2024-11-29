import React, { useState, useEffect } from "react";
import { Paper, Box, Container, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

const FormsTable = () => {
  const [formsData, setFormsData] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 3, // Fixed page size
  });

  useEffect(() => {
    fetchFormsData();
  }, []);

  const fetchFormsData = async () => {
    try {
      const response = await fetch("http://localhost:4000/forms");
      const data = await response.json();
      setFormsData(data); // Assuming the API returns an array of documents
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Map API data to the required structure
  const rows = formsData.map((form, index) => ({
    id: index+1,
    companyUEN: form.companyUEN,
    companyName: form.companyName,
    fullName: form.FullName,
    position: form.position,
    email: form.email,
  }));

  // Define column structure
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "companyUEN", headerName: "Company UEN", width: 150 },
    { field: "companyName", headerName: "Company Name", width: 200 },
    { field: "fullName", headerName: "Full Name", width: 200 },
    { field: "position", headerName: "Position in Company", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
  ];


  return (
    <Container className="mt-5">
      <Box>
        <Paper sx={{ height: '90vh', width: "100%" }}>
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
        </Paper>
      </Box>
    </Container>
  );
};

export default FormsTable;
