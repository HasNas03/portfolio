// App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LoadingScreen from './components/LoadingScreen';
import PlayfulCursor from './components/PlayfulCursor';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderIsRevealing, setLoaderIsRevealing] = useState(false);

  useEffect(() => {
    if (!showLoader) {
      return undefined;
    }

    const revealDelay = 1500;
    const removeDelay = 2000;

    document.body.classList.add('portfolio-is-loading');

    const revealTimer = window.setTimeout(() => {
      setLoaderIsRevealing(true);
    }, revealDelay);

    const removeTimer = window.setTimeout(() => {
      setShowLoader(false);
    }, removeDelay);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(removeTimer);
      document.body.classList.remove('portfolio-is-loading');
    };
  }, [showLoader]);

  return (
    <>
      {showLoader && <LoadingScreen isRevealing={loaderIsRevealing} />}
      <div
        className="App"
        style={{ '--background-image': `url(${process.env.PUBLIC_URL}/background.jpg)` }}
      >
        <Navbar />
        <Home />
        <Experience />
        <Skills />
        <Projects />
      </div>
      {!showLoader && <PlayfulCursor />}
    </>
  );
}

export default App;
