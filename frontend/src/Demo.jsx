import openNewTab from "./utils/openNewTab.jsx";
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

import {Card, Button, Bubble} from 'pixel-retroui';
import mock1Img from './assets/mockup1.jpg';
import mock2Img from './assets/mockup2.jpg';
import DemoVid from './assets/demo.mp4';


const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function Demo() {
  return (
    <>
      {/* Navbar */}
      <Header />
      {/* Demo */}
      <section id="start-here" className="hero min-h-screen bg-grid">
        <div className="hero-content flex-col gap-12">
          <div className="max-w-screen w-full text-center">
            <h1 className="text-5xl font-bold">Tired of your phone trying to get your attention?
            </h1>
            <p className="py-6 text-2xl">Curious about life with no smartphone? 
              We’re enabling a smartphone-free life without sacrificing the valuable
               parts of new technology. Try it out!</p>
            <Button  onClick={() => openNewTab("https://github.com/anti-computer-club/FlipMapDownload/blob/main/README.md")}
              bg="#80EF80" 
              className="w-xl cursor-pointer hover"
            >
              Download Here
            </Button>
          </div>

          <div className="max-w-md w-full flex flex-col items-center gap-8">
          <div className="w-screen">
            <div className="flex gap-4 p-4 w-fit justify-around ">  
              <Bubble direction="right" className="max-h-20">
                  Play me!
              </Bubble> 
              <Card shadowColor='#9437ff' className="w-fit h-fit"> 
              <video controls className="w-3xl max-h-[500px] shadow-2xl rounded-lg object-contain">
                <source src={DemoVid} type="video/mp4"/>
              </video>
              </Card>
              <Card shadowColor='#9437ff' className="w-full flex justify-center items-center bg-grid">
                <img
                  src={mock1Img}
                  alt="Aiden Navigating"
                  className="w-3xl max-h-[500px] shadow-2xl rounded-lg object-contain"
                />
              </Card>
              {/* add more images as needed */}
            </div>
          </div>

            </div>
          </div>
      </section>

      <Footer />
    </>
  );
}

export default Demo;