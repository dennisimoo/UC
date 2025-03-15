import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import AnuraPage from './AnuraPage';
import ExploitsPage from './ExploitsPage';
import ProxiesPage from './ProxiesPage';
import CelestePage from './CelestePage';
import SchoolCheatsPage from './SchoolCheatsPage';
import './index.css';

function App() {
  const location = useLocation();
  const [isAnuraUnlocked, setIsAnuraUnlocked] = useState(false);
  const [pPressed, setPPressed] = useState(false);
  const [timer, setTimer] = useState(null);
  const [background, setBackground] = useState(localStorage.getItem('background') || '/background.jpg');
  const [showSettings, setShowSettings] = useState(false);
  const fileInput = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'p' && !pPressed) {
        setPPressed(true);
        const newTimer = setTimeout(() => {
          setIsAnuraUnlocked(true);
        }, 3000);
        setTimer(newTimer);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === 'p') {
        setPPressed(false);
        clearTimeout(timer);
        setTimer(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      clearTimeout(timer);
    };
  }, [pPressed, timer]);

  const handleBackgroundChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setBackground(imageUrl);
      localStorage.setItem('background', imageUrl);
    }
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      backgroundImage: location.pathname === '/' ? `url(${background})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {isAnuraUnlocked ? (
        <div>
          <nav style={{ backgroundColor: '#212121', color: 'white', padding: '10px 0', position: 'relative' }}>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
              <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Welcome</Link></li>
              <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/celeste" style={{ color: 'white', textDecoration: 'none' }}>Celeste</Link></li>
              <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/exploits" style={{ color: 'white', textDecoration: 'none' }}>Exploits</Link></li>
              <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/anura" style={{ color: 'white', textDecoration: 'none' }}>Anura</Link></li>
              <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/proxies" style={{ color: 'white', textDecoration: 'none' }}>Proxies</Link></li>
              <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/schoolcheats" style={{ color: 'white', textDecoration: 'none' }}>School Cheats</Link></li>
              <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/guides" style={{ color: 'white', textDecoration: 'none' }}>Guides</Link></li>
            </ul>
            <button onClick={toggleSettings} style={{ color: 'white', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', position: 'absolute', right: '10px', top: '10px', fontSize: '1.2em' }}>
              &#9776;
            </button>
          </nav>
          {showSettings && (
            <div className="settings-popup" style={{ backgroundColor: '#333', color: 'white', padding: '10px', textAlign: 'center', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: '1000' }}>
              <h3>Settings</h3>
              <button onClick={toggleSettings} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2em' }}>X</button>
              <label htmlFor="background-upload">Upload Background:</label>
              <input
                type="file"
                id="background-upload"
                accept="image/*, video/*"
                onChange={handleBackgroundChange}
                style={{ display: 'block', margin: '10px auto' }}
              />
            </div>
          )}
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/celeste" element={<CelestePage />} />
            <Route path="/exploits" element={<ExploitsPage />} />
            <Route path="/anura" element={<AnuraPage />} />
            <Route path="/proxies" element={<ProxiesPage />} />
            <Route path="/schoolcheats" element={<SchoolCheatsPage />} />
            <Route path="/guides" element={<div style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>Coming Soon</div>} />
          </Routes>
        </div>
      ) : (
        <div style={{ backgroundColor: 'white', height: '100vh', width: '100vw' }}>
        </div>
      )}
    </div>
  );
}

export default App;
