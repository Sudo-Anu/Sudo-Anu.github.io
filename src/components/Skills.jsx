import React from 'react';
import { useContent } from '../context/ContentContext';

const Skills = () => {
  const { content } = useContent();
  const skills = content?.skills || [];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">SKILLS</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid reveal">
          {skills.map((skill, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            return (
              <div className="skill-block" data-num={num} key={index}>
                <p className="skill-cat">{skill.category}</p>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-tags">
                  {skill.tags.map((tag, tIndex) => (
                    <span className="s-tag" key={tIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
