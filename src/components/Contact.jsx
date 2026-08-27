import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">06</span>
          <h2 className="section-title">CONTACT</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-wrap reveal">
          <div>
            <h3 className="contact-big">LET'S<br/>TALK.</h3>
            <p className="contact-sub">
              Open to internships, CTF team-ups, bug bounty collabs, and security conversations. If you're working on something interesting, let's talk.
            </p>
            <a href="mailto:anuragraut551@gmail.com" className="btn-primary">Send Email ↗</a>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/aniruddha-r-raut" className="c-link">
              <span>Linked-In</span>
              <span className="c-link-handle">Aniruddha Raut</span>
            </a>
            <a href="https://github.com/Sudo-Anu" target="_blank" rel="noopener noreferrer" className="c-link">
              <span>GitHub</span>
              <span className="c-link-handle">Sudo-Anu</span>
            </a>
            <a href="https://app.hackthebox.com/public/users/2400093" target="_blank" rel="noopener noreferrer" className="c-link">
              <span>HackTheBox</span>
              <span className="c-link-handle">@Anu2006</span>
            </a>
            <a href="https://tryhackme.com/p/anuragraut551" target="_blank" rel="noopener noreferrer" className="c-link">
              <span>TryHackMe</span>
              <span className="c-link-handle">@anuragraut551</span>
            </a>
            <a href="https://www.instagram.com/sudo.anu/" target="_blank" rel="noopener noreferrer" className="c-link">
              <span>Instagram</span>
              <span className="c-link-handle">@sudo.anu</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
