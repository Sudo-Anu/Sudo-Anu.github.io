import React, { useEffect } from 'react';
import './index.css';

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

function App() {
  useEffect(() => {
    // Scroll Reveal Logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 3D Tilt on Hover Logic
    const tiltElements = document.querySelectorAll('.tilt');
    const handleMouseMove = (e) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
      const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
      el.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) scale(1.01)`;
    };
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = '';
    };

    tiltElements.forEach(el => {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Stagger Children Logic
    document.querySelectorAll('.skills-grid .skill-block, .cert-grid .cert-card').forEach((el, i) => {
      el.style.transitionDelay = (i * 0.06) + 's';
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      tiltElements.forEach(el => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
      <MusicPlayer />
    </>
  );
}

export default App;
