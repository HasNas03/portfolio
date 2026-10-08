import React from 'react';

const PASTEL_SEGMENTS = 5;

function LoadingScreen({ isRevealing }) {
  return (
    <div
      className={`loading-screen${isRevealing ? ' loading-screen--revealing' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loading-screen__content">
        <p className="loading-screen__label">Loading portfolio</p>
        <div className="loading-squares" aria-hidden="true">
          {Array.from({ length: PASTEL_SEGMENTS }, (_, index) => (
            <span
              className="loading-square"
              key={index}
              style={{ '--loader-delay': `${140 + index * 270}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
