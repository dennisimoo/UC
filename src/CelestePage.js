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
            marginBottom: '10px',
            transition: 'background 0.3s'
          }}
          onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          onMouseOut={(e) => e.target.style.background = 'transparent'}
        >
          Play Celeste (Unmodded)
        </a>
        <br />
        <a 
          href="https://polynomialhelp.myftp.biz/" 
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
          Play Celeste (Modded - Some features may not work)
        </a>
      </div>
    </div>
  );
}

export default CelestePage;
