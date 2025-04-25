function Demo() {
    return (
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-4">Live Demo</h1>
        <p className="text-lg mb-6">Check out the live demo of FlipMaps in action below.</p>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4_twwdp9nPs?si=88L2sgcGRXFIld7d"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      </div>
    );
  }
  
  export default Demo;