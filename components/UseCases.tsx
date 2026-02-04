import React from 'react';
import { ShoppingCart, Stethoscope, LineChart, Building2 } from 'lucide-react';
import { UseCaseProps } from '../types';

const UseCaseCard: React.FC<UseCaseProps> = ({ title, description, icon, category }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-brand-dark border border-white/5 p-8 hover:border-brand-primary/30 transition-colors">
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full group-hover:bg-brand-primary/10 transition-colors" />
    
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-lg bg-white/5 text-brand-primary">
        {icon}
      </div>
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{category}</span>
    </div>
    
    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const UseCases: React.FC = () => {
  const cases = [
    {
      category: 'E-commerce',
      title: 'AI Customer Support',
      description: '24/7 autonomous agents handling inquiries, returns, and personalized product recommendations to boost conversion.',
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      category: 'Healthcare',
      title: 'Smart Doc Processing',
      description: 'Automated extraction of patient data from forms, auto-scheduling, and insurance pre-verification systems.',
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      category: 'Finance',
      title: 'Risk Analysis & Reporting',
      description: 'Real-time market analysis agents that generate automated reports and flag anomalies in transaction data.',
      icon: <LineChart className="w-6 h-6" />
    },
    {
      category: 'Startups',
      title: 'Operations Assistant',
      description: 'A unified AI brain managing emails, calendars, tasks, and vendor communications for lean teams.',
      icon: <Building2 className="w-6 h-6" />
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold">Industry <span className="text-brand-secondary">Applications</span></h2>
            <p className="text-slate-400 mt-2">See how we transform different sectors.</p>
          </div>
          <button className="hidden md:block text-brand-primary hover:text-white transition-colors font-medium">View all case studies &rarr;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <UseCaseCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;