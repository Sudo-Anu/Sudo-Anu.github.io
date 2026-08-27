import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const fallbackData = [
  {
    name: "RECON TOOLKIT",
    lang: "Python",
    desc: "A Python based reconnaissance wrapper combining Nmap, Netcat probing, and subdomain enumeration into a single CLI workflow for CTF and lab use.",
    url: "https://github.com/Sudo-Anu"
  },
  {
    name: "CTF WRITEUPS",
    lang: "Markdown",
    desc: "Documented solutions for HackTheBox and TryHackMe web exploitation, network forensics, and OSINT. A learning journal as much as a reference.",
    url: "https://github.com/Sudo-Anu"
  },
  {
    name: "HYPRLAND DOTFILES",
    lang: "Shell",
    desc: "My Arch Linux + Hyprland config custom waybar, keybinds, themes, scripts. A well-configured desktop is a productive desktop.",
    url: "https://github.com/Sudo-Anu/hyprland-dotfiles"
  },
  {
    name: "WEB SECURITY NOTES",
    lang: "Markdown",
    desc: "Running knowledge base on OWASP Top 10 XSS, SQLi, IDOR, SSRF — with Burp Suite methodology notes from lab practice.",
    url: "https://github.com/Sudo-Anu"
  },
  {
    name: "HOME LAB SETUP",
    lang: "Bash",
    desc: "Docs and scripts for my self-hosted home lab virtual network topology, vulnerable VM setup, and service configs for practice.",
    url: "https://github.com/Sudo-Anu"
  },
  {
    name: "ADR Autofill",
    lang: "Python",
    desc: "ADR AutoFill is an AI-powered tool that uses OCR and local LLMs to extract information from prescription images and automatically populate Adverse Drug Reaction (ADR) reporting forms, reducing manual effort and errors.",
    url: "https://github.com/Sudo-Anu/ADR-autofill"
  },
  {
    name: "Scraper",
    lang: "Python",
    desc: "A Python-based web scraper that automates the collection and extraction of data from the top 100 websites.",
    url: "https://github.com/Sudo-Anu/Scraper"
  }
];

const Projects = () => {
  const [viewMode, setViewMode] = useState('3d');
  const [projects, setProjects] = useState(fallbackData);

  useEffect(() => {
    // Automate pulling latest non-forked repos from GitHub API
    fetch('https://api.github.com/users/Sudo-Anu/repos?sort=updated&per_page=12')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const liveProjects = data
            .filter(repo => !repo.fork) // Filter out forks
            .map(repo => ({
              name: repo.name.replace(/-/g, ' ').toUpperCase(),
              lang: repo.language || 'Markdown',
              desc: repo.description || 'No description provided.',
              url: repo.html_url
            }));
          
          if (liveProjects.length > 0) {
            setProjects(liveProjects);
          }
        }
      })
      .catch(err => console.error("Failed to fetch GitHub repos. Falling back to default data.", err));
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">03</span>
          <h2 className="section-title">PROJECTS</h2>
          
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === '3d' ? 'active' : ''}`}
              onClick={() => setViewMode('3d')}
            >
              3D VIEW
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              LIST VIEW
            </button>
          </div>

          <div className="section-line"></div>
        </div>

        {viewMode === '3d' ? (
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: true }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="project-swiper"
          >
            {projects.map((proj, idx) => (
              <SwiperSlide key={idx}>
                <a href={proj.url} className="proj-item" target="_blank" rel="noopener noreferrer">
                  <div className="proj-info">
                    <div className="proj-title-row">
                      <span className="proj-name">{proj.name}</span>
                      <span className="proj-lang">{proj.lang}</span>
                    </div>
                    <p className="proj-desc">{proj.desc}</p>
                  </div>
                  <span className="proj-arrow">↗</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="project-grid">
            {projects.map((proj, idx) => (
              <a key={idx} href={proj.url} className="proj-item list-mode" target="_blank" rel="noopener noreferrer">
                <div className="proj-info">
                  <div className="proj-title-row">
                    <span className="proj-name">{proj.name}</span>
                    <span className="proj-lang">{proj.lang}</span>
                  </div>
                  <p className="proj-desc">{proj.desc}</p>
                </div>
                <span className="proj-arrow">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

