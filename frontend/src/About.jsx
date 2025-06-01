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
import { Button, Card, Bubble } from 'pixel-retroui';

import './App.css';


function About() {
    return (
        <>
        <Header/>
        
        <section className="hero min-h-screen bg-base-200 bg-grid">
            <div className="hero-content">
                <div className="text-center w-full">
                <Card shadowColor="#9437ff" className="max-w-screen w-full my-10">
                    <p className=" font-bold mb-10">About The Team!</p>
                </Card>
                <Card shadowColor="#9437ff" className="group-photo-container my-10 bg-grid">
                    <img src={bowlingPals} className="group-photo" alt="Team group photo" />
                </Card>
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
                            <p>Flip-phone enthusiast and Project Partner -
                                 Interested in Systems and Security -
                                  Role: App Front-End and Project Management
                            </p>
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
                            <p>The Glue of the Club -
                                 Interested in Web/App Development -
                                  Role: App Front-End and Project Management
                            </p>
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
                            <p>The Caddy Catalyst -
                                 Interested in Computer Systems -
                                 Role: Back-end development
                            </p>
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
                            <p>The Bowling Baron -
                                 Interested in Web/App Development-
                                 Role: Website Front-End
                            </p>
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
                            <p>The Cameraman Never Dies -
                                 Interested in Web/App Development -
                                 Role: Website and App Front-End
                            </p>
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
                        <p>The Parser Panther -
                                 Interested in Computer Systems -
                                 Role: App Back-End Development
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className="min-h-screen bg-grid bg-base-300">
            <div>
                <Card shadowColor="#9437ff" className="w-full p-2">
                    <Card  className="max-w-screen w-full my-10">
                        <p id="challenges" className=" font-bold mb-10 text-center">Our Challenges and Solutions</p>
                    </Card>
                    <p className="mb-5 p-6">
                        The road to building this app hasn't been without its bumps. Just some of the obstacles:
                    </p>
                    <div className="w-full flex flex-col items-center gap-8">
                        <Card className="w-full bg-grid">
                            <p className="mb-32 font-bold text-xl">Not enough flip phones for testing</p>
                            <p className="">We simply didn’t have many flip phones to test the app on, 
                                and getting our hands on the right ones wasn't as easy as it would with
                                the latest smartphones.
                            </p>
                            <Bubble direction="right" className='p-4 m-10'>
                                <p className="mb-5">
                                So, some of us got our own flip phones to use for testing, so we could make
                                sure the app works well on real devices. Though it's slow-going to find user testers this way,
                                we're able to share our devices with others to get feedback.

                                </p>
                            </Bubble>
                        </Card>
                        <Card className="w-full bg-grid">
                            <p className="mb-32 font-bold text-xl">APIs might cost money</p>
                            <p className="">The services we use to get maps and directions 
                                (like OpenRouteService and Photon) have limits. If we go over them, 
                                it might cost money.
                            </p>
                            <Bubble direction="right" className='p-4 m-10'>
                                <p className="mb-5">
                                To help with this, our team was granted a stipend from Oregon State University, 
                                which we’ve allocated toward covering essential API usage and hosting needs 
                                for our prototype.
                                </p>
                            </Bubble>
                        </Card>
                        <Card className="w-full bg-grid">
                            <p className="mb-32 font-bold text-xl">Some phones may not support our app- 
                                or block third party apps entirely
                            </p>
                            <p className="">People might buy flip phones from companies that don’t 
                                let you install apps like ours. Even better, a lot of phone providers don’t 
                                let you install apps unless they come from the Play Store or the phone maker. While
                                there are plenty of resources to help get around this, it often takes technical knowledge
                                and a lot of time to figure out the right method for your particular phone.
                            </p>
                            <Bubble direction="right" className='p-4 m-10'>
                                <p className="mb-5">
                                We knew that we had to focus on the phones we know we can develop on. 
                                We also made the app small and simple, in an attempt to keep our accessibility as 
                                broad as we can. Even though we can't support every phone, we can at least give people
                                steps to install the app manually (called sideloading). 
                                Later, we’ll try to find better ways to get the app on more phones.
                                </p>
                            </Bubble>
                        </Card>
                    </div>
                </Card>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default About;
