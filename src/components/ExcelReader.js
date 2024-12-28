import React, { useRef } from "react";
import * as XLSX from "xlsx";
import { Button, Box, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

function ExcelReader({ setData, setFilteredData }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      setData(data);
      setFilteredData(data);
    };

    if (file) {
      reader.readAsBinaryString(file);
    }
  };

  return (
    <Box sx={{ textAlign: "center", my: 3 }}>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <Button
        variant="contained"
        startIcon={<UploadFileIcon />}
        onClick={() => fileInputRef.current.click()}
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 2,
          textTransform: "none",
          fontSize: "1.1rem",
        }}
      >
        Upload Excel File
      </Button>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Supported formats: .xlsx, .xls
      </Typography>
    </Box>
  );
}

export default ExcelReader;
