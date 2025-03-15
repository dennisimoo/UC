import React from 'react';

function AnuraPage() {
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
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
