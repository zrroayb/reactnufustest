import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import DataTable from "./components/DataTable";
import Header from "./components/Header";
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
    <div className="app-container">
      <Header />
      <div className="main-content">
        <div className="content-card">
          <h1 className="page-title">Nüfus Kayıt Arama</h1>
          <SearchBar onSearch={handleSearch} />
          <DataTable data={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default App;
