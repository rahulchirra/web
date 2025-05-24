
import React from 'react';
import { SectionId } from '../types';
import { PERSONAL_INFO, RESUME_DOWNLOAD_URL, RESUME_FILENAME, DownloadIcon } from '../constants';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [typedText, setTypedText] = React.useState('');
  const roles = ["AI Engineer", "ML Engineer", "Data Analyst"]; // Updated roles
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 60 : 120;

    const handleTyping = () => {
      if (isDeleting) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2500); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, roleIndex, roles]);


  return (
    <section id={SectionId.Hero} className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('https://picsum.photos/seed/hero-bg-data/1920/1080')" }}>
      <div className="absolute inset-0 bg-[#222629] opacity-80"></div>
      <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
        <h1 className="font-hero-heading text-5xl sm:text-6xl md:text-7xl mb-6 leading-tight">
          <span className="text-slate-100 block sm:inline">Hello, I'm </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86C232] to-[#61892F] block sm:inline">{PERSONAL_INFO.name}</span>
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-slate-100 mb-10 h-12 font-light">
          I'm a <span className="text-[#86C232] font-medium border-b-2 border-[#86C232]/70 pb-1">{typedText}</span>
          <span className="opacity-70 animate-ping-slow inline-block w-1 h-7 bg-[#86C232] ml-1"></span>
        </p>
        <p className="text-xl sm:text-2xl text-slate-100 max-w-2xl mx-auto mb-12 font-normal">
          <span className="font-hero-heading">Welcome to my personal space where I share </span>
          <span className="font-hero-heading text-[#86C232]">my journey, projects, and interests</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          <button
            onClick={() => onNavigate(SectionId.Work)}
            className="w-full bg-[#86C232] hover:bg-[#61892F] text-[#222629] font-semibold py-3.5 px-8 rounded-lg text-lg shadow-lg hover:shadow-[#86C232]/40 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <a
            href={RESUME_DOWNLOAD_URL}
            download={RESUME_FILENAME}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center bg-[#61892F] hover:bg-[#474B4F] text-slate-100 font-semibold py-3.5 px-8 rounded-lg text-lg shadow-lg hover:shadow-[#61892F]/40 transform hover:scale-105 transition-all duration-300"
            aria-label="Download my resume"
          >
            <DownloadIcon className="w-5 h-5 mr-2 text-slate-100" />
            Download Resume
          </a>
          <button
            onClick={() => onNavigate(SectionId.Contact)}
            className="w-full sm:col-span-2 lg:col-span-1 bg-transparent hover:bg-[#86C232]/20 text-[#86C232] font-semibold py-3.5 px-8 rounded-lg text-lg border-2 border-[#86C232] hover:border-[#61892F] hover:text-[#61892F] transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
