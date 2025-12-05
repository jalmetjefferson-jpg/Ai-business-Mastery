import React from 'react';
import { Bot, Clock, TrendingDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Bot size={32} className="text-brand-orange" />,
      title: "Robotic Outputs",
      description: "You've tried ChatGPT but the outputs sound generic, fake, and clearly written by AI. It doesn't sound like YOU."
    },
    {
      icon: <Clock size={32} className="text-brand-orange" />,
      title: "Wasted Time",
      description: "You're spending 6+ hours tweaking prompts and editing content that AI should have done perfectly in 30 minutes."
    },
    {
      icon: <TrendingDown size={32} className="text-brand-orange" />,
      title: "Falling Behind",
      description: "You're watching competitors scale and dominate with AI automation while you're still grinding away at manual tasks."
    }
  ];

  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Is This Your Experience with AI?
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <div key={idx} className="bg-brand-card p-8 rounded-xl border border-brand-gray hover:border-brand-orange/50 transition-colors duration-300">
              <div className="bg-brand-dark w-16 h-16 rounded-full flex items-center justify-center border border-brand-gray mb-6">
                {prob.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{prob.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {prob.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};