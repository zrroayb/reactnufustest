import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>BODRUM NÜFUS MÜDÜRLÜĞÜ</h1>
        <p>T.C. İçişleri Bakanlığı Nüfus ve Vatandaşlık İşleri</p>
        <Link to="/search" className="hero-button">
          Nüfus Kaydı Sorgula
        </Link>
      </div>

      <div className="info-section">
        <div className="info-card">
          <h3>Hizmetlerimiz</h3>
          <ul>
            <li>Kimlik Kartı İşlemleri</li>
            <li>Doğum Kayıt İşlemleri</li>
            <li>Evlenme İşlemleri</li>
            <li>Adres Beyanı</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Çalışma Saatleri</h3>
          <p>Pazartesi - Cuma: 08:30 - 17:00</p>
          <p>Öğle Arası: 12:00 - 13:00</p>
          <p>Hafta sonu kapalı</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
