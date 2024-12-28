import React from "react";
import { productData } from "./data";

function DataTable({ searchTerm }) {
  const filteredData = productData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-container">
      {/* Desktop Table */}
      <div className="desktop-table">
        <table className="data-table">
          <thead>
            <tr>
              <th>Fotoğraf</th>
              <th>İsim</th>
              <th>Soyisim</th>
              <th>Şehir</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.imageUrl}
                    alt={`${item.name} ${item.surname}`}
                    className="table-image"
                    onError={(e) => {
                      e.target.src = "/images/default-avatar.jpg";
                    }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="mobile-view">
        {filteredData.map((item) => (
          <div key={item.id} className="mobile-card">
            <div className="mobile-card-content">
              <img
                src={item.imageUrl}
                alt={`${item.name} ${item.surname}`}
                className="mobile-card-image"
                onError={(e) => {
                  e.target.src = "/images/default-avatar.jpg";
                }}
              />
              <div className="mobile-card-details">
                <div className="mobile-card-row">
                  <span className="mobile-card-label">İsim:</span>
                  {item.name}
                </div>
                <div className="mobile-card-row">
                  <span className="mobile-card-label">Soyisim:</span>
                  {item.surname}
                </div>
                <div className="mobile-card-row">
                  <span className="mobile-card-label">Şehir:</span>
                  {item.city}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataTable;
