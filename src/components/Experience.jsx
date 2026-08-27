import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">05</span>
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="section-line"></div>
        </div>
        <div className="exp-list reveal">
          {/* Placeholder: remove once real experience is added */}
          <div className="exp-placeholder">
            <p>// no formal experience yet — building it through CTFs, home lab & open-source</p>
            <p style={{ marginTop: '8px', color: 'var(--gray-dim)' }}>// open to internships · bug bounty collabs · security projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
