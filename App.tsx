import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import UseCases from './components/UseCases';
import WhyChoose from './components/WhyChoose';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="relative min-h-screen bg-brand-dark text-white selection:bg-brand-primary selection:text-brand-dark">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar onOpenContact={openContact} />
        <main>
          <Hero onOpenContact={openContact} />
          <About />
          <Services />
          <Process />
          <UseCases />
          <WhyChoose />
          <CTA onOpenContact={openContact} />
        </main>
        <Footer />
      </div>

      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default App;