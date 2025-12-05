import React, { useState } from 'react';
import { WORKSHOP_DETAILS } from '../constants';
import { Lock, User, Mail, Phone, ArrowRight, Loader2, MessageCircle } from 'lucide-react';

const WEBHOOK_URL = 'https://app.wamation.com.ng/endpoint?auth=KvVtLmGjU4RxAHdWTkSPIFgopCQNJ240988';
const WHATSAPP_LINK = WORKSHOP_DETAILS.whatsappLink;

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null); // Clear error when user types
  };

  const formatPhoneNumber = (phone: string): string => {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    // Return with country code prefix
    return `234${digits}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Validate all fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const phoneNumber = formatPhoneNumber(formData.whatsapp);
      
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        waphone: phoneNumber,
        wnopfx: "234"
      };

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Webhook request failed');
      }

      // Success!
      setIsSuccess(true);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Success State
  if (isSuccess) {
    return (
      <div className="bg-brand-card border border-brand-gray p-6 md:p-8 rounded-2xl shadow-2xl max-w-lg mx-auto w-full">
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
              <span className="text-4xl">✅</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Perfect! Your spot is reserved.</h3>
            <p className="text-gray-400 text-sm">
              We've received your registration. Continue on WhatsApp to finalize your enrollment.
            </p>
          </div>
          
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 border border-transparent rounded-lg text-base font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-[1.02] shadow-lg shadow-green-600/20"
          >
            <MessageCircle size={20} />
            Continue on WhatsApp with Jefferson
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-card border border-brand-gray p-6 md:p-8 rounded-2xl shadow-2xl max-w-lg mx-auto w-full">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Reserve My Spot</h3>
        <p className="text-gray-400 text-sm">Fill the details below to join the workshop.</p>
      </div>

      {error && (
        <div className="mb-5 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm text-center">{error}</p>
        </div>
      )}

      <form 
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
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
              disabled={isSubmitting}
              className="block w-full pl-10 pr-3 py-3 bg-brand-dark border border-brand-gray rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        {/* Email */}
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
              disabled={isSubmitting}
              className="block w-full pl-10 pr-3 py-3 bg-brand-dark border border-brand-gray rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1.5">WhatsApp Number</label>
          <div className="relative flex rounded-lg shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
              <Phone size={18} className="text-gray-500" />
            </div>
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-brand-gray bg-brand-dark text-gray-400 text-sm pl-10">
              +234
            </span>
            <input
              type="tel"
              name="whatsapp"
              id="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="flex-1 block w-full px-3 py-3 bg-brand-dark border border-brand-gray rounded-none rounded-r-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="80 1234 5678"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">We'll send your access details here.</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-lg text-base font-bold text-white bg-brand-orange hover:bg-brand-orangeHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-orange/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Submitting...
            </>
          ) : (
            <>
              Reserve My Spot Now
              <ArrowRight className="ml-2" size={20} />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
          <Lock size={12} />
          <span>Secure SSL Encryption. Your data is safe.</span>
        </div>
      </form>
    </div>
  );
};