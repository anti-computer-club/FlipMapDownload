import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function Downloads() {
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
        <div className="hero-content flex-col gap-12">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Download Page!</h1>
          </div>
          <div className="max-w-md w-full flex flex-col items-center gap-8">
            <button className="btn btn-primary">Option 1</button>
            <button className="btn btn-primary">Option 2</button>
            <button className="btn btn-primary">Option 3</button>
            <button className="btn btn-primary">Option 4</button>
            <button className="btn btn-primary">Option 5</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
  
export default Downloads;