import React from 'react';
import { Calendar, Mic, Rocket } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const days = [
    {
      icon: <Calendar size={24} className="text-brand-orange" />,
      day: "Day 1",
      title: "Build Your AI Content System",
      description: "Create a week of posts in one sitting. Set up your personal AI workflow that actually works."
    },
    {
      icon: <Mic size={24} className="text-brand-orange" />,
      day: "Day 2",
      title: "Master Context Engineering",
      description: "Make AI write in YOUR voice, not robot voice. Teach it your style, your audience, your offers."
    },
    {
      icon: <Rocket size={24} className="text-brand-orange" />,
      day: "Day 3",
      title: "Launch & Monetize",
      description: "Turn your AI skills into income. Learn how to package and sell your new capabilities."
    }
  ];

  return (
    <section className="py-20 bg-[#0f0f16]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Here's What You'll Learn In <span className="text-brand-orange">3 Days</span>
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {days.map((item, idx) => (
            <div key={idx} className="bg-brand-card border border-brand-gray rounded-xl p-6 hover:border-brand-orange/50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-dark w-12 h-12 rounded-full flex items-center justify-center border border-brand-gray">
                  {item.icon}
                </div>
                <span className="text-brand-orange font-bold text-sm uppercase tracking-wider">{item.day}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-300 text-lg bg-brand-card/50 border border-brand-gray rounded-xl py-4 px-6 inline-block">
            📩 I'll send you the full curriculum when you drop your details below.
          </p>
        </div>
      </div>
    </section>
  );
};