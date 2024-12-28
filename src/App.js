import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import DataTable from "./components/DataTable";
import Header from "./components/Header";
import { Container, Paper, Typography, Box } from "@mui/material";
import { productData } from "./components/data";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setData(productData);
    setFilteredData(productData);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  return (
    <Box sx={{ backgroundColor: "#F8F9FA", minHeight: "100vh" }}>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 3,
              backgroundColor: "white",
              boxShadow: "0 0 20px rgba(0,0,0,0.05)",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              align="center"
              sx={{
                color: "#0A2647",
                fontWeight: 600,
                mb: 4,
                fontFamily: "'Poppins', sans-serif",
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "4px",
                  backgroundColor: "#FFD700",
                  borderRadius: "2px",
                },
              }}
            >
              Nüfus Kayıt Arama
            </Typography>

            <SearchBar onSearch={handleSearch} />
            <DataTable data={filteredData} />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
