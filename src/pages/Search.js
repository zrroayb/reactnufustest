import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import DataTable from "../components/DataTable";
import { productData } from "../components/data";

function Search() {
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
    <div className="page-container">
      <h1 className="page-title">Nüfus Kayıt Arama</h1>
      <div className="content-card">
        <SearchBar onSearch={handleSearch} />
        <DataTable data={filteredData} />
      </div>
    </div>
  );
}

export default Search;
