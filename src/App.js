// App.js

import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    const wheelItems = Array.from(document.querySelectorAll([
      '.home > .sectiontitle',
      '.home > .intro-card',
      '.home > .icons',
      '.experience > .sectiontitle',
      '.experience .timeline-item',
      '.skills > .sectiontitle',
      '.skills .skill-item',
      '.projects > .sectiontitle',
      '.projectList > *',
    ].join(', ')));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isLocalPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    let frameId = null;
    let wheelObserver = null;
    const nearbyWheelItems = new Set();
    const wheelStates = new Map(
      wheelItems.map((item) => [item, { currentPosition: 0, targetPosition: 0 }])
    );

    const wheelMotionIsEnabled = () => !reducedMotion.matches || isLocalPreview;

    wheelItems.forEach((item) => item.classList.add('wheel-scroll-item'));

    const resetWheelStyles = () => {
      wheelItems.forEach((item) => {
        item.style.removeProperty('--wheel-tilt');
        item.style.removeProperty('--wheel-shift');
        item.style.removeProperty('--wheel-scale');
        item.style.removeProperty('--wheel-opacity');
      });
    };

    const getDocumentTop = (element) => {
      let top = 0;
      let currentElement = element;

      while (currentElement) {
        top += currentElement.offsetTop;
        currentElement = currentElement.offsetParent;
      }

      return top;
    };

    const applyWheelPosition = (item, wheelPosition) => {
      const wheelDepth = Math.abs(wheelPosition);

      item.style.setProperty('--wheel-tilt', `${wheelPosition * -32}deg`);
      item.style.setProperty('--wheel-shift', `${wheelPosition * 48}px`);
      item.style.setProperty('--wheel-scale', `${1 - wheelDepth * 0.14}`);
      item.style.setProperty('--wheel-opacity', `${1 - wheelDepth * 0.38}`);
    };

    const updateWheelTargets = (snapToPosition = false) => {
      document.documentElement.classList.toggle('wheel-motion-active', wheelMotionIsEnabled());

      if (!wheelMotionIsEnabled()) {
        wheelItems.forEach((item) => item.classList.remove('wheel-scroll-nearby'));
        resetWheelStyles();
        return false;
      }

      const topFlatEdge = window.innerHeight * 0.04;
      const bottomFlatEdge = window.innerHeight * 0.96;

      nearbyWheelItems.forEach((item) => {
        item.classList.add('wheel-scroll-nearby');
        const itemCenter = getDocumentTop(item) + item.offsetHeight / 2 - window.scrollY;
        let wheelPosition = 0;

        if (itemCenter < topFlatEdge) {
          wheelPosition = (itemCenter - topFlatEdge) / topFlatEdge;
        } else if (itemCenter > bottomFlatEdge) {
          wheelPosition = (itemCenter - bottomFlatEdge) / (window.innerHeight - bottomFlatEdge);
        }

        wheelPosition = Math.max(-1, Math.min(1, wheelPosition));

        const direction = Math.sign(wheelPosition);
        const distanceFromFlatArea = Math.abs(wheelPosition);
        const easedDistance = distanceFromFlatArea * distanceFromFlatArea * (3 - 2 * distanceFromFlatArea);
        const state = wheelStates.get(item);

        state.targetPosition = direction * easedDistance;

        if (snapToPosition) {
          state.currentPosition = state.targetPosition;
          applyWheelPosition(item, state.currentPosition);
        }
      });

      return true;
    };

    const animateWheel = () => {
      frameId = null;
      let animationIsSettling = false;

      nearbyWheelItems.forEach((item) => {
        const state = wheelStates.get(item);
        const distanceToTarget = state.targetPosition - state.currentPosition;

        if (Math.abs(distanceToTarget) > 0.0005) {
          state.currentPosition += distanceToTarget * 0.18;
          animationIsSettling = true;
        } else {
          state.currentPosition = state.targetPosition;
        }

        applyWheelPosition(item, state.currentPosition);
      });

      if (animationIsSettling) {
        frameId = window.requestAnimationFrame(animateWheel);
      }
    };

    const requestWheelUpdate = () => {
      if (updateWheelTargets() && frameId === null) {
        frameId = window.requestAnimationFrame(animateWheel);
      }
    };

    wheelObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const item = entry.target;

        if (entry.isIntersecting) {
          nearbyWheelItems.add(item);
        } else {
          nearbyWheelItems.delete(item);
          item.classList.remove('wheel-scroll-nearby');
        }
      });

      requestWheelUpdate();
    }, {
      root: null,
      rootMargin: '25% 0px',
      threshold: 0,
    });

    wheelItems.forEach((item) => wheelObserver.observe(item));
    window.addEventListener('scroll', requestWheelUpdate, { passive: true });
    window.addEventListener('resize', requestWheelUpdate);
    reducedMotion.addEventListener?.('change', requestWheelUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', requestWheelUpdate);
      window.removeEventListener('resize', requestWheelUpdate);
      reducedMotion.removeEventListener?.('change', requestWheelUpdate);
      wheelObserver?.disconnect();
      document.documentElement.classList.remove('wheel-motion-active');
      resetWheelStyles();
      wheelItems.forEach((item) => {
        item.classList.remove('wheel-scroll-item');
        item.classList.remove('wheel-scroll-nearby');
      });
    };
  }, []);

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
