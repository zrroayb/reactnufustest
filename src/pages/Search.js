import React, { useState } from "react";
import DataTable from "../components/DataTable"; // Updated path

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="İsim, Soyisim veya Şehir ara..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <DataTable searchTerm={searchTerm} />
    </div>
  );
}

export default Search;
