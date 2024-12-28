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

  if (!data || data.length === 0) {
    return <div className="no-results">Gösterilecek kayıt bulunamadı.</div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <>
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

      {selectedRow && (
        <PopupModal
          open={openModal}
          handleClose={handleCloseModal}
          data={selectedRow}
        />
      )}
    </>
  );
}

export default DataTable;
