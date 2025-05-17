import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import testImg from './assets/tcl_standin_pic.jpeg';
import testLogo from './assets/logo.png';
import './App.css';
import Footer from './components/footer.jsx';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggleTheme = (e) => {
    setIsDarkMode(e.target.checked);
    localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <>
        <div className="navbar bg-base-100 shadow-sm">
          <img src={testLogo} alt="Logo" className="h-10" />
          <div className="flex-1">
            <a className="btn btn-ghost text-5xl font-extrabold mx-0 px-0">FlipMaps</a>
          </div>

          {/* Tabs */}
          <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "btn btn-ghost bg-neutral text-blue-400"
      : "btn btn-ghost text-blue-400"
  }
>
  Home
</NavLink>
<NavLink
  to="/projects"
  className={({ isActive }) =>
    isActive
      ? "btn btn-ghost bg-neutral text-blue-400"
      : "btn btn-ghost text-blue-400"
  }
>
  Projects
</NavLink>
<NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? "btn btn-ghost bg-neutral text-blue-400"
      : "btn btn-ghost text-blue-400"
  }
>
  Contact
</NavLink>


          <div className="flex-none">
            <label className="flex cursor-pointer gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input type="checkbox" className="toggle theme-controller" checked={isDarkMode} onChange={toggleTheme} />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </label>
          </div>
        </div>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <div className="hero bg-base-200 min-h-screen bgimg">
                <div className="hero-content text-center">
                  <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Old phones can learn new tricks!</h1>
                    <p className="py-6">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary" onClick={() => scrollToSection('start-here')}>Get Started</button>
                  </div>
                </div>
              </div>
              <div className="hero bg-base-200 min-h-screen">
                <div id="start-here" className="hero-content flex-col lg:flex-row-reverse">
                  <div className="max-w-md flex justify-center items-center flex-col gap-8">
                    <button className="btn btn-secondary btn-wide" onClick={() => scrollToSection('start-here')}>Download Here</button>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4_twwdp9nPs?si=88L2sgcGRXFIld7d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </>
          } />
<Route path="/projects" element={
  <div className="hero min-h-screen bg-base-200 text-center">
    <div className="hero-content flex-col">
      <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
      <p className="py-2 text-xl">More info coming soon...</p>
    </div>
  </div>
} />

      <Route path="/contact" element={
  <div className="hero min-h-screen bg-base-200 text-center">
    <div className="hero-content flex-col">
      <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
      <p className="py-2">Reach out to our team:</p>
      <ul className="text-xl list-disc list-inside space-y-2">
        <li>Reina</li>
        <li>Phoenix</li>
        <li>Aiden</li>
        <li>Paul</li>
        <li>Cody</li>
        <li>Preet</li>
      </ul>
    </div>
  </div>
} />

        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
