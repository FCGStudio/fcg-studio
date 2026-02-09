
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
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
      </main>

      <Footer />
    </div>
  );
};

export default App;
