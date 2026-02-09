
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Mockup/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" 
          alt="Studio Background" 
          className="w-full h-full object-cover opacity-60 grayscale"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <h1 className="text-6xl md:text-9xl font-black italic tracking-tight uppercase mb-6 leading-none">
          <span className="block text-white">Capture the</span>
          <span className="block text-yellow-400 yellow-glow">Culture</span>
        </h1>
        <p className="text-xl md:text-2xl font-light text-zinc-300 max-w-2xl mx-auto mb-10 tracking-wide uppercase italic">
          Los Angeles Based Creative Powerhouse. Music Videos, Fashion, & Street Aesthetics.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="#portfolio" 
            className="group relative px-10 py-4 bg-yellow-400 text-black font-black text-lg uppercase italic tracking-tighter overflow-hidden rounded-sm w-full md:w-auto"
          >
            <span className="relative z-10">Explore Projects</span>
            <div className="absolute top-0 left-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>
          <a 
            href="#consultant" 
            className="px-10 py-4 border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 transition-all font-bold text-lg uppercase tracking-widest w-full md:w-auto"
          >
            Start Concepting
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-yellow-400/50">
        <i className="fa-solid fa-chevron-down text-3xl"></i>
      </div>
    </section>
  );
};

export default Hero;
