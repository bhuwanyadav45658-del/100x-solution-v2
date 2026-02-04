import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';
import { ProcessStepProps } from '../types';

const ProcessStep: React.FC<ProcessStepProps & { isLast: boolean, icon: React.ReactNode }> = ({ number, title, description, isLast, icon }) => (
  <div className="relative flex flex-col items-center text-center">
    <motion.div 
      whileHover={{ scale: 1.1 }}
      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-secondary to-brand-primary flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-white/20"
    >
      {icon}
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-dark border border-brand-primary flex items-center justify-center font-bold text-sm text-brand-primary">
        {number}
      </div>
    </motion.div>
    
    {!isLast && (
      <div className="hidden md:block absolute top-10 left-1/2 w-full h-[2px] bg-gradient-to-r from-brand-primary/50 to-transparent -z-0 transform translate-x-10" />
    )}

    <h3 className="mt-8 text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-400 text-sm max-w-xs">{description}</p>
  </div>
);

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We analyze your bottlenecks and identify high-impact AI opportunities.',
      icon: <MessageSquare className="w-8 h-8 text-white" />
    },
    {
      number: '02',
      title: 'Strategy Design',
      description: 'We map out the architecture for your custom agents and automation flows.',
      icon: <PenTool className="w-8 h-8 text-white" />
    },
    {
      number: '03',
      title: 'Development',
      description: 'Our engineers build, train, and integrate the system into your stack.',
      icon: <Code className="w-8 h-8 text-white" />
    },
    {
      number: '04',
      title: 'Scaling',
      description: 'We launch, monitor performance, and optimize for maximum efficiency.',
      icon: <Rocket className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section id="process" className="py-24 relative bg-[#03081c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest text-sm uppercase">Roadmap to Success</span>
          <h2 className="text-4xl font-display font-bold mt-2">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index} 
              {...step} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;