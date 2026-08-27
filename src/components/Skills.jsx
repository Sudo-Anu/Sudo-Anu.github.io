import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">SKILLS</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid reveal">
          <div className="skill-block" data-num="01">
            <p className="skill-cat">Category</p>
            <h3 className="skill-name">OFFENSIVE SECURITY</h3>
            <div className="skill-tags">
              <span className="s-tag">Metasploit</span>
              <span className="s-tag">Burp Suite</span>
              <span className="s-tag">John the Ripper</span>
              <span className="s-tag">Netcat</span>
              <span className="s-tag">SQLmap</span>
              <span className="s-tag">Hydra</span>
              <span className="s-tag">Gobuster</span>
              <span className="s-tag">OWASP Tools</span>
            </div>
          </div>
          <div className="skill-block" data-num="02">
            <p className="skill-cat">Category</p>
            <h3 className="skill-name">NETWORKING</h3>
            <div className="skill-tags">
              <span className="s-tag">Nmap</span>
              <span className="s-tag">Wireshark</span>
              <span className="s-tag">TCP/IP</span>
              <span className="s-tag">DNS / DHCP</span>
              <span className="s-tag">Firewall Config</span>
              <span className="s-tag">VPN / Tunneling</span>
              <span className="s-tag">pfSense</span>
            </div>
          </div>
          <div className="skill-block" data-num="03">
            <p className="skill-cat">Category</p>
            <h3 className="skill-name">PROGRAMMING</h3>
            <div className="skill-tags">
              <span className="s-tag">Python</span>
              <span className="s-tag">Bash</span>
              <span className="s-tag">Shell Scripting</span>
              <span className="s-tag">Automation</span>
              <span className="s-tag">Git / GitHub</span>
            </div>
          </div>
          <div className="skill-block" data-num="04">
            <p className="skill-cat">Category</p>
            <h3 className="skill-name">OPERATING SYSTEMS</h3>
            <div className="skill-tags">
              <span className="s-tag">Arch Linux</span>
              <span className="s-tag">Kali Linux</span>
              <span className="s-tag">Hyprland (WM)</span>
              <span className="s-tag">Parrot OS</span>
              <span className="s-tag">Linux CLI</span>
              <span className="s-tag">VM Setup</span>
            </div>
          </div>
          <div className="skill-block" data-num="05">
            <p className="skill-cat">Category</p>
            <h3 className="skill-name">CTF & RESEARCH</h3>
            <div className="skill-tags">
              <span className="s-tag">HackTheBox</span>
              <span className="s-tag">TryHackMe</span>
              <span className="s-tag">OSINT</span>
              <span className="s-tag">Steganography</span>
              <span className="s-tag">Reverse Eng.</span>
              <span className="s-tag">Web Exploitation</span>
            </div>
          </div>
          <div className="skill-block" data-num="06">
            <p className="skill-cat">Category</p>
            <h3 className="skill-name">HOME LAB</h3>
            <div className="skill-tags">
              <span className="s-tag">Self-hosting</span>
              <span className="s-tag">Virtual Networking</span>
              <span className="s-tag">VirtualBox</span>
              <span className="s-tag">VMware</span>
              <span className="s-tag">Docker (learning)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
