import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>BODRUM NÜFUS SORGULAMA</h1>
        <p>Ailenizin bilgileriyle sorgulama gerçekleştirebilirisniz.</p>
        <Link to="/search" className="hero-button">
          Nüfus Kaydı Sorgula
        </Link>
      </div>
    </div>
  );
}

export default Home;
