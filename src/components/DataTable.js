import React, { useState } from "react";
import PopupModal from "./PopupModal";

function DataTable({ data }) {
  const [selectedRow, setSelectedRow] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  if (!data || data.length === 0) {
    return <div className="no-data">No data to display</div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <>
      {/* Desktop Table View */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
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

      {/* Mobile Card View */}
      <div className="mobile-card-container">
        {data.map((row, index) => (
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
                {headers.map(
                  (header, idx) =>
                    header !== "ImageUrl" && (
                      <div key={idx} className="mobile-card-row">
                        <span className="mobile-card-label">{header}:</span>
                        <span>{row[header]}</span>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRow && (
        <PopupModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
          data={selectedRow}
        />
      )}
    </>
  );
}

export default DataTable;
