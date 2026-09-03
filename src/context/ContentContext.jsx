import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const ContentContext = createContext();

export const useContent = () => useContext(ContentContext);

const DEFAULT_CONTENT = {
  about: {
    heroIntro: "I break things to understand how to protect them : CTF player, home-lab tinkerer, and proud Arch Linux user.",
    body: "Outside of security, I'm obsessed with my Arch Linux + Hyprland setup ricing the desktop, automating workflows, and reading research papers at 2 AM with good music."
  },
  photoUrl: "/profile.jpg",
  skills: [
    { category: "Category", name: "OFFENSIVE SECURITY", tags: ["Metasploit", "Burp Suite", "John the Ripper", "Netcat", "SQLmap", "Hydra", "Gobuster", "OWASP Tools"] },
    { category: "Category", name: "DEFENSIVE SECURITY", tags: ["Splunk", "Wazuh", "Snort / Suricata", "pfSense", "Wireshark", "Zeek", "YARA", "Incident Response"] },
    { category: "Category", name: "CLOUD & INFRA", tags: ["AWS IAM", "Azure AD", "Docker Security", "Kubernetes", "Terraform", "Linux Hardening", "Active Directory", "Proxmox"] },
    { category: "Category", name: "PROGRAMMING", tags: ["Python", "Bash", "C / C++", "PowerShell", "Go", "JavaScript", "Rust (Learning)"] },
    { category: "Category", name: "REVERSE ENGINEERING", tags: ["Ghidra", "x64dbg", "IDA Pro", "Radare2", "GDB", "Assembly (x86/x64)"] },
    { category: "Category", name: "CERTIFICATIONS", tags: ["eJPT", "CompTIA Security+", "OSCP (In Progress)", "BTL1"] }
  ],
  terminalCommands: [
    { command: "whoami", output: "anu - security enthusiast & developer" },
    { command: "skills", output: "Offensive Security, Python, React, Linux, Network Sec" },
    { command: "cat /proc/passion", output: "security · ricing · ctf · research" }
  ],
  certifications: [
    { name: "ENCIPHERX 4.0 CTF", issuer: "St. Vincent Palloti College of Engineering", status: "earned" },
    { name: "WEB DEVELOPMENT & CMS PATHWAY", issuer: "L&T EduTech", status: "earned" },
    { name: "KASCADE CERTIFIED", issuer: "IIT Kharagpur", status: "earned" },
    { name: "BEGINNER GUIDE TO ETHICAL HACKING", issuer: "Skill Up", status: "earned" },
    { name: "THE BRAIN SPARK 2K25", issuer: "JDCOEM Technical Event", status: "participated" },
    { name: "CODE N CRAFTS", issuer: "JDCOEM Technical Event", status: "participated" },
    { name: "COMPTIA SECURITY+", issuer: "CompTIA", status: "progress" },
    { name: "eJPT — JUNIOR PENETRATION TESTER", issuer: "eLearnSecurity", status: "planned" }
  ],
  music: [
    { title: "Sadqay", artist: "Aashir Wajahat, NAYEL, Nehaal Naseem", src: "/Sadqay.mp3" },
    { title: "Do Pall", artist: "Surinder Kaur", src: "/Do Pall.mp3" },
    { title: "Kaahe Mose", artist: "Garvit - Priyansh", src: "/Kaahe Mose.mp3" },
    { title: "LAAVAN", artist: "Jasmine Sandlas", src: "/Laavan.mp3" },
    { title: "Dhoonde Akhiyaan", artist: "Yasser Desai, Rashmi Virag", src: "/DA.mp3" },
    { title: "After Dark x Sweater Weather", artist: "mikeeysmind", src: "/ADxSW.mp3" },
    { title: "Good For You", artist: "Selena Gomez", src: "/GFY.mp3" }
  ],
  experience: []
};

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(DEFAULT_CONTENT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const docRef = doc(db, "portfolio", "content");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setContent({ ...DEFAULT_CONTENT, ...docSnap.data() });
        } else {
          await setDoc(docRef, DEFAULT_CONTENT);
        }
      } catch (error) {
        console.error("Error fetching content from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const updateContent = async (newContent) => {
    try {
      const docRef = doc(db, "portfolio", "content");
      await setDoc(docRef, newContent);
      setContent(newContent);
    } catch (error) {
      console.error("Error updating content to Firebase:", error);
      throw error;
    }
  };

  return (
    <ContentContext.Provider value={{ content, loading, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};
