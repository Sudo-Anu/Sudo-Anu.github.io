import React from 'react';
import { useContent } from '../context/ContentContext';

const Hero = () => {
  const { content } = useContent();

  return (
    <section id="hero">
      <div className="container" style={{ display: 'contents' }}>
        <div style={{ paddingLeft: '48px', paddingRight: '24px' }} className="hero-left">
          <div className="hero-label">Cybersecurity Student</div>
          <h1 className="hero-name">
            ANIRUDDHA<br/>
            <span>RAUT</span>
          </h1>
          <p className="hero-desc">
            B.Tech Cybersecurity at JDCOEM, Nagpur.<br/>
            {content?.about?.heroIntro || "I break things to understand how to protect them : CTF player, home-lab tinkerer, and proud Arch Linux user."}
          </p>
          <div className="hero-pills">
            <span className="pill accent">Penetration Testing</span>
            <span className="pill">CTF Player</span>
            <span className="pill">Bug Bounty</span>
            <span className="pill">Arch + Hyprland</span>
            <span className="pill">Home Lab</span>
            <span className="pill">Python</span>
          </div>
          <div className="hero-cta">
            <a href="/resume.pdf" className="btn-primary" target="_blank" rel="noopener noreferrer">View Resume</a> 
            <a href="#projects" className="btn-ghost">View Projects</a>
            <a href="#contact" className="btn-ghost">Get in Touch</a>
          </div>
          <div className="avail">
            <div className="avail-dot"></div>
            Available for internships
          </div>
        </div>

        <div className="hero-right" style={{ paddingRight: '48px' }}>
          <div className="profile-frame">
            <span className="frame-label">// ANIRUDDHA.RAUT</span>
            <img
              src={content?.photoUrl || "/profile.jpg"}
              alt="Aniruddha Raut"
              className="profile-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.querySelector('.img-fallback').style.display = 'flex';
              }}
            />
            <div className="img-fallback" style={{ display: 'none', width: '100%', height: '100%', background: 'var(--off-black)', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '72px', letterSpacing: '4px', color: 'var(--gray-dim)' }}>AR</span>
            </div>
            <div className="htb-badge">
              HackTheBox<strong>@Anu2006</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bg-text">SECURITY</div>
    </section>
  );
};

export default Hero;
