import React from 'react';

function CelestePage() {
  return (
    <div style={{ 
      position: 'relative', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center', 
      padding: '20px', 
      overflow: 'hidden' 
    }}>
      <video 
        autoPlay 
        loop 
        muted 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          zIndex: -1 
        }}
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
      </video>
      <div style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        padding: '20px', 
        borderRadius: '10px' 
      }}>
        <h2>Celeste</h2>
        <h3>Download & Play</h3>
        <p>Choose an option below to play Celeste:</p>
        <div>
          <a 
            href="https://poynomialhelp.myftp.biz/" 
            style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              padding: '10px 15px',
              border: '1px solid white',
              borderRadius: '5px',
              display: 'inline-block',
              marginRight: '10px',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseOut={(e) => e.target.style.background = 'transparent'}
          >
            Play Celeste
          </a>
          <a 
            href="https://drive.google.com/file/d/1ztdSFenq1zZWufYySpQpQS772PhqvpqO/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              padding: '10px 15px',
              border: '1px solid white',
              borderRadius: '5px',
              display: 'inline-block',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseOut={(e) => e.target.style.background = 'transparent'}
          >
            Celeste Chapter 6
          </a>
        </div>
        <p style={{ marginTop: '10px' }}>For the Chapter 6 fixed version, it cannot be played on school WiFi.</p>
      </div>
    </div>
  );
}

export default CelestePage;
