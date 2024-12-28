import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css"; // We'll create this new file

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="nav-logo">
          <img
            src={process.env.PUBLIC_URL + "/images/logo_new.png"}
            alt="Logo"
            className="nav-logo-image"
          />
          <span className="nav-logo-text">BODRUM NÜFUS</span>
        </Link>
      </div>

      <button
        className={`nav-toggle ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <Link
          to="/anasayfa"
          className="nav-item"
          onClick={() => setIsOpen(false)}
        >
          Ana Sayfa
        </Link>
        <Link
          to="/search"
          className="nav-item"
          onClick={() => setIsOpen(false)}
        >
          Kayıt Arama
        </Link>
        <Link to="/about" className="nav-item" onClick={() => setIsOpen(false)}>
          Hakkımızda
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
