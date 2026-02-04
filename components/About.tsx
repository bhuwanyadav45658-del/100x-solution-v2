import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-3xl border border-brand-primary/20 bg-gradient-to-b from-brand-dark/50 to-brand-primary/5"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            The New Era of <span className="text-brand-primary">Digital Workforce</span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            <span className="font-bold text-white">100x Solution</span> is not just a dev shop. We are an 
            AI integration partner designed to help ambitious businesses deploy intelligent agents, 
            automate mission-critical operations, and unlock exponential growth using smart, 
            self-learning systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;