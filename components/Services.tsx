
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-sm mb-4 italic">Capabilities</h2>
        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tight">Precision in Production</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <div 
            key={index}
            className="p-8 bg-zinc-900 border border-zinc-800 hover:border-yellow-400 transition-all group"
          >
            <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center text-2xl text-yellow-400 mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
              <i className={`fa-solid ${service.icon}`}></i>
            </div>
            <h4 className="text-2xl font-black italic uppercase tracking-tight mb-4">{service.title}</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-t border-zinc-900 pt-16">
        <div>
          <div className="text-4xl font-black text-yellow-400 italic mb-2">70+</div>
          <div className="text-xs uppercase font-bold tracking-widest text-zinc-500">Music Videos</div>
        </div>
        <div>
          <div className="text-4xl font-black text-yellow-400 italic mb-2">1M</div>
          <div className="text-xs uppercase font-bold tracking-widest text-zinc-500">Total Views</div>
        </div>
        <div>
          <div className="text-4xl font-black text-yellow-400 italic mb-2">50+</div>
          <div className="text-xs uppercase font-bold tracking-widest text-zinc-500">Brand Partners</div>
        </div>
        <div>
          <div className="text-4xl font-black text-yellow-400 italic mb-2">24/7</div>
          <div className="text-xs uppercase font-bold tracking-widest text-zinc-500">Creativity</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
