import React from "react";
import "../styles/PopupModal.css";

function PopupModal({ show, handleClose, person }) {
  if (!show || !person) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h2>
            {person.name} {person.surname}
          </h2>
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="popup-body">
          <div className="text-center">
            <img
              src={person.imageUrl}
              alt={`${person.name} ${person.surname}`}
              className="popup-image"
              onError={(e) => {
                e.target.src = "/images/default-avatar.jpg";
              }}
            />
          </div>
          <div className="person-details">
            <p>
              <strong>İsim:</strong> {person.name}
            </p>
            <p>
              <strong>Soyisim:</strong> {person.surname}
            </p>
            <p>
              <strong>Şehir:</strong> {person.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupModal;
