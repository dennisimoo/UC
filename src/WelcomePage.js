import React from 'react';

function WelcomePage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    }}>
      <h1 style={{
        fontSize: '5em',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      }}>Welcome!</h1>
    </div>
  );
}

export default WelcomePage;
