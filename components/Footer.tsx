import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-black border-t border-brand-gray">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <a
          href={WORKSHOP_DETAILS.whatsappLink}
          className="inline-flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors text-base font-medium"
        >
          <MessageCircle size={20} />
          Questions? Chat with Jefferson on WhatsApp
        </a>
        <p className="mt-4 text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} AI Business Mastery
        </p>
      </div>
    </footer>
  );
};