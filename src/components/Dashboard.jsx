import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const ArrayEditor = ({ items = [], itemTemplate, renderItem, onChange }) => {
  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx} style={{ background: 'var(--off-black)', padding: '20px', border: '1px solid var(--border)', marginBottom: '16px', position: 'relative' }}>
           <button 
             onClick={() => { const copy = [...items]; copy.splice(idx, 1); onChange(copy); }}
             style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', color: '#ff5f56', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
           >
             [X] REMOVE
           </button>
           {renderItem(item, (field, val) => {
               const copy = [...items];
               copy[idx][field] = val;
               onChange(copy);
           }, idx)}
        </div>
      ))}
      <button className="btn-ghost" style={{ width: '100%', borderColor: 'var(--border-strong)' }} onClick={() => onChange([...items, JSON.parse(JSON.stringify(itemTemplate))])}>
        + ADD NEW ITEM
      </button>
    </div>
  );
};

const Dashboard = () => {
  const { content, loading, updateContent } = useContent();
  const [editingContent, setEditingContent] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) navigate('/');
    });
    return () => unsubscribe();
  }, [navigate]);

  React.useEffect(() => {
    if (!loading && content) {
      setEditingContent(JSON.parse(JSON.stringify(content))); // Deep copy
    }
  }, [content, loading]);

  if (loading || !editingContent) {
    return <div style={{ color: 'white', padding: '100px' }}>Loading Dashboard...</div>;
  }

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const handleSave = async () => {
    try {
      await updateContent(editingContent);
      alert('Content saved successfully to Firebase!');
    } catch (e) {
      alert('Error saving content: ' + e.message);
    }
  };

  const updateField = (path, value) => {
    setEditingContent(prev => {
       const next = { ...prev };
       let current = next;
       for (let i = 0; i < path.length - 1; i++) {
         current = current[path[i]];
       }
       current[path[path.length - 1]] = value;
       return next;
    });
  };

  const inputStyle = { width: '100%', background: 'transparent', color: 'var(--white)', border: '1px solid var(--border-strong)', padding: '10px 14px', fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '16px' };
  const labelStyle = { color: 'var(--gray)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', display: 'block' };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--black)', color: 'var(--off-white)', fontFamily: 'var(--font-mono)' }}>
      
      {/* Sidebar */}
      <div style={{ width: '280px', borderRight: '1px solid var(--border)', padding: '30px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--white)', marginBottom: '40px', letterSpacing: '2px', fontSize: '24px' }}>DASHBOARD</h2>
        
        {['profile', 'skills', 'certs', 'music', 'terminal'].map(tab => (
           <button 
             key={tab}
             onClick={() => setActiveTab(tab)}
             style={{
               background: activeTab === tab ? 'var(--border)' : 'transparent',
               color: activeTab === tab ? 'var(--white)' : 'var(--gray)',
               border: '1px solid ' + (activeTab === tab ? 'var(--border-strong)' : 'transparent'),
               padding: '12px 16px',
               textAlign: 'left',
               cursor: 'pointer',
               marginBottom: '8px',
               fontFamily: 'var(--font-mono)',
               textTransform: 'uppercase',
               letterSpacing: '1px',
               transition: 'all 0.2s',
               borderLeft: activeTab === tab ? '3px solid var(--white)' : '1px solid transparent'
             }}
           >
             {tab}
           </button>
        ))}

        <div style={{ marginTop: 'auto' }}>
          <button onClick={handleLogout} style={{ width: '100%', background: 'transparent', border: '1px solid #ff5f56', color: '#ff5f56', padding: '12px', cursor: 'pointer', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
             Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '40px 60px', overflowY: 'auto', maxHeight: '100vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
           <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>{activeTab}</h3>
           <button onClick={handleSave} className="pill accent" style={{ cursor: 'pointer', fontSize: '14px', border: 'none' }}>SAVE CHANGES</button>
        </div>

        <div style={{ maxWidth: '800px' }}>
          {activeTab === 'profile' && (
            <div>
              <label style={labelStyle}>Profile Picture URL</label>
              <input type="text" style={inputStyle} value={editingContent.photoUrl || ''} onChange={(e) => updateField(['photoUrl'], e.target.value)} placeholder="e.g. /profile.jpg or https://imgur.com/..." />
              {editingContent.photoUrl && <img src={editingContent.photoUrl} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '24px', border: '1px solid var(--border)' }} />}
              
              <label style={labelStyle}>Hero Introduction</label>
              <textarea style={{...inputStyle, height: '80px'}} value={editingContent.about.heroIntro || ''} onChange={(e) => updateField(['about', 'heroIntro'], e.target.value)} />
              
              <label style={labelStyle}>About Me (Main Paragraph)</label>
              <textarea style={{...inputStyle, height: '120px'}} value={editingContent.about.body || ''} onChange={(e) => updateField(['about', 'body'], e.target.value)} />
            </div>
          )}

          {activeTab === 'skills' && (
            <ArrayEditor
               items={editingContent.skills}
               itemTemplate={{ category: "Category", name: "NEW SKILL", tags: [] }}
               onChange={(newArr) => updateField(['skills'], newArr)}
               renderItem={(item, update, idx) => (
                 <div>
                   <label style={labelStyle}>Category (Small Label)</label>
                   <input type="text" style={inputStyle} value={item.category || ''} onChange={(e) => update('category', e.target.value)} />
                   
                   <label style={labelStyle}>Main Skill Name</label>
                   <input type="text" style={inputStyle} value={item.name || ''} onChange={(e) => update('name', e.target.value)} />
                   
                   <label style={labelStyle}>Tags (Comma separated)</label>
                   <input type="text" style={inputStyle} value={(item.tags || []).join(', ')} onChange={(e) => update('tags', e.target.value.split(',').map(s=>s.trim()).filter(Boolean))} />
                 </div>
               )}
            />
          )}

          {activeTab === 'certs' && (
            <ArrayEditor
               items={editingContent.certifications || []}
               itemTemplate={{ name: "New Certification", issuer: "Issuer", status: "earned" }}
               onChange={(newArr) => updateField(['certifications'], newArr)}
               renderItem={(item, update) => (
                 <div>
                   <label style={labelStyle}>Certification Name</label>
                   <input type="text" style={inputStyle} value={item.name || ''} onChange={(e) => update('name', e.target.value)} />
                   
                   <label style={labelStyle}>Issuer (Organization)</label>
                   <input type="text" style={inputStyle} value={item.issuer || ''} onChange={(e) => update('issuer', e.target.value)} />
                   
                   <label style={labelStyle}>Status (earned, progress, planned)</label>
                   <select style={{...inputStyle, WebkitAppearance: 'none'}} value={item.status || 'earned'} onChange={(e) => update('status', e.target.value)}>
                     <option value="earned" style={{color:'black'}}>Earned</option>
                     <option value="progress" style={{color:'black'}}>In Progress</option>
                     <option value="planned" style={{color:'black'}}>Planned</option>
                   </select>
                 </div>
               )}
            />
          )}

          {activeTab === 'music' && (
            <ArrayEditor
               items={editingContent.music || []}
               itemTemplate={{ title: "New Song", artist: "Artist", src: "/song.mp3" }}
               onChange={(newArr) => updateField(['music'], newArr)}
               renderItem={(item, update) => (
                 <div>
                   <label style={labelStyle}>Song Title</label>
                   <input type="text" style={inputStyle} value={item.title || ''} onChange={(e) => update('title', e.target.value)} />
                   
                   <label style={labelStyle}>Artist</label>
                   <input type="text" style={inputStyle} value={item.artist || ''} onChange={(e) => update('artist', e.target.value)} />
                   
                   <label style={labelStyle}>Source URL (.mp3 file path or link)</label>
                   <input type="text" style={inputStyle} value={item.src || ''} onChange={(e) => update('src', e.target.value)} />
                 </div>
               )}
            />
          )}

          {activeTab === 'terminal' && (
            <ArrayEditor
               items={editingContent.terminalCommands || []}
               itemTemplate={{ command: "new_cmd", output: "Output here" }}
               onChange={(newArr) => updateField(['terminalCommands'], newArr)}
               renderItem={(item, update) => (
                 <div>
                   <label style={labelStyle}>Command trigger</label>
                   <input type="text" style={inputStyle} value={item.command || ''} onChange={(e) => update('command', e.target.value)} />
                   
                   <label style={labelStyle}>Command output</label>
                   <input type="text" style={inputStyle} value={item.output || ''} onChange={(e) => update('output', e.target.value)} />
                 </div>
               )}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
