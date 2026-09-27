import React from 'react';

const Navbar = () => {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <a className="nav-logo" href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>AR</a>
      <ul className="nav-links">
        <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
        <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
        <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
        <li><a href="#certs" onClick={(e) => scrollToSection(e, 'certs')}>Certs</a></li>
        <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

