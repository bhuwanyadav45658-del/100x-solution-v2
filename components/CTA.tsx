import React from 'react';
import { Calendar } from 'lucide-react';

interface CTAProps {
  onOpenContact: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenContact }) => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white">100x</span> Your Business?
        </h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Stop wasting time on manual tasks. Book a strategy call to discover how AI agents can revolutionize your operations.
        </p>
        
        <button 
          onClick={onOpenContact}
          className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-dark bg-white rounded-full overflow-hidden transition-transform hover:scale-105"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-brand-primary rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
          <span className="relative flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Book a Strategy Call
          </span>
        </button>
      </div>
    </section>
  );
};

export default CTA;