import React, { useEffect, useState } from 'react';
import { AlertTriangle, ChevronDown } from 'lucide-react';
import { PricingBox } from './components/PricingBox';
import { RegistrationForm } from './components/RegistrationForm';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { Footer } from './components/Footer';
import { Success } from './components/Success';

function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Check for ?success=true in URL
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('success') === 'true') {
      setIsSuccess(true);
    }
  }, []);

  if (isSuccess) {
    return <Success />;
  }

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-gray-200 selection:bg-brand-orange selection:text-white font-sans">
      
      {/* Top Banner */}
      <div className="bg-brand-orange text-white text-center py-2 px-4 text-xs sm:text-sm font-bold tracking-wide uppercase">
        ⚡ Cyber Week Special: Price Increases December 8th
      </div>

      {/* Hero Section */}
      <header className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-brand-orange/10 blur-[100px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs sm:text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            Live Workshop for Nigerian Business Owners
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Master AI For Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">
              Nigerian Business
            </span>{" "}
            in 3 Days
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
            Learn <strong>Context Engineering</strong> – the system that makes AI write like YOU, not like a generic robot. Turn ChatGPT into a trained team member that understands your voice, offers, and Nigerian audience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToPricing}
              className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-orange/25 text-lg"
            >
              Get Your Ticket Now
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('problems');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-brand-card hover:bg-brand-gray border border-brand-gray text-white font-medium rounded-lg transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <div id="problems">
        <ProblemSection />
      </div>

      {/* Solution Section */}
      <SolutionSection />

      {/* Pricing & Form Section */}
      <section id="pricing" className="py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Secure Your Seat Before The Price Jump
            </h2>
            <p className="text-gray-400">Join the top 1% of Nigerian businesses leveraging AI correctly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
            {/* Left: Pricing & Urgency */}
            <div className="md:sticky md:top-8">
              <PricingBox />
              
              <div className="mt-6 md:mt-8 bg-brand-card/50 border border-brand-gray rounded-xl p-6">
                <h4 className="font-bold text-white mb-2">100% Satisfaction Guarantee</h4>
                <p className="text-sm text-gray-400">
                  If you don't feel like you've saved 100+ hours of future work after Day 1, let us know and we'll refund you immediately.
                </p>
              </div>
            </div>

            {/* Right: Registration Form */}
            <div className="mt-0 md:mt-0">
               <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;