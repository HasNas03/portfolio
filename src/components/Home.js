import React from 'react';
import me from '../assets/me.jpeg';

function Home() {
  return (
    <section className="home">
      <h1 className="sectiontitle firsttitle">Hi, I'm Hasan Nasir</h1>
      <div className="intro-card">
        <img className="intro-image" src={me} alt="Hasan Nasir" />
        <p className="intro-text">Hello there! I'm a recent University of Toronto graduate in Computer Science, Geospatial Data Science, and Applied Statistics. I enjoy building scalable modular applications, and love chatting about comic books, Formula 1, and the Cloud! Actively seeing new-grad positions : )</p>
      </div>

      {/* Links */}
      <div className="icons">
        <a className="btn first" href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-description" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 17h6" /><path d="M9 13h6" /></svg>
          <span className="btn-label">Read my Resume!</span>
        </a>

        <a className="btn" href="https://www.linkedin.com/in/hasan-nasir-451959247/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg><span className="btn-label">Visit my LinkedIn!</span></a>

        <a className="btn" href="https://github.com/HasNas03" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg><span className="btn-label">Explore my GitHub : )</span></a>

        <a className="btn" href="mailto:hasan.nasir100@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg><span className="btn-label">Send me an email : )</span></a>
      </div>
    </section>
  );
}

export default Home;

