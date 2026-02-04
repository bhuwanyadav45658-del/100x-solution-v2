import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Database } from 'lucide-react';
import ServiceCanvas from './3d/ServiceScenes';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-300 hover:border-brand-primary/50"
    >
      {/* 3D Visual - Only show on desktop for performance or make smaller */}
      <div className="h-40 w-full mb-6 relative z-10">
        <Suspense fallback={<div className="h-full w-full flex items-center justify-center bg-white/5 rounded-lg animate-pulse"></div>}>
             <ServiceCanvas type={type} />
        </Suspense>
      </div>

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center mb-4 text-brand-primary group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-bold font-display mb-3">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
      
      {/* Glow Hover Effect */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary/20 blur-[60px] rounded-full group-hover:bg-brand-primary/40 transition-all duration-500" />
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      type: 'agent',
      title: 'Custom AI Agents',
      description: 'We design AI agents that work like digital employees handling customer support, market research, and daily operations autonomously.',
      icon: <Bot className="w-6 h-6" />
    },
    {
      type: 'workflow',
      title: 'Workflow Automation',
      description: 'We bridge your existing software tools and automate repetitive tasks using AI-driven intelligent workflows (n8n, Make, Zapier).',
      icon: <Zap className="w-6 h-6" />
    },
    {
      type: 'data',
      title: 'Intelligent Data Processing',
      description: 'We build AI systems that analyze documents, user behavior, and business metrics to deliver real-time, actionable insights.',
      icon: <Database className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-brand-primary">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to scale your business efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;