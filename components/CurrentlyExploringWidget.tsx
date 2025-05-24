
import React from 'react';
import { SkillItem } from '../types';
import { LightbulbIcon } from '../constants'; 

interface CurrentlyExploringWidgetProps {
  title: string;
  items: SkillItem[];
}

const CurrentlyExploringWidget: React.FC<CurrentlyExploringWidgetProps> = ({ title, items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="mb-12 p-6 bg-[#2A2E31] rounded-xl shadow-lg border border-[#474B4F]/70">
      <h3 className="text-xl font-semibold text-[#86C232] mb-4 flex items-center">
        <LightbulbIcon className="w-6 h-6 mr-3 text-[#86C232]" /> {/* Title icon retains its color class */}
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((item, index) => (
          <li key={item.name + index} className="flex items-center text-slate-300 group">
            {item.IconComponent ? (
              <item.IconComponent 
                className={`w-5 h-5 mr-2.5 transition-transform duration-200 group-hover:scale-110 ${item.animationClass || ''}`} 
              />
            ) : (
              // Fallback for items without specific colorful icon (should ideally not be needed if all are defined)
              <span className="w-5 h-5 mr-2.5 text-[#86C232] group-hover:text-[#61892F] transition-colors duration-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </span>
            )}
            <span className="text-sm group-hover:text-slate-100 transition-colors duration-200">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentlyExploringWidget;
