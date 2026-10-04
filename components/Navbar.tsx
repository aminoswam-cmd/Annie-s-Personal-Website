
import React, { useState, useEffect } from 'react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      window.history.pushState(null, '', `#${target}`);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', target: Section.Home },
    { label: 'About', target: Section.About },
    { label: 'Field Studies', target: Section.FieldStudies },
    { label: 'Projects', target: Section.Projects },
    { label: 'Hobbies', target: Section.Hobbies },
    { label: 'Leaderships', target: Section.Leaderships },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, Section.Home)}
          className="text-2xl font-serif font-black tracking-tight text-earthy-olive group"
        >
          Annie Wu<span className="text-earthy-sand group-hover:animate-bounce inline-block">.</span>
        </a>
        
        <div className="hidden md:flex space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              className={`text-[0.75rem] font-black tracking-[0.25em] uppercase transition-all duration-300 relative py-2 text-earthy-olive ${
                activeSection === link.target 
                  ? 'opacity-100' 
                  : 'opacity-80 hover:opacity-100 hover:text-earthy-clay'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-earthy-clay transition-transform duration-500 origin-left ${
                activeSection === link.target ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-earthy-olive p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-earthy-olive/10 transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 space-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              className={`text-lg font-black uppercase tracking-widest text-earthy-olive ${activeSection === link.target ? 'opacity-100' : 'opacity-80'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
