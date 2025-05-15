import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import testLogo from './assets/logo.png';
import PaulImg from './assets/PaulImg.png';
import AidenImg from './assets/AidenImg.jpeg';
import CodyImg from './assets/CodyImg.jpg';
import ReinaImg from './assets/ReinaImg.JPG';
import PhoenixImg from './assets/PhoenixImg.jpg';
import PreetImg from './assets/PreetImg.png';
import bowlingPals from './assets/bowlingPals.jpeg';
import './App.css';


function About() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          setIsDarkMode(savedTheme === 'dark');
        } else {
          setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
    }, []);
    
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
        <div className="navbar bg-base-100 shadow-sm px-4">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                <img src={testLogo} alt="Logo" className="h-10" />
                <span className="text-3xl font-extrabold">FlipMaps</span>
                </div>
                
                <div className="navbar-container flex items-center">
                <Link to="/" className="btn btn-ghost">Home</Link>
                <Link to="/forum" className="btn btn-ghost">Forum</Link>
                <Link to="/demo" className="btn btn-ghost">Demo</Link>
                <Link to="/downloads" className="btn btn-ghost">Downloads</Link>
                <Link to="/about" className="btn btn-ghost">About</Link>
                </div>
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
        
        <section className="hero min-h-screen bg-base-200 bgimg">
            <div className="hero-content">
                <div className="text-center w-full">
                <h1 className="text-5xl font-bold mb-10">About The Team!</h1>
                <div className="group-photo-container">
                    <img src={bowlingPals} className="group-photo" alt="Team group photo" />
                </div>
                <div className="member-container">
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card-content">
                                <img src={PaulImg} className="team-image" alt="Paul Simko" />
                                <h2>Paul Simko</h2>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Details about Paul Simko</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card-content">
                                <img src={ReinaImg} className="team-image" alt="Cody Renfro" />
                                <h2>Reina Takahara</h2>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Details about Reina Takahara</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card-content">
                                <img src={PhoenixImg} className="team-image" alt="Cody Renfro" />
                                <h2>Phoenix Angulo</h2>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Details about Phoenix Angulo</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card-content">
                                <img src={CodyImg} className="team-image" alt="Cody Renfro" />
                                <h2>Cody Renfro</h2>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Details about Cody Renfro</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card-content">
                                <img src={AidenImg} className="team-image" alt="Aiden Murphy" />
                                <h2>Aiden Murphy</h2>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Details about Aiden Murphy</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card-content">
                                <img src={PreetImg} className="team-image" alt="Cody Renfro" />
                                <h2>Preet Patel</h2>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <p>Details about Preet Patel</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;
