import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import testLogo from './assets/logo.png';
import './App.css';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Apply theme class to body
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setIsDarkMode(e.target.checked);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="flex items-center gap-4">
          <img src={testLogo} alt="Logo" className="h-10" />
          <span className="text-3xl font-extrabold">FlipMaps</span>
          <Link to="/" className="btn btn-ghost">Home</Link>
          <Link to="/forum" className="btn btn-ghost">Forum</Link>
          <Link to="/demo" className="btn btn-ghost">Demo</Link>
          <Link to="/downloads" className="btn btn-ghost">Downloads</Link>
        </div>
        <div className="ml-auto">
          <label className="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              className="toggle theme-controller"
              checked={isDarkMode}
              onChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </label>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200 bgimg">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Old phones can learn new tricks!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary" onClick={() => scrollToSection('start-here')}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="start-here" className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">About The App!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-neutral text-neutral-content items-center p-4">
        <aside className="flex items-center gap-2">
          <svg width="36" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M22.672 15.226...z" />
          </svg>
          <p>Anti Computer Club © 2024–{new Date().getFullYear()} — All rights reserved</p>
        </aside>
        <nav className="ml-auto flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M24 4.557...z" />
            </svg>
          </a>
        </nav>
      </footer>
    </>
  );
}

export default App;