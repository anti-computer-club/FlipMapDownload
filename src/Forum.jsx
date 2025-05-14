import { useState, useEffect } from 'react';
import './App.css';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

function Forum() {
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
      <Header />

      {/* About Section */}
      <section id="start-here" className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">The Forum!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Forum;