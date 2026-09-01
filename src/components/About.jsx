import React from 'react';

const About = () => {
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
                Outside of security, I'm obsessed with my <strong>Arch Linux + Hyprland</strong> setup ricing the desktop, automating workflows, and reading research papers at 2 AM with good music.
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

      <div id="arch-section">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="arch-bg-word">ARCH</div>
          <div className="arch-grid reveal">
            <div>
              <p className="arch-label">Daily Driver</p>
              <h3 className="arch-title">ARCH<br/><span>+HYP</span><br/>RLAND</h3>
              <p className="arch-body">
                Not just an OS : a philosophy. Full custom Hyprland compositor, hand tuned waybar, custom keybinds and scripts. A productive desktop is one you built yourself.
              </p>
              <div className="arch-tags">
                <span className="pill">Arch Linux</span>
                <span className="pill">Hyprland WM</span>
                <span className="pill">Waybar</span>
                <span className="pill">Custom Scripts</span>
                <span className="pill">Desktop Ricing</span>
              </div>
            </div>
            <div className="term-window tilt">
              <div className="term-bar">
                <div className="term-dot" style={{ background: '#ff5f56' }}></div>
                <div className="term-dot" style={{ background: '#ffbd2e' }}></div>
                <div className="term-dot" style={{ background: '#27c93f' }}></div>
                <span className="term-title">anu@arch — hyprland</span>
              </div>
              <div className="term-body">
                <div><span className="t-prompt">anu@arch ~ $ </span><span className="t-cmd">neofetch</span></div>
                <div className="t-out hi">       OS: Arch Linux x86_64</div>
                <div className="t-out hi">       WM: Hyprland</div>
                <div className="t-out hi">   Shell: zsh 5.9</div>
                <div className="t-out hi">Terminal: kitty</div>
                <div className="t-out hi">   Theme: custom (dark)</div>
                <div className="t-out hi">   Icons: Papirus-Dark</div>
                <div style={{ marginTop: '8px' }}></div>
                <div><span className="t-prompt">anu@arch ~ $ </span><span className="t-cmd">cat /proc/passion</span></div>
                <div className="t-out">security · ricing · ctf · research</div>
                <div style={{ marginTop: '8px' }}></div>
                <div><span className="t-prompt">anu@arch ~ $ </span><span className="cursor-blink"></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
