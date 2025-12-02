import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import BusinessModel from './components/BusinessModel';
import FocusTracks from './components/FocusTracks';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-deep">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <BusinessModel />
        <FocusTracks />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;