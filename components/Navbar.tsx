
import React from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';
import { SectionId } from '../types';
import DigitalClock from './DigitalClock'; // Import the new DigitalClock component

interface NavbarProps {
  activeSection: SectionId | null;
  onNavLinkClick: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavLinkClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#222629]/80 backdrop-blur-lg shadow-lg shadow-[#86C232]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href={`#${SectionId.Hero}`}
              onClick={(e) => {
                e.preventDefault();
                onNavLinkClick(SectionId.Hero);
              }}
              className="text-3xl font-bold text-[#14A098] hover:text-[#10887A] transition-colors duration-300 tracking-tight"
              aria-label="Navigate to Home Section"
            >
              MyPortfolio
            </a>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
                {NAV_LINKS.map((link: NavLink) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavLinkClick(link.id);
                    }}
                    aria-current={activeSection === link.id ? "page" : undefined}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5
                      ${
                        activeSection === link.id
                          ? 'bg-[#86C232] text-[#222629] shadow-md scale-105'
                          : 'text-slate-300 hover:bg-[#474B4F]/50 hover:text-[#86C232]'
                      }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            {/* Digital Clock Widget */}
            <div className="hidden md:flex items-center ml-4 lg:ml-6">
              <DigitalClock />
            </div>
          </div>
          {/* Mobile menu button (optional, for simplicity not implemented here but could be added) */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;