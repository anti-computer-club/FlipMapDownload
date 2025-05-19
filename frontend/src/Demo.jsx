import openNewTab from "./utils/openNewTab.jsx";
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';


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
      <section id="start-here" className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-12">
          <div className="max-w-screen w-full text-center">
            <h1 className="text-5xl font-bold">Tired of your phone trying to get your attention?
            </h1>
            <p className="py-6 text-2xl">Curious about life with no smartphone? 
              We’re enabling a smartphone-free life without sacrificing the valuable
               parts of new technology. Try it out!</p>
          </div>
          <div className="max-w-md w-full flex flex-col items-center gap-8">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded"
                src="https://www.youtube.com/embed/4_twwdp9nPs?si=88L2sgcGRXFIld7d"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <button  onClick={() => openNewTab("https://github.com/anti-computer-club/FlipMapDownload/blob/main/README.md")} className="btn cursor-pointer hover">
              Download Here
              </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Demo;