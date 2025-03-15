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
      <h2>Proxies</h2>

      {/* Lunar Proxies Section */}
      <div style={{ 
        backgroundColor: 'rgba(255,255,255,0.1)', 
        padding: '20px', 
        borderRadius: '10px', 
        marginBottom: '20px' 
      }}>
        <h3>Lunar Proxies</h3>

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
        <p>Another option for browsing securely.</p>

        <a 
          href="https://use.whimsy.me/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Interstellar Proxy
        </a>
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
