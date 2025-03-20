// src/components/Navbar.tsx
'use client';

import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-[#000814] shadow-lg z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-[#ffd60a] font-bold text-xl md:text-2xl">MKDIR.my</div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-colors duration-300 hover:text-[#ffd60a] ${activeSection === 'home' ? 'text-[#ffd60a]' : 'text-white'}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-300 hover:text-[#ffd60a] ${activeSection === 'about' ? 'text-[#ffd60a]' : 'text-white'}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`transition-colors duration-300 hover:text-[#ffd60a] ${activeSection === 'projects' ? 'text-[#ffd60a]' : 'text-white'}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors duration-300 hover:text-[#ffd60a] ${activeSection === 'contact' ? 'text-[#ffd60a]' : 'text-white'}`}
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 focus:outline-none">
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-4 py-2 transition-colors duration-300 hover:text-[#ffd60a] ${activeSection === 'home' ? 'text-[#ffd60a]' : 'text-white'}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`px-4 py-2 transition-colors duration-300 hover:text-[#ffd60a] ${activeSection === 'about' ? 'text-[#ffd60a]' : 'text-white'}`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className={`px-4 py-2 transition-colors duration-300 hover:text-[#ffd60a] ${activeSection === 'projects' ? 'text-[#ffd60a]' : 'text-white'}`}
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-4 py-2 transition-colors duration-300 hover:text-[#ffd60a] ${activeSection === 'contact' ? 'text-[#ffd60a]' : 'text-white'}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}