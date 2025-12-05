import React from 'react';
import { Countdown } from './Countdown';
import { WORKSHOP_DETAILS } from '../constants';
import { AlertTriangle, TrendingUp } from 'lucide-react';

export const PricingBox: React.FC = () => {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-brand-card border border-brand-gray rounded-2xl p-8 sm:p-10 text-center overflow-hidden">
        {/* Badge */}
        <div className="absolute top-0 right-0">
          <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
            <AlertTriangle size={12} />
            Price Increases Dec 8
          </div>
        </div>

        <h3 className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Early Bird Access
        </h3>

        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="text-2xl text-gray-500 line-through decoration-red-500 decoration-2">
            {WORKSHOP_DETAILS.futurePrice}
          </span>
          <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
            {WORKSHOP_DETAILS.currentPrice}
          </span>
        </div>

        <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 text-brand-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
          Save {WORKSHOP_DETAILS.savings} — Register Before Sunday
        </div>

        <div className="border-t border-gray-800 pt-6 mb-6">
          <p className="text-gray-300 mb-4 font-medium flex items-center justify-center gap-2">
            <TrendingUp size={18} className="text-brand-orange" />
            Offer expires in:
          </p>
          <Countdown targetDate={WORKSHOP_DETAILS.deadlineDate} />
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Secure your spot now. 100% Satisfaction Guarantee.
        </p>
      </div>
    </div>
  );
};