import React, { useState } from 'react';
import { FORM_CONFIG } from '../constants';
import { User, Mail, Phone, ArrowRight, Loader2 } from 'lucide-react';

export const RegistrationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    waphone: '',
    wnopfx: '234'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Allow native submission
  };

  return (
    <div className="bg-brand-card border border-brand-gray p-6 md:p-8 rounded-2xl shadow-2xl max-w-lg mx-auto w-full">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Want The Full Details?</h3>
        <p className="text-gray-400 text-sm">Drop your info. I'll send everything to your WhatsApp — what's covered, when it starts, how to join.</p>
      </div>

      <form
        action={FORM_CONFIG.action}
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Hidden Fields for WAMission */}
        {Object.entries(FORM_CONFIG.hiddenFields).map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value} />
        ))}

        {/* Name (name="name") */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">First Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={18} className="text-gray-500" />
            </div>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-3 bg-brand-dark border border-brand-gray rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="Enter first name"
            />
          </div>
        </div>

        {/* WhatsApp (name="waphone" + name="wnopfx") */}
        <div>
          <label htmlFor="waphone" className="block text-sm font-medium text-gray-300 mb-1.5">WhatsApp Number</label>
          <div className="relative flex rounded-lg shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
              <Phone size={18} className="text-gray-500" />
            </div>

            {/* Country Code Dropdown (name="wnopfx") */}
            <select
              name="wnopfx"
              value={formData.wnopfx}
              onChange={handleChange}
              className="inline-flex items-center px-2 py-3 rounded-l-md border border-r-0 border-brand-gray bg-brand-dark text-gray-400 text-sm pl-10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              style={{ minWidth: "120px" }}
            >
              <option value="234">NG +234</option>
              <option value="233">GH +233</option>
              <option value="254">KE +254</option>
              <option value="27">ZA +27</option>
              <option value="44">UK +44</option>
              <option value="1">US +1</option>
            </select>

            {/* Phone Number Input (name="waphone") */}
            <input
              type="tel"
              name="waphone"
              id="waphone"
              value={formData.waphone}
              onChange={handleChange}
              required
              className="flex-1 block w-full px-3 py-3 bg-brand-dark border border-brand-gray rounded-none rounded-r-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="80 1234 5678"
            />
          </div>
        </div>

        {/* Email (name="email") */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail size={18} className="text-gray-500" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-3 bg-brand-dark border border-brand-gray rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Submit Button - Bright Green */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-lg text-base font-bold text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-[1.02] shadow-lg shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Sending...
            </>
          ) : (
            <>
              Send Me The Details
              <ArrowRight className="ml-2" size={20} />
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          Takes 10 seconds • No spam • Unsubscribe anytime
        </p>
      </form>
    </div>
  );
};