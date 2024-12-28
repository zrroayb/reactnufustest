import React from "react";

function Contact() {
  return (
    <div className="page-container">
      <h1 className="page-title">İletişim</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>İletişim Bilgileri</h2>
          <p>
            <strong>Adres:</strong> Kıbrıs Şehitleri Cad. No:14 48400
            Bodrum/Muğla
          </p>
          <p>
            <strong>Telefon:</strong> (0252) 316 XX XX
          </p>
          <p>
            <strong>E-posta:</strong> bodrum.nufus@icisleri.gov.tr
          </p>
          <p>
            <strong>Fax:</strong> (0252) 316 XX XX
          </p>
        </div>

        <div className="contact-form">
          <h2>İletişim Formu</h2>
          <form className="form">
            <div className="form-group">
              <input type="text" placeholder="Adınız Soyadınız" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="E-posta Adresiniz" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Telefon Numaranız" />
            </div>
            <div className="form-group">
              <textarea placeholder="Mesajınız" rows="5"></textarea>
            </div>
            <button type="submit" className="submit-button">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
