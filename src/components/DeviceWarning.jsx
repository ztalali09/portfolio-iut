import React from 'react';

const overlayStyle = {
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient(120deg, #232526 0%, #414345 100%)',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '2rem',
  fontFamily: 'Inter, sans-serif',
  letterSpacing: '0.02em',
  boxShadow: '0 0 40px 0 rgba(0,0,0,0.4)',
  boxSizing: 'border-box',
  left: 0,
  right: 0,
};

const svgStyle = {
  marginBottom: '32px',
  filter: 'drop-shadow(0 4px 16px #0008)',
};

const h1Style = {
  fontSize: '2.6em',
  marginBottom: '0.3em',
  fontWeight: 800,
  background: 'linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '0.04em',
};

const pStyle = {
  fontSize: '1.25em',
  marginBottom: '0',
  color: '#e0e0e0',
  maxWidth: 480,
  lineHeight: 1.6,
};

export default function DeviceWarning() {
  return (
    <div style={overlayStyle}>
      <svg width="90" height="90" fill="none" viewBox="0 0 24 24" style={svgStyle}>
        <rect x="3" y="5" width="18" height="12" rx="2" fill="#fff"/>
        <rect x="7" y="17" width="10" height="2" rx="1" fill="#ffb347"/>
        <rect x="10" y="19" width="4" height="2" rx="1" fill="#ffcc33"/>
      </svg>
      <h1 style={h1Style}>Experience the Full Magic</h1>
      <p style={pStyle}>
        This portfolio is crafted for a truly immersive desktop experience.<br/>
        Unlock all the visuals, animations, and interactive features by visiting on your computer.<br/><br/>
        <strong>Trust us, it's worth it!</strong>
      </p>
    </div>
  );
} 