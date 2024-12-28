import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";

function DataTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography color="text.secondary">
          No data to display. Please upload an Excel file.
        </Typography>
      </Box>
    );
  }

  const headers = Object.keys(data[0]);

  return (
    <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="data table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            {headers.map((header, index) => (
              <TableCell
                key={index}
                sx={{
                  fontWeight: "bold",
                  color: "#1976d2",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}
            >
              {headers.map((header, colIndex) => (
                <TableCell key={colIndex}>{row[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
