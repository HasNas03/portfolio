// App.js

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
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
  );
}

export default App;

