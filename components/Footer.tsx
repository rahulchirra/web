
import React from 'react';
import { PERSONAL_INFO } from '../constants'; 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#222629]/70 backdrop-blur-sm text-[#6B6E70] py-8 text-center border-t border-[#474B4F]/50">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Crafted with <span role="img" aria-label="heart emoji" className="text-[#86C232]">❤️</span> using React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;