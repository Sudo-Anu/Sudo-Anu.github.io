import React from 'react';
import { useContent } from '../context/ContentContext';

const Experience = () => {
  const { content } = useContent();
  const experience = content?.experience || [];
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">05</span>
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="section-line"></div>
        </div>
        <div className="exp-list reveal">
          {experience.length === 0 ? (
            <div className="exp-placeholder">
              <p>// no formal experience yet — building it through CTFs, home lab & open-source</p>
              <p style={{ marginTop: '8px', color: 'var(--gray-dim)' }}>// open to internships · bug bounty collabs · security projects</p>
            </div>
          ) : (
            experience.map((exp, idx) => (
              <div className="exp-item" key={idx} style={{ marginBottom: '24px', borderLeft: '2px solid var(--accent)', paddingLeft: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--white)', margin: 0 }}>{exp.role}</h3>
                <div style={{ color: 'var(--accent)', fontSize: '14px', marginBottom: '8px' }}>
                  {exp.company} <span style={{ color: 'var(--gray)' }}>// {exp.duration}</span>
                </div>
                <p style={{ color: 'var(--gray-dim)', fontSize: '14px', lineHeight: '1.5' }}>{exp.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
