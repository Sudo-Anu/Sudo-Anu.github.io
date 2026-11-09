
```
                                                                                
     ██████╗ ██╗   ██╗██████╗  ██████╗       █████╗ ███╗   ██╗██╗   ██╗        
    ██╔════╝ ██║   ██║██╔══██╗██╔═══██╗     ██╔══██╗████╗  ██║██║   ██║        
    ╚█████╗  ██║   ██║██║  ██║██║   ██║     ███████║██╔██╗ ██║██║   ██║        
     ╚═══██╗ ██║   ██║██║  ██║██║   ██║     ██╔══██║██║╚██╗██║██║   ██║        
    ██████╔╝ ╚██████╔╝██████╔╝╚██████╔╝  ██╗██║  ██║██║ ╚████║╚██████╔╝        
    ╚═════╝   ╚═════╝ ╚═════╝  ╚═════╝   ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝        
                                                                                
```

<div align="center">

**`anu@arch ~ $ cat /proc/identity`**

[![Portfolio](https://img.shields.io/badge/🌐_LIVE-sudo--anu.github.io-f0ede8?style=for-the-badge&labelColor=0a0a0a)](https://sudo-anu.github.io)
[![HackTheBox](https://img.shields.io/badge/HTB-@Anu2006-9fef00?style=for-the-badge&logo=hackthebox&logoColor=9fef00&labelColor=0a0a0a)](https://app.hackthebox.com/public/users/2400093)
[![TryHackMe](https://img.shields.io/badge/THM-@anuragraut551-c11111?style=for-the-badge&logo=tryhackme&logoColor=c11111&labelColor=0a0a0a)](https://tryhackme.com/p/anuragraut551)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Aniruddha_Raut-0a66c2?style=for-the-badge&logo=linkedin&logoColor=0a66c2&labelColor=0a0a0a)](https://www.linkedin.com/in/aniruddha-r-raut)

---

### `// PERSONAL PORTFOLIO — v2.0`

A terminal-inspired, dark-themed portfolio built from scratch.
Custom cursor · scroll-reveal animations · interactive terminal · built-in music player · Firebase CMS.

**I break things to understand how to protect them.**

</div>

---

## `$ neofetch`

```
       /\          anu@portfolio
      /  \         ─────────────────────────
     /    \        ROLE       Cybersecurity Student
    /      \       COLLEGE    JDCOEM, Nagpur
   /   ,,   \      STACK      React 19 · Vite 8 · Firebase
  /   |  |  -\     OS         Arch Linux + Hyprland
 /_-''    ''-_\    TERMINAL   kitty
                   SHELL      zsh
                   INTERESTS  Pentesting · CTFs · Bug Bounty · Ricing
```

---

## `$ tree --dirsfirst src/`

```
src/
├── context/
│   └── ContentContext.jsx      # React Context — fetches/caches all site content from Firestore
├── components/
│   ├── Navbar.jsx              # Fixed top navigation — smooth-scroll to sections
│   ├── Hero.jsx                # Landing section — name, pills, CTA buttons, profile photo
│   ├── About.jsx               # Bio, fact list, stats row + renders DailyDriver
│   ├── DailyDriver.jsx         # ⚡ Interactive terminal emulator — boot sequence, commands, login
│   ├── Skills.jsx              # Skill blocks grid — categories + tags from Firestore
│   ├── Projects.jsx            # GitHub repos — 3D Swiper carousel or list view, live from API
│   ├── Certifications.jsx      # Cert cards — earned / in-progress / planned badges
│   ├── Experience.jsx          # Timeline — or placeholder if no entries yet
│   ├── Contact.jsx             # Social links + email CTA
│   ├── Footer.jsx              # Build info — "Built on Arch · Deployed on GitHub Pages"
│   ├── MusicPlayer.jsx         # 🎵 Floating collapsible player — play/pause/seek/playlist
│   ├── Cursor.jsx              # Custom cursor dot + ring with hover scaling
│   └── Dashboard.jsx           # 🔒 Auth-gated CMS — edit all content, save to Firestore
├── assets/                     # Build-time assets (hero.png, svg logos)
├── firebase.js                 # Firebase init — exports auth & db
├── App.jsx                     # Root — routing, scroll-reveal & tilt observers
├── main.jsx                    # Entry — StrictMode → HashRouter → ContentProvider → App
├── index.css                   # 🎨 ALL styles (~1000+ lines) — tokens, layout, animations
└── App.css                     # (unused legacy scaffold CSS)
```

---

## `$ cat features.log`

```diff
+ Custom cursor with mix-blend-mode: difference — dot follows mouse, ring lags with lerp
+ Scroll-reveal animations via IntersectionObserver with staggered delays
+ 3D tilt effect on hover (perspective + rotateX/Y)
+ Film grain noise overlay via SVG fractalNoise filter
+ Interactive terminal with boot sequence (neofetch), command system, and Firebase login
+ Built-in music player — 7 tracks, auto-advance, seekable progress bar
+ Projects auto-fetched from GitHub API — fallback to hardcoded data
+ Firebase CMS dashboard — edit everything without touching code
+ Monochrome design system — warm whites on deep black, no accent color needed
+ Fully responsive — desktop to mobile
```

---

## `$ cat stack.yml`

```yaml
framework:    React 19
bundler:      Vite 8
router:       react-router-dom v7 (HashRouter)
styling:      Plain CSS (single file, BEM-ish classes)
slider:       Swiper 14 (coverflow + autoplay)
backend:      Firebase (Firestore + Auth)
linter:       oxlint
deploy:       GitHub Actions → GitHub Pages
fonts:
  display:    Bebas Neue
  mono:       DM Mono
  body:       DM Sans
```

---

## `$ ./run.sh`

```bash
# Clone
git clone https://github.com/Sudo-Anu/Sudo-Anu.github.io.git
cd Sudo-Anu.github.io

# Install
npm install

# Dev server
npm run dev

# Build for production
npm run build
```

---

## `$ cat design-tokens.css`

```css
:root {
  --black:         #0a0a0a;
  --off-black:     #111;
  --white:         #f0ede8;    /* warm white */
  --off-white:     #d8d5cf;
  --gray:          #888;
  --gray-dim:      #444;
  --font-display:  'Bebas Neue', sans-serif;
  --font-mono:     'DM Mono', monospace;
  --font-body:     'DM Sans', sans-serif;
}
```

---

<div align="center">

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   "A well-configured desktop is a productive desktop."       │
│                                                              │
│                              — anu@arch                      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Built on Arch · Riced with Hyprland · Deployed on GitHub Pages**

`© 2026 Aniruddha Raut`

</div>
