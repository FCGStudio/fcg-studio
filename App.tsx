
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen selection:bg-yellow-400 selection:text-black">
      <Navbar setActiveTab={setActiveTab} />
      
      <main>
        <Hero />
        
        <section id="portfolio" className="py-20 bg-black">
          <Portfolio />
        </section>

        <section id="services" className="py-20 bg-zinc-950 border-y border-zinc-900">
          <Services />
        </section>

        <section id="consultant" className="py-20 bg-black relative">
          <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 opacity-[0.02] pointer-events-none"></div>
          <AIConsultant />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
