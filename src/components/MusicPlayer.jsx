import React, { useState, useRef, useEffect } from 'react';
import { useContent } from '../context/ContentContext';

function fmtTime(s) {
  if (isNaN(s)) return '0:00';
  s = Math.floor(s);
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
}

const MusicPlayer = () => {
  const { content } = useContent();
  const TRACKS = content?.music || [];
  const [collapsed, setCollapsed] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const progressRef = useRef(null);

  const currentTrack = TRACKS[currentTrackIndex];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
    setIsPlaying(true);
  };

  const loadTrack = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const seekTo = (e) => {
    if (!duration) return;
    const rect = progressRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audioRef.current.currentTime = percentage * duration;
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      nextTrack();
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(() => { });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  const fillWidth = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <div id="music-player" className={collapsed ? 'collapsed' : ''}>
        <div className="mp-header" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mp-logo">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          ) : (
            <>
              <span className="mp-title">music player</span>
              <button className="mp-toggle" id="mp-toggle-btn">
                −
              </button>
            </>
          )}
        </div>
        <div className="mp-body" id="mp-body" style={{ display: collapsed ? 'none' : 'block' }}>
          <div className="mp-art">
            <img
              src="/player-art.gif"
              alt="Album Art"
              id="mp-art-img"
              className={isPlaying ? 'playing' : ''}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.querySelector('.mp-art-placeholder').style.display = 'flex';
              }}
            />
            <div className="mp-art-placeholder" style={{ display: 'none' }}>♪</div>
          </div>
          <div className="mp-track">
            <div className="mp-track-name">{currentTrack ? currentTrack.title : 'No track loaded'}</div>
            <div className="mp-track-artist">{currentTrack ? currentTrack.artist : 'Add tracks below'}</div>
          </div>
          <div className="mp-progress" id="mp-progress" ref={progressRef} onClick={seekTo}>
            <div className="mp-progress-fill" style={{ width: `${fillWidth}%` }}></div>
          </div>
          <div className="mp-times">
            <span>{fmtTime(currentTime)}</span>
            <span>{fmtTime(duration)}</span>
          </div>
          <div className="mp-controls">
            <button className="mp-btn" onClick={prevTrack} title="Previous">&#9664;&#9664;</button>
            <button className="mp-btn play" onClick={togglePlay}>
              {isPlaying ? '▮▮' : '▶'}
            </button>
            <button className="mp-btn" onClick={nextTrack} title="Next">&#9654;&#9654;</button>
          </div>
          <div className="mp-tracks">
            {TRACKS.map((t, i) => (
              <div
                key={i}
                className={`mp-track-item ${i === currentTrackIndex ? 'active' : ''}`}
                onClick={() => loadTrack(i)}
              >
                <span className="mp-track-item-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="mp-track-item-name">{t.title} — {t.artist}</span>
              </div>
            ))}
          </div>
          <div className="mp-add-hint"></div>
        </div>
      </div>
      <audio id="audio-el" ref={audioRef} src={currentTrack ? currentTrack.src : ''}></audio>
    </>
  );
};

export default MusicPlayer;
