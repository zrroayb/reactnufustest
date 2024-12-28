import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          BODRUM NÜFUS
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Ana Sayfa
          </Link>
          <Link to="/search" className="nav-link">
            Kayıt Arama
          </Link>
          <Link to="/about" className="nav-link">
            Hakkımızda
          </Link>
          <Link to="/contact" className="nav-link">
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
