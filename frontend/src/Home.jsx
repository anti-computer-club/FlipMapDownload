import { useState, useEffect } from 'react';
import testLogo from './assets/logo.png';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import './App.css';
import { Button } from 'pixel-retroui';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const openNewTab = () => {
  window.open("https://github.com/anti-computer-club", "_blank");
}

function Home() {
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
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200 bgimg">
     
        <div className="hero-content text-center">
        <img src={testLogo} alt="Logo" className="h-100" />
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Flip Maps App</h1>
            <h2 className="text-3xl font-bold gap-4">Old phones can learn new tricks!</h2>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button className="" onClick={() => scrollToSection('start-here')}>
              Get Started
            </Button>
            <Button  onClick={() => openNewTab()}>
              Open Source
            </Button>
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
      <Footer />
    </>
  );
}

export default Home;
