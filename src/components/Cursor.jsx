import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    
    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
      }
    };
    
    let animationFrameId;
    const animRing = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      animationFrameId = requestAnimationFrame(animRing);
    };
    
    document.addEventListener('pointermove', onMouseMove);
    animRing();
    
    // Add hover effects dynamically
    const handleMouseEnter = () => {
      if (cursor) { cursor.style.width = '20px'; cursor.style.height = '20px'; }
      if (ring) { ring.style.width = '52px'; ring.style.height = '52px'; }
    };
    
    const handleMouseLeave = () => {
      if (cursor) { cursor.style.width = '12px'; cursor.style.height = '12px'; }
      if (ring) { ring.style.width = '36px'; ring.style.height = '36px'; }
    };
    
    const addHoverListeners = () => {
      document.querySelectorAll('a, button, .mp-track-item, .tab').forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };
    
    addHoverListeners();
    
    // Set up a mutation observer to add hover effects to newly rendered elements (like tracks)
    const observer = new MutationObserver((mutations) => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('pointermove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default Cursor;
