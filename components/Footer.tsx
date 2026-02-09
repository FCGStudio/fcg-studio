
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 overflow-hidden rounded-full border border-yellow-400">
               <img 
                 src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop" 
                 alt="FCG Logo" 
                 className="w-full h-full object-cover grayscale"
                 style={{ filter: 'sepia(1) saturate(5) hue-rotate(-20deg) brightness(0.9)' }}
               />
             </div>
             <span className="text-2xl font-black italic text-white uppercase">FCG STUDIO</span>
          </div>
          <p className="text-zinc-500 max-w-sm leading-relaxed">
            Leading the new wave of creative production in Los Angeles. Quality visuals for the culture.
          </p>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.youtube.com/@FCGStudioLA" target="_blank" className="text-zinc-600 hover:text-yellow-400 transition-colors">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="text-zinc-600 hover:text-yellow-400 transition-colors">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-zinc-600 hover:text-yellow-400 transition-colors">
              <i className="fa-brands fa-vimeo-v"></i>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Navigation</h4>
          <ul className="space-y-4 font-bold uppercase italic text-sm">
            <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Back to top</a></li>
            <li><a href="#portfolio" className="text-zinc-400 hover:text-white transition-colors">Selected Works</a></li>
            <li><a href="#services" className="text-zinc-400 hover:text-white transition-colors">Production Services</a></li>
            <li><a href="#consultant" className="text-zinc-400 hover:text-white transition-colors">AI Concepting</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Contact</h4>
          <div className="space-y-2">
            <p className="text-xl font-black italic uppercase tracking-tighter">hello@fcgstudio.com</p>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Los Angeles, CA</p>
          </div>
          <div className="pt-6">
            <button className="px-8 py-3 bg-yellow-400 text-black font-black uppercase italic tracking-tighter rounded-sm hover:scale-105 transition-transform">
              Book a session
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-600 uppercase font-bold tracking-[0.2em]">
        <p>&copy; {new Date().getFullYear()} FCG STUDIO LA. ALL RIGHTS RESERVED.</p>
        <p className="italic">Design by FCG Creative</p>
      </div>
    </footer>
  );
};

export default Footer;
