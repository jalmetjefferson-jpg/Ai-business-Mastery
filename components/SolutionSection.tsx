import React from 'react';

export const SolutionSection: React.FC = () => {
  const days = [
    {
      day: "DAY 1",
      system: "The AI Content Operating System",
      result: "Unlimited content in minutes"
    },
    {
      day: "DAY 2",
      system: "The Supercharged AI Copywriting System",
      result: "Copy that sells on autopilot"
    },
    {
      day: "DAY 3",
      system: "The 24-Hour Offer Launch Lab",
      result: "Live offer accepting payments"
    }
  ];

  return (
    <section className="py-20 bg-[#0f0f16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Here's What You'll Learn In <span className="text-brand-orange">3 Days</span>
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        {/* Table */}
        <div className="bg-brand-card border border-brand-gray rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-black/50 border-b border-brand-gray">
            <div className="p-4 text-center">
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Day</span>
            </div>
            <div className="p-4 text-center border-l border-brand-gray">
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">System Installed</span>
            </div>
            <div className="p-4 text-center border-l border-brand-gray">
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Result</span>
            </div>
          </div>

          {/* Table Rows */}
          {days.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-3 ${idx !== days.length - 1 ? 'border-b border-brand-gray' : ''}`}
            >
              <div className="p-5 flex items-center justify-center">
                <span className="text-brand-orange font-bold text-lg">{item.day}</span>
              </div>
              <div className="p-5 flex items-center justify-center border-l border-brand-gray">
                <span className="text-white font-medium text-center">{item.system}</span>
              </div>
              <div className="p-5 flex items-center justify-center border-l border-brand-gray">
                <span className="text-gray-300 text-center">{item.result}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-300 text-lg bg-brand-card/50 border border-brand-gray rounded-xl py-4 px-6 inline-block">
            📩 I'll send you the full curriculum when you drop your details below.
          </p>
        </div>
      </div>
    </section>
  );
};