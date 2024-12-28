import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
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
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
