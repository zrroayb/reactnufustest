import React, { useState } from "react";
import PopupModal from "./PopupModal";

function DataTable({ data }) {
  const [selectedRow, setSelectedRow] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
  };

  // Mobile card view renderer
  const renderMobileCard = (row, index) => {
    return (
      <div
        key={index}
        className="mobile-card"
        onClick={() => handleRowClick(row)}
      >
        <div className="mobile-card-content">
          {row.ImageUrl && (
            <img src={row.ImageUrl} alt="" className="mobile-card-image" />
          )}
          <div className="mobile-card-details">
            {Object.entries(row).map(
              ([key, value], idx) =>
                key !== "ImageUrl" && (
                  <div key={idx} className="mobile-card-row">
                    <span className="mobile-card-label">{key}:</span>
                    <span className="mobile-card-value">{value}</span>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    );
  };

  if (!data || data.length === 0) {
    return <div className="no-results">Gösterilecek kayıt bulunamadı.</div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <>
      {/* Desktop Table View */}
      <div className="desktop-table">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>
                    {header === "ImageUrl" ? "Fotoğraf" : header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} onClick={() => handleRowClick(row)}>
                  {headers.map((header, colIndex) => (
                    <td key={colIndex}>
                      {header === "ImageUrl" ? (
                        <img src={row[header]} alt="" className="table-image" />
                      ) : (
                        row[header]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="mobile-view">
        {data.map((row, index) => renderMobileCard(row, index))}
      </div>

      <PopupModal
        open={openModal}
        handleClose={handleCloseModal}
        data={selectedRow}
      />
    </>
  );
}

export default DataTable;
