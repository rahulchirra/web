import React from 'react';
import type { Hobby } from '../types';

interface HobbyItemProps {
  hobby: Hobby;
}

const HobbyItem: React.FC<HobbyItemProps> = ({ hobby }) => {
  return (
    <div className="group bg-[#2A2E31] p-6 rounded-xl shadow-lg hover:shadow-[#86C232]/20 transition-all duration-300 flex flex-col items-center text-center border border-[#474B4F]/50 hover:border-[#86C232]/60 hover:scale-105">
      <div className="mb-5 text-[#86C232] group-hover:text-[#61892F] transition-colors duration-300">
        {React.isValidElement(hobby.icon) ? 
          React.cloneElement(hobby.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { 
            // className is now set in constants.ts for these icons
          }) : 
          <span className="text-4xl">{hobby.icon || '✨'}</span>
        }
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slate-100 group-hover:text-[#86C232] transition-colors duration-300">{hobby.name}</h3>
      <p className="text-[#6B6E70] text-sm leading-relaxed">{hobby.description}</p>
    </div>
  );
};

export default HobbyItem;