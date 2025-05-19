import { useState, useEffect } from 'react';
import testLogo from './assets/logo.png';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import './App.css';
import {Link} from 'react-router-dom';
import { Button, Card } from 'pixel-retroui';
import ContactForm from './components/contactForm.jsx';

import openNewTab from './utils/openNewTab.jsx';

import stackImg from './assets/stack.png';
import aidenCampusImg from '../public/aidenCampus.jpg';
import reina101Img from './assets/reina101.jpg';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function Home() {
  return (
    <>
      <Header/>
      <section className="hero bg min-h-screen bg-grid">
     
        <Card  shadowColor="#9437ff" className="hero-content relative">
          <div className="flex flex-col items-center gap-8">
            <img src={testLogo} alt="Logo" className="h-100" />
            <div className="max-w-md">
              <h1 className="text-5xl font-extrabold">FlipMap App</h1>
              <h2 className="text-3xl font-bold gap-4 mb-4">Who said old phones can't learn new tricks?</h2>
            </div>

          </div>
          <Button className='absolute bottom-4 right-4' 
            onClick={() => scrollToSection('start-here')}
          >
            Get started --> </Button>

        </Card>
      </section>

      <div
        className="hero min-h-screen relative bg-grid" id='start-here'
      >
        <Card   shadowColor="#9437ff" className="">
          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card   shadowColor="#000000" className="w-full">
              <p className="mb-4 font-bold">
                Flip phones belong in a museum — at least that’s what devs think.
              </p>
              <p className="mb-5">
              We’re working to add modern functionality without modern temptations. 
              With flip map, you can navigate from place to place without anyone profiting 
              from your data or attention. Big tech wants your attention. 
              Log off without losing the perks of smartphone functionality.
              </p>
            </Card>
            <div>
              <p className="mb-5">
              Our project solves the lack of accessible, functional navigation tools for flip 
              phones that run on Android, a rapidly growing niche segment of mobile devices. 
              However, they are often excluded from modern navigation solutions due to hardware 
              limitations, low resolution screens, and lack of optimized software. 
              By creating a lightweight, modular navigation app tailored specifically for 
              these constraints, we provide users of Android flip phones with reliable turn-by-turn 
              directions, map viewing, and route planning.
              </p>
            </div>
          </div>
          <Button className='absolute bottom-4 right-4' onClick={() => scrollToSection('benefits')}>
            Keep talking...
          </Button>

        </Card>
      </div>




      <div className="hero min-h-screen bg-grid" id="benefits">
        <div className="hero-content">
          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center p-3">
                <img
                  src={reina101Img}
                  className="rounded-lg shadow-lg max-h-80 mb-10"
                />
                <Button className='' onClick={() => scrollToSection('technical-stack')}>
                  Our stack -->
                </Button>
            </div>
            <Card shadowColor="#9437ff">
              <p className="mb-4 font-bold">
              But who benefits from this project?
              </p>
              <p className="mb-5">
              These phones have been gaining popularity among users seeking simplicity, 
              affordability, or a distraction-free way of living. Some are parents who 
              choose basic phones for their children and want them to have access to reliable 
              navigation when away from home. Others are individuals seeking to reduce screen 
              time while still having access to essential smartphone functionality. The user 
              base also includes those who want to be excluded from modern technology and want 
              an alternative to mainstream tech.
              </p>
            </Card>
          </div>
        </div>
      </div>


      <Card className="hero min-h-screen relative bg-grid-white" id='technical-stack'>
        <div className="hero-content pb-2">
          <img
            src={stackImg}
            className="w-1/2 h-1/2 shadow-lg"
          />
          <Card shadowColor="#9437ff"
             className="p-4 text-center"
          >
            <p className="text-3xl font-bold py-4">Our Technical Stack</p>
            <Button
                // bg="#fefcd0"
                // textColor="black"
                // borderColor="black"
                // shadow="#c381b5"
                onClick={() => openNewTab("https://github.com/anti-computer-club")}
              >
                Open Source
            </Button>
            <div className=" p-8 font-sans">
              <div className="max-w-5xl mx-auto rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <p className="text-xl font-semibold  mb-2">Frontend</p>
                    <p className=" mb-4">High-performance debloated modern libraries:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Android’s Jetpack Compose</li>
                      <li>Kotlin</li>
                      <li>OpenStreetMap</li>
                      <li>osmdroid</li>
                    </ul>
                  </Card>
                  <Card>
                    <p className="text-xl font-semibold mb-2">Backend</p>
                    <ul className="list-disc list-inside  m space-y-5">
                      <li>Rust</li>
                      <li>Caddy</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
          <Link to="/about#challenges" className='opacity-50 hover: cursor-pointer '>We've had some challenges. Here's how we dealt with them.</Link>
        </div>
      </Card>



      <div className="hero bg-base-200 min-h-screen w-full bg-grid">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <p className="text-l">Questions? Comments?</p>
          <div className="text-center lg:text-left">
            <p className="text-3xl font-bold">Contact us!</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="">
            <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
