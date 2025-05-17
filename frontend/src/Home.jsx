import { useState, useEffect } from 'react';
import testLogo from './assets/logo.png';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import './App.css';
import { Button } from 'pixel-retroui';
import ContactForm from './components/contactForm.jsx';

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
  return (
    <>
      <Header/>

      {/* Hero Section */}
      
      <section className="hero min-h-screen bg-base-200 bgimg">
     
        <div className="hero-content text-center">
        <img src={testLogo} alt="Logo" className="h-100" />
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Flip Maps App</h1>
            <h2 className="text-3xl font-bold gap-4 mb-4">Old phones can learn new tricks!</h2>
            <button  onClick={() => openNewTab()}>
              Open Source
            </button>
          </div>
        </div>
      </section>
      <div
        className="hero-custom min-h-screen" style={{backgroundImage:"./assets/flipmap-campus-40.jpg"}}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-4 text-4xl font-bold">Flip phones belong in a musuem- at least that's what devs think.</h1>
            <p className="mb-5">
            Our project solves the lack of accessible, functional navigation tools for flip phones that run on Android, a rapidly growing niche segment of mobile devices. However, they are often excluded from modern navigation solutions due to hardware limitations, low resolution screens, and lack of optimized software. By creating a lightweight, modular navigation app tailored specifically for these constraints, we provide users of Android flip phones with reliable turn-by-turn directions, map viewing, and route planning. 
            </p>
            <Button className="btn btn-ghost">Get Started</Button>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-4 text-4xl font-bold">But who's still using a flip phone?</h1>
            <p className="mb-5 text-gray-900">
            These phones have been gaining popularity among users seeking simplicity, affordability, or a distraction-free way of living. Some are parens who choose basic phones for their children and want them to have access to reliable navigation when away from home. Others are individuals seeking to reduce screen time while still having access to essential smartphone functionality. The user base also includes those who want to be excluded from modern technology and want an alternative to mainstream tech.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact us!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
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
