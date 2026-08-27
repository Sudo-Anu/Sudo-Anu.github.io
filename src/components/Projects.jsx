import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">03</span>
          <h2 className="section-title">PROJECTS</h2>
          <div className="section-line"></div>
        </div>
        <div className="project-list reveal">
          {/* PROJECT 1 */}
          <a href="https://github.com/Sudo-Anu" className="proj-item tilt" target="_blank" rel="noopener noreferrer">
            <span className="proj-num">01</span>
            <div className="proj-info">
              <div className="proj-title-row">
                <span className="proj-name">RECON TOOLKIT</span>
                <span className="proj-lang">Python</span>
              </div>
              <p className="proj-desc">A Python based reconnaissance wrapper combining Nmap, Netcat probing, and subdomain enumeration into a single CLI workflow for CTF and lab use.</p>
            </div>
            <span className="proj-arrow">↗</span>
          </a>

          {/* PROJECT 2 */}
          <a href="https://github.com/Sudo-Anu" className="proj-item tilt" target="_blank" rel="noopener noreferrer">
            <span className="proj-num">02</span>
            <div className="proj-info">
              <div className="proj-title-row">
                <span className="proj-name">CTF WRITEUPS</span>
                <span className="proj-lang">Markdown</span>
              </div>
              <p className="proj-desc">Documented solutions for HackTheBox and TryHackMe web exploitation, network forensics, and OSINT. A learning journal as much as a reference.</p>
            </div>
            <span className="proj-arrow">↗</span>
          </a>

          {/* PROJECT 3 */}
          <a href="https://github.com/Sudo-Anu/hyprland-dotfiles" className="proj-item tilt" target="_blank" rel="noopener noreferrer">
            <span className="proj-num">03</span>
            <div className="proj-info">
              <div className="proj-title-row">
                <span className="proj-name">HYPRLAND DOTFILES</span>
                <span className="proj-lang">Shell</span>
              </div>
              <p className="proj-desc">My Arch Linux + Hyprland config custom waybar, keybinds, themes, scripts. A well-configured desktop is a productive desktop.</p>
            </div>
            <span className="proj-arrow">↗</span>
          </a>

          {/* PROJECT 4 */}
          <a href="https://github.com/Sudo-Anu" className="proj-item tilt" target="_blank" rel="noopener noreferrer">
            <span className="proj-num">04</span>
            <div className="proj-info">
              <div className="proj-title-row">
                <span className="proj-name">WEB SECURITY NOTES</span>
                <span className="proj-lang">Markdown</span>
              </div>
              <p className="proj-desc">Running knowledge base on OWASP Top 10 XSS, SQLi, IDOR, SSRF — with Burp Suite methodology notes from lab practice.</p>
            </div>
            <span className="proj-arrow">↗</span>
          </a>

          {/* PROJECT 5 */}
          <a href="https://github.com/Sudo-Anu" className="proj-item tilt" target="_blank" rel="noopener noreferrer">
            <span className="proj-num">05</span>
            <div className="proj-info">
              <div className="proj-title-row">
                <span className="proj-name">HOME LAB SETUP</span>
                <span className="proj-lang">Bash</span>
              </div>
              <p className="proj-desc">Docs and scripts for my self-hosted home lab virtual network topology, vulnerable VM setup, and service configs for practice.</p>
            </div>
            <span className="proj-arrow">↗</span>
          </a>

          {/* PROJECT 6 */}
          <a href="https://github.com/Sudo-Anu/ADR-autofill" className="proj-item tilt" target="_blank" rel="noopener noreferrer">
            <span className="proj-num">06</span>
            <div className="proj-info">
              <div className="proj-title-row">
                <span className="proj-name">ADR Autofill</span>
                <span className="proj-lang">Python</span>
              </div>
              <p className="proj-desc">ADR AutoFill is an AI-powered tool that uses OCR and local LLMs to extract information from prescription images and automatically populate Adverse Drug Reaction (ADR) reporting forms, reducing manual effort and errors.</p>
            </div>
            <span className="proj-arrow">↗</span>
          </a>

          {/* PROJECT 7 */}
          <a href="https://github.com/Sudo-Anu/Scraper" className="proj-item tilt" target="_blank" rel="noopener noreferrer">
            <span className="proj-num">07</span>
            <div className="proj-info">
              <div className="proj-title-row">
                <span className="proj-name">Scraper</span>
                <span className="proj-lang">Python</span>
              </div>
              <p className="proj-desc">A Python-based web scraper that automates the collection and extraction of data from the top 100 websites.</p>
            </div>
            <span className="proj-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
