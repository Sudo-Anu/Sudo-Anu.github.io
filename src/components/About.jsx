import React from 'react';
import DailyDriver from './DailyDriver';
import { useContent } from '../context/ContentContext';

const About = () => {
  const { content, loading } = useContent();

  const aboutText = content?.about?.body || "Outside of security, I'm obsessed with my Arch Linux + Hyprland setup ricing the desktop, automating workflows, and reading research papers at 2 AM with good music.";

  return (
    <>
      <section id="about">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-num">01</span>
            <h2 className="section-title">ABOUT</h2>
            <div className="section-line"></div>
          </div>
          <div className="about-grid reveal">
            <div className="about-text">
              <p>
                B.Tech Cybersecurity student at <strong>JD College of Engineering and Management, Nagpur</strong>. My interest in security started with curiosity how does this work, and how can it break?
              </p>
              <p>
                These days I spend time on <strong>HackTheBox</strong> and <strong>TryHackMe</strong>, running tools in my home lab, and competing in CTFs. The best way to learn security is by doing it.
              </p>
              <p>
                {aboutText}
              </p>
            </div>
            <ul className="fact-list">
              <li><span className="fact-key">daily_driver</span><span className="fact-val">Arch + Hyprland</span></li>
              <li><span className="fact-key">htb</span><span className="fact-val">@Anu2006</span></li>
              <li><span className="fact-key">thm</span><span className="fact-val">@anuragraut551</span></li>
              <li><span className="fact-key">graduating</span><span className="fact-val">2029</span></li>
              <li><span className="fact-key">location</span><span className="fact-val">Nagpur, Maharashtra</span></li>
              <li><span className="fact-key">interests</span><span className="fact-val">Bug bounty · home lab · CTFs</span></li>
            </ul>
          </div>
          <div className="stats-row reveal">
            <div className="stat-box">
              <span className="stat-n">6</span>
              <span className="stat-l">Certifications</span>
            </div>
            <div className="stat-box">
              <span className="stat-n">2</span>
              <span className="stat-l">CTF Platforms</span>
            </div>
            <div className="stat-box">
              <span className="stat-n">2029</span>
              <span className="stat-l">Graduating</span>
            </div>
            <div className="stat-box">
              <span className="stat-n">∞</span>
              <span className="stat-l">Curiosity</span>
            </div>
          </div>
        </div>
      </section>

      <DailyDriver />
    </>
  );
};

export default About;
