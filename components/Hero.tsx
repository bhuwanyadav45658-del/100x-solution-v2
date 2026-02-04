import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import HeroScene from './3d/HeroScene';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20 text-sm font-semibold mb-4 tracking-wide">
              AI-POWERED AUTOMATION AGENCY
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Transform Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent neon-text">Intelligent AI</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-lg leading-relaxed"
          >
            We build custom AI agents, automate complex workflows, and turn your raw data into exponential growth decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onOpenContact}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full font-bold text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 px-8 py-4 glass-card rounded-full font-bold text-white hover:bg-white/10 transition-all border border-white/10"
            >
              <PlayCircle className="w-5 h-5 text-brand-primary" />
              Explore Services
            </a>
          </motion.div>

          <div className="flex gap-8 pt-4">
             <div className="flex flex-col">
                <span className="text-3xl font-bold font-display">40%</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Cost Reduction</span>
             </div>
             <div className="flex flex-col">
                <span className="text-3xl font-bold font-display">24/7</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">AI Operations</span>
             </div>
          </div>
        </div>

        {/* Right: 3D Scene */}
        <div className="h-[400px] lg:h-[600px] w-full relative">
          <Suspense fallback={<div className="flex items-center justify-center h-full text-brand-primary">Loading 3D Engine...</div>}>
            <HeroScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;