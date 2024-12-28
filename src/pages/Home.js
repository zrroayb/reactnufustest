import React from "react";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bodrum Nüfus Kayıtları</h1>
      <div className="home-content">
        <div className="home-section">
          <h2>Hoş Geldiniz</h2>
          <p>
            Bodrum nüfus kayıtlarına kolay erişim sağlayan dijital platformumuza
            hoş geldiniz.
          </p>
        </div>
        <div className="home-section">
          <h2>Hizmetlerimiz</h2>
          <p>
            Nüfus kayıtlarını arama, görüntüleme ve sorgulama işlemlerinizi
            kolayca gerçekleştirebilirsiniz.
          </p>
        </div>
        <div className="home-section">
          <h2>Nasıl Kullanılır?</h2>
          <p>
            Arama kutusuna bilgileri girerek kayıtlara hızlıca ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
