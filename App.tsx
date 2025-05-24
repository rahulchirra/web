
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import HobbiesSection from './components/HobbiesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { NAV_LINKS } from './constants'; 
import { SectionId } from './types'; 
import type { NavLink } from './types';

// Theme type and related logic removed as per 'Gorgeous Contrast' palette implementation

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(SectionId.Hero);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Initialize refs based on current NAV_LINKS
  useEffect(() => {
    const currentRefs: Record<string, HTMLElement | null> = {};
    NAV_LINKS.forEach((link: NavLink) => {
      currentRefs[link.id] = sectionRefs.current[link.id] || document.getElementById(link.id);
    });
    sectionRefs.current = currentRefs;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 


  const handleScroll = useCallback(() => {
    let currentSectionId: SectionId | null = null;
    const navbarHeight = 80; // Approximate height of the navbar
    const scrollThreshold = window.scrollY + navbarHeight + window.innerHeight * 0.1; 

    for (const link of NAV_LINKS) {
      const sectionElement = sectionRefs.current[link.id] || document.getElementById(link.id);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;
        
        if (scrollThreshold >= sectionTop && scrollThreshold < sectionBottom) {
          currentSectionId = link.id as SectionId;
          break; 
        }
      }
    }
    
    if (!currentSectionId) {
        if (window.scrollY < window.innerHeight * 0.5) { 
            currentSectionId = SectionId.Hero;
        } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 150) { // Increased buffer for footer
            currentSectionId = NAV_LINKS[NAV_LINKS.length -1].id as SectionId;
        }
    }
    setActiveSection(currentSectionId);
  }, []); 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  const assignRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const handleNavLinkClick = (sectionId: string) => {
    const sectionElement = sectionRefs.current[sectionId] || document.getElementById(sectionId); 
    if (sectionElement) {
      const navbarHeight = 80; 
      const elementPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#222629]">
      <Navbar 
        activeSection={activeSection} 
        onNavLinkClick={handleNavLinkClick}
      />
      <main className="flex-grow pt-20"> {/* Added pt-20 to account for fixed navbar */}
        <div ref={assignRef(SectionId.Hero)} id={SectionId.Hero}>
          <HeroSection onNavigate={handleNavLinkClick} />
        </div>
        <div ref={assignRef(SectionId.About)} id={SectionId.About}>
         <AboutSection />
        </div>
        <div ref={assignRef(SectionId.Work)} id={SectionId.Work}>
          <WorkSection />
        </div>
        <div ref={assignRef(SectionId.Hobbies)} id={SectionId.Hobbies}>
         <HobbiesSection />
        </div>
        <div ref={assignRef(SectionId.Contact)} id={SectionId.Contact}>
          <ContactSection />
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;