import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img
            src={process.env.PUBLIC_URL + "/images/logo_new.png"}
            alt="Bodrum Nüfus Logo"
            className="nav-logo-image"
          />
          <span className="nav-logo-text">BODRUM NÜFUS</span>
        </Link>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          <span className="menu-icon"></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Ana Sayfa
          </Link>
          <Link
            to="/search"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Kayıt Arama
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Hakkımızda
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
