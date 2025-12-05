import React from 'react';
import { CheckCircle, Zap } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const benefits = [
    "Live Training (Not Pre-Recorded Videos)",
    "Context Engineering - Teach AI Your Voice, Business & Audience",
    "Build Real Content & Systems During The Workshop",
    "Designed Specifically For Nigerian Entrepreneurs"
  ];

  return (
    <section className="py-20 bg-[#0f0f16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full text-brand-orange text-sm font-semibold mb-6">
              <Zap size={16} />
              The AI Business Mastery System
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              What You'll Get in <br />
              <span className="text-brand-orange">3 Intensive Days</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Stop fighting with prompts. Learn the "Context Engineering" framework that turns standard AI models into highly-trained specialists for your specific business needs.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                  <span className="text-gray-200 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             {/* Decorative element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange/20 blur-[100px] rounded-full pointer-events-none"></div>
             
             <div className="relative bg-gradient-to-br from-brand-card to-black border border-brand-gray p-2 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center relative">
                  {/* Abstract UI representation */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50"></div>
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="relative text-center p-6">
                    <p className="text-brand-orange font-mono text-sm mb-2">OUTPUT MODE: CONTEXT_AWARE</p>
                    <h4 className="text-white font-bold text-2xl">Master Context Engineering</h4>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};