import React, { useEffect, useState } from 'react';
import { RegistrationForm } from './components/RegistrationForm';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { InstructorSection } from './components/InstructorSection';
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

  const scrollToForm = () => {
    const element = document.getElementById('get-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-gray-200 selection:bg-brand-orange selection:text-white font-sans">

      {/* Hero Section */}
      <header className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-brand-orange/10 blur-[100px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Free Details • 3-Day Live Training
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-5xl mx-auto">
            Learn The AI System Nigerian Business Owners Are Using To Create{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">
              30 Days of Content in 2 Hours
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
            Get the full breakdown of what we're teaching, when it starts, and how to join.
            <strong className="text-gray-300"> No commitment — just the details.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-green-500/25 text-lg"
            >
              Get The Details
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

      {/* What You'll Learn Section */}
      <SolutionSection />

      {/* Instructor Section */}
      <InstructorSection />

      {/* Form Section */}
      <section id="get-details" className="py-16 md:py-24 relative bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <RegistrationForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;