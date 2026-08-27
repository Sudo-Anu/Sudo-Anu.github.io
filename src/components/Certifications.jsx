import React from 'react';

const Certifications = () => {
  return (
    <section id="certs">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">04</span>
          <h2 className="section-title">CERTIFICATIONS</h2>
          <div className="section-line"></div>
        </div>
        <div className="cert-grid reveal">
          <div className="cert-card">
            <span className="cert-status earned">Earned</span>
            <h3 className="cert-name">ENCIPHERX 4.0 CTF</h3>
            <span className="cert-issuer">St. Vincent Palloti College of Engineering</span>
          </div>

          <div className="cert-card">
            <span className="cert-status earned">Earned</span>
            <h3 className="cert-name">WEB DEVELOPMENT & CMS PATHWAY</h3>
            <span className="cert-issuer">L&T EduTech</span>
          </div>

          <div className="cert-card">
            <span className="cert-status earned">Earned</span>
            <h3 className="cert-name">KASCADE CERTIFIED</h3>
            <span className="cert-issuer">IIT Kharagpur</span>
          </div>

          <div className="cert-card">
            <span className="cert-status earned">Earned</span>
            <h3 className="cert-name">BEGINNER GUIDE TO ETHICAL HACKING</h3>
            <span className="cert-issuer">Skill Up</span>
          </div>

          <div className="cert-card">
            <span className="cert-status earned">Participated</span>
            <h3 className="cert-name">THE BRAIN SPARK 2K25</h3>
            <span className="cert-issuer">JDCOEM Technical Event</span>
          </div>

          <div className="cert-card">
            <span className="cert-status earned">Participated</span>
            <h3 className="cert-name">CODE N CRAFTS</h3>
            <span className="cert-issuer">JDCOEM Technical Event</span>
          </div>

          <div className="cert-card">
            <span className="cert-status progress">In Progress</span>
            <h3 className="cert-name">COMPTIA SECURITY+</h3>
            <span className="cert-issuer">CompTIA</span>
          </div>

          <div className="cert-card">
            <span className="cert-status planned">Planned</span>
            <h3 className="cert-name">eJPT — JUNIOR PENETRATION TESTER</h3>
            <span className="cert-issuer">eLearnSecurity</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
