import React, { useEffect, useState } from 'react';

function AnuraPage() {
  const [showWarning, setShowWarning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning(false);
    }, 7000); // 7 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {showWarning && (
        <div style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          padding: '40px', 
          borderRadius: '10px', 
          marginBottom: '20px', 
          textAlign: 'center' 
        }}>
          <h3 style={{ marginBottom: '10px' }}>Notice</h3>
          <p style={{ fontSize: '1.5em', padding: '10px' }}>This version won't work on school WiFi. Please ensure you are connected to a different network to access the game.</p>
        </div>
      )}
      <iframe
        src="https://anura.pro"
        width="100%"
        height="100%"
        style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
        title="Anura"
      />
    </div>
  );
}

export default AnuraPage;
