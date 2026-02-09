
import React from 'react';

interface NavbarProps {
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveTab }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-yellow-400 group-hover:scale-110 transition-transform">
            <img 
              src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop" 
              alt="FCG Logo" 
              className="w-full h-full object-cover grayscale brightness-125 saturate-200 contrast-125"
              style={{ filter: 'sepia(1) saturate(5) hue-rotate(-20deg) brightness(0.9)' }}
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-yellow-400 uppercase italic">FCG STUDIO</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
          <a href="#portfolio" className="hover:text-yellow-400 transition-colors">Works</a>
          <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
          <a href="#consultant" className="hover:text-yellow-400 transition-colors">AI Concept</a>
          <a 
            href="https://www.youtube.com/@FCGStudioLA" 
            target="_blank" 
            className="px-6 py-2 bg-yellow-400 text-black hover:bg-white transition-all rounded-sm"
          >
            Watch Now
          </a>
        </div>

        <div className="md:hidden text-yellow-400 text-2xl">
          <i className="fa-solid fa-bars-staggered"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
