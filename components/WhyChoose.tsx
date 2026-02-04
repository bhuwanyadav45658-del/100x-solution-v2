import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const features = [
    "AI-First Architecture",
    "Secure & Scalable Systems",
    "Custom-Built Models",
    "24/7 Automation",
    "Continuous Optimization",
    "Seamless API Integration"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-brand-dark to-[#050b24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 md:p-16 border border-brand-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Why <span className="text-brand-primary">100x Solution</span>?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                We don't just use AI; we engineer it into the DNA of your business. 
                Our solutions are built for stability, security, and exponential scalability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Abstract visual representation of stability/structure */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 border border-white/10 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.2),transparent_70%)]" />
                 
                 {/* Decorative circles */}
                 <div className="w-64 h-64 rounded-full border border-brand-primary/30 animate-[spin_10s_linear_infinite]" />
                 <div className="w-48 h-48 rounded-full border border-brand-secondary/30 absolute animate-[spin_15s_linear_infinite_reverse]" />
                 <div className="w-32 h-32 rounded-full border border-brand-accent/30 absolute animate-[spin_7s_linear_infinite]" />
                 
                 <div className="absolute text-center z-10">
                   <span className="block text-5xl font-bold font-display text-white">100x</span>
                   <span className="text-sm text-brand-primary tracking-widest uppercase">Efficiency</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;