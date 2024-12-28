import React, { useState } from "react";
import { productData } from "./data";
import PopupModal from "../components/PopupModal";

function DataTable({ searchTerm }) {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter data based on search term
  const filteredData = productData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleClick = (person) => {
    setSelectedPerson(person);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPerson(null);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
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
              {currentItems.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => handleClick(item)}
                  style={{ cursor: "pointer" }}
                >
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

          {/* Pagination */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`pagination-button ${
                  currentPage === i + 1 ? "active" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="mobile-view">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="mobile-card"
              onClick={() => handleClick(item)}
            >
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

          {/* Mobile Pagination */}
          <div className="pagination mobile-pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`pagination-button ${
                  currentPage === i + 1 ? "active" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <PopupModal
        show={showModal}
        handleClose={closeModal}
        person={selectedPerson}
      />
    </>
  );
}

export default DataTable;
