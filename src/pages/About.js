import React from "react";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Hakkımızda</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>Biz Kimiz?</h2>
          <p>
            Bodrum nüfus kayıtlarını dijital ortamda sunarak, vatandaşlarımıza
            kolay erişim sağlıyoruz.
          </p>
        </div>
        <div className="about-section">
          <h2>Misyonumuz</h2>
          <p>
            Nüfus kayıtlarına erişimi kolaylaştırarak, vatandaşlarımıza hızlı ve
            güvenilir hizmet sunmak.
          </p>
        </div>
        <div className="about-section">
          <h2>İletişim</h2>
          <p>Sorularınız için bize ulaşabilirsiniz.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
