import { useState, useEffect } from 'react';
import PaulImg from './assets/PaulImg.png';
import AidenImg from './assets/AidenImg.jpeg';
import CodyImg from './assets/CodyImg.jpg';
import ReinaImg from './assets/ReinaImg.jpeg';
import PhoenixImg from './assets/PhoenixImg.jpg';
import PreetImg from './assets/PreetImg.png';
import bowlingPals from './assets/bowlingPals.jpeg';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

import './App.css';


function About() {
    return (
        <>
        <Header/>
        
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
        <Footer />
        </>
    )
}

export default About;
