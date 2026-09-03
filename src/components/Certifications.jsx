import React from 'react';
import { useContent } from '../context/ContentContext';

const Certifications = () => {
  const { content } = useContent();
  const certs = content?.certifications || [];

  return (
    <section id="certs">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">04</span>
          <h2 className="section-title">CERTIFICATIONS</h2>
          <div className="section-line"></div>
        </div>
        <div className="cert-grid reveal">
          {certs.map((cert, idx) => (
            <div className="cert-card" key={idx}>
              <span className={`cert-status ${cert.status}`}>
                {cert.status === 'earned' ? 'Earned' : cert.status === 'progress' ? 'In Progress' : 'Planned'}
              </span>
              <h3 className="cert-name">{cert.name}</h3>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
