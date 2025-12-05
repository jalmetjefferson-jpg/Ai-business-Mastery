import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-brand-gray">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} AI Business Mastery. All rights reserved.</p>
        <p className="mt-2">This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way.</p>
      </div>
    </footer>
  );
};