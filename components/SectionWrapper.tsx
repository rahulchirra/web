import React from 'react';

interface SectionWrapperProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, className = '', titleClassName = '' }) => {
  return (
    <section id={id} className={`min-h-screen py-24 md:py-32 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center ${className}`} aria-labelledby={title ? `${id}-title` : undefined}>
      <div className="container mx-auto">
        {title && (
          <div className="text-center mb-16 md:mb-20">
            <h2 id={`${id}-title`} className={`text-4xl md:text-5xl font-bold text-slate-100 ${titleClassName}`}>
              {title}
            </h2>
            <div className="w-28 h-1.5 bg-gradient-to-r from-[#86C232] to-[#61892F] mx-auto mt-4 rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;