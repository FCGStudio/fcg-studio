
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-yellow-400 text-lg font-bold uppercase tracking-widest mb-2 italic">Our Work</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Selected Visuals</h3>
        </div>
        <p className="text-zinc-500 max-w-md text-right md:text-right hidden md:block">
          A showcase of high-energy music videos and creative visuals produced by FCG Studio in Los Angeles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group relative cursor-pointer"
            onClick={() => setSelectedVideo(project.id)}
          >
            <div className="relative aspect-video overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800">
              <img 
                src={`https://img.youtube.com/vi/${project.id}/hqdefault.jpg`}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-50 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black text-2xl">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-2 py-1 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-tighter rounded-sm">
                  {project.category}
                </span>
              </div>
            </div>
            <h4 className="mt-4 text-xl font-bold group-hover:text-yellow-400 transition-colors italic uppercase tracking-tight">
              {project.title}
            </h4>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95" onClick={() => setSelectedVideo(null)}>
          <button 
            className="absolute top-10 right-10 text-white hover:text-yellow-400 text-4xl z-[110]"
            onClick={() => setSelectedVideo(null)}
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <div className="w-full max-w-5xl aspect-video bg-zinc-900 shadow-2xl shadow-yellow-400/20" onClick={e => e.stopPropagation()}>
            <iframe 
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} 
              title="Project Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      <div className="mt-20 text-center">
        <a 
          href="https://www.youtube.com/@FCGStudioLA" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-lg font-black uppercase italic tracking-tighter text-yellow-400 border-b-2 border-yellow-400 pb-2 hover:text-white hover:border-white transition-all"
        >
          View Full YouTube Channel <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
