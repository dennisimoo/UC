import React from 'react';

function ProxiesPage() {
  return (
    <div style={{ 
      backgroundColor: '#121212', 
      color: 'white', 
      textAlign: 'center', 
      padding: '50px', 
      minHeight: '100vh', 
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Proxies</h2>

      {/* Lunar Proxies Section */}
      <div style={{ 
        backgroundColor: 'rgba(255,255,255,0.1)', 
        padding: '20px', 
        borderRadius: '10px', 
        marginBottom: '20px' 
      }}>
        <h3>Lunar Proxies</h3>
        <p style={{ marginBottom: '10px' }}>Choose a Lunar Proxy below:</p>

        <a 
          href="http://studying.wdodd.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Lunar Proxy 1
        </a>
        <br />
        <a 
          href="http://studying.wdodd.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Lunar Proxy 2
        </a>
        <br />
        <a 
          href="https://army-navy.3cm.us/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Lunar Proxy 3
        </a>
      </div>

      {/* Interstellar Proxy Section */}
      <div style={{ 
        backgroundColor: 'rgba(255,255,255,0.1)', 
        padding: '20px', 
        borderRadius: '10px' 
      }}>
        <h3>Interstellar Proxy</h3>
        <p>Make break some things, Blocksi may block you.</p>

        <a 
          href="https://use.whimsy.me/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Interstellar Proxy
        </a>
      </div>

      {/* Masker Section */}
      <div style={{ 
        backgroundColor: 'rgba(255,255,255,0.1)', 
        padding: '20px', 
        borderRadius: '10px' 
      }}>
        <h3>Masker</h3>
        <p>
          <a href="https://drive.google.com/file/d/168tkZMincjn6172ZydCDWkdhB8zkGKls/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color: '#00ccff'}}>
            Masker
          </a>
        </p>
        <p>This tool creates a data URL for an iframe. Not all sites work with it.</p>
      </div>
    </div>
  );
}

// Styling for buttons
const linkStyle = {
  color: '#00ccff',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'inline-block',
  padding: '10px 15px',
  border: '1px solid #00ccff',
  borderRadius: '5px',
  marginTop: '10px',
  transition: 'background 0.3s'
};

// Hover effect
const handleHover = (e) => {
  e.target.style.background = 'rgba(0, 204, 255, 0.2)';
};

const handleMouseOut = (e) => {
  e.target.style.background = 'transparent';
};

// Apply event listeners
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("mouseover", handleHover);
    link.addEventListener("mouseout", handleMouseOut);
  });
});

export default ProxiesPage;
