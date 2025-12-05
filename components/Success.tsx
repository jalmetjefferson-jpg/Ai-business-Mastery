import React from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../constants';

export const Success: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 to-brand-dark -z-10"></div>

      <div className="bg-brand-card border border-green-500/30 p-8 sm:p-12 rounded-2xl max-w-2xl w-full text-center shadow-2xl relative">
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} className="text-green-500" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Perfect! Your spot is reserved.
        </h1>
        
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          We've received your registration details. To finalize your enrollment and get the preparation materials, please connect with Jefferson on WhatsApp immediately.
        </p>

        <a 
          href={WORKSHOP_DETAILS.whatsappLink}
          className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-green-500/20 text-lg w-full sm:w-auto"
        >
          <MessageCircle size={24} />
          Continue on WhatsApp with Jefferson
        </a>

        <p className="mt-6 text-sm text-gray-500">
          Click the button above to start the chat automatically.
        </p>
      </div>
    </div>
  );
};