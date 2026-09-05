import React, { useState, useRef, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const DailyDriver = () => {
  const { content, loading } = useContent();
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [loginState, setLoginState] = useState({ step: 'none', email: '' }); // none, email, password
  const termBodyRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && history.length === 0) {
      setHistory([
        { type: 'command', command: 'neofetch' },
        {
          type: 'output',
          content: (
            <>
              <div className="t-out hi">       OS: Arch Linux x86_64</div>
              <div className="t-out hi">       WM: Hyprland</div>
              <div className="t-out hi">   Shell: zsh 5.9</div>
              <div className="t-out hi">Terminal: kitty</div>
              <div className="t-out hi">   Theme: custom (dark)</div>
              <div className="t-out hi">   Icons: Papirus-Dark</div>
            </>
          )
        },
        { type: 'empty' },
        { type: 'command', command: 'cat /proc/passion' },
        { type: 'output', content: <div className="t-out">{content?.about?.heroIntro}</div> },
        { type: 'empty' }
      ]);
    }
  }, [loading, content, history.length]);

  useEffect(() => {
    if (termBodyRef.current) {
      termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
    }
  }, [history, loginState]);

  const handleCommand = async (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      let newEntries = [];

      if (loginState.step === 'email') {
        newEntries.push({ type: 'output', content: <div className="t-cmd">Email: {cmd}</div> });
        setLoginState({ step: 'password', email: cmd });
        setHistory([...history, ...newEntries]);
        setInput('');
        return;
      }

      if (loginState.step === 'password') {
        newEntries.push({ type: 'output', content: <div className="t-cmd">Password: ********</div> });
        setHistory([...history, ...newEntries]);
        setInput('');
        try {
          newEntries.push({ type: 'output', content: <div className="t-out">Authenticating...</div> });
          setHistory([...history, ...newEntries]);
          await signInWithEmailAndPassword(auth, loginState.email, cmd);
          navigate('/dashboard');
        } catch (error) {
          const errEntry = { type: 'output', content: <div className="t-out" style={{ color: 'red' }}>Login failed: {error.message}</div> };
          setHistory([...history, ...newEntries, errEntry]);
          setLoginState({ step: 'none', email: '' });
        }
        return;
      }

      newEntries.push({ type: 'command', command: cmd });

      if (cmd === '') {
        // do nothing
      } else if (cmd.toLowerCase() === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else if (cmd.toLowerCase() === 'login') {
        setLoginState({ step: 'email', email: '' });
      } else if (cmd.toLowerCase() === 'help') {
        const dynamicCmds = (content?.terminalCommands || []).map(c => c.command);
        newEntries.push({
          type: 'output',
          content: (
            <div className="t-out">
              Available commands:<br />
              - <span className="t-cmd" style={{ marginLeft: "10px" }}>login</span>    : access dashboard<br />
              - <span className="t-cmd" style={{ marginLeft: "10px" }}>clear</span>    : clear terminal<br />
              - <span className="t-cmd" style={{ marginLeft: "10px" }}>/Social_Media</span>    : forward to any social media<br />
              {
                dynamicCmds.map(dc => (
                  <span key={dc}>- <span className="t-cmd" style={{ marginLeft: "10px" }}>{dc}</span><br /></span>
                ))
              }
            </div >
          )
        });
      } else {
        const hiddenCmd = (content?.hiddenCommands || []).find(c => c.command.toLowerCase() === cmd.toLowerCase());
        const dynamicCmd = (content?.terminalCommands || []).find(c => c.command.toLowerCase() === cmd.toLowerCase());

        if (hiddenCmd) {
          newEntries.push({ type: 'output', content: <div className="t-out hi">Redirecting to {hiddenCmd.url}...</div> });
          window.open(hiddenCmd.url, '_blank');
        } else if (dynamicCmd) {
          newEntries.push({ type: 'output', content: <div className="t-out hi">{dynamicCmd.output}</div> });
        } else {
          newEntries.push({
            type: 'output',
            content: <div className="t-out">zsh: command not found: {cmd}</div>
          });
        }
      }

      setHistory([...history, ...newEntries]);
      setInput('');
    }
  };

  return (
    <div id="arch-section">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="arch-bg-word">ARCH</div>
        <div className="arch-grid reveal">
          <div>
            <p className="arch-label">Daily Driver</p>
            <h3 className="arch-title">ARCH<br /><span>+HYP</span><br />RLAND</h3>
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
            <div className="term-body" ref={termBodyRef} onClick={() => document.getElementById('term-input').focus()} style={{ cursor: 'text' }}>
              {history.map((entry, i) => {
                if (entry.type === 'command') {
                  return (
                    <div key={i}>
                      <span className="t-prompt">anu@arch ~ $ </span>
                      <span className="t-cmd">{entry.command}</span>
                    </div>
                  );
                }
                if (entry.type === 'output') {
                  return <React.Fragment key={i}>{entry.content}</React.Fragment>;
                }
                if (entry.type === 'empty') {
                  return <div key={i} style={{ marginTop: '8px' }}></div>;
                }
                return null;
              })}

              <div className="term-input-line">
                {loginState.step === 'none' && <span className="t-prompt">anu@arch ~ $ </span>}
                {loginState.step === 'email' && <span className="t-prompt">Email: </span>}
                {loginState.step === 'password' && <span className="t-prompt">Password: </span>}

                <input
                  id="term-input"
                  type={loginState.step === 'password' ? 'password' : 'text'}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyDriver;
