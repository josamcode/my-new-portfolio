import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';

const Header = ({ navItems, toggleDarkMode, darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Mock navItems for demonstration - replace with your actual data
  const mockNavItems = navItems || [
    { name: 'home', label: 'Home', icon: '🏠' },
    { name: 'about', label: 'About', icon: '👤' },
    { name: 'projects', label: 'Projects', icon: '💼' },
    { name: 'skills', label: 'Skills', icon: '⚡' },
    { name: 'contact', label: 'Contact', icon: '📧' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = mockNavItems.map(item => document.getElementById(item.name));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(mockNavItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionName) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed py-3 md:py-1 top-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200/20 dark:border-slate-700/20'
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm'
          }`}
      >
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo/Brand */}
            <a
              href="#"
              className="group relative flex items-center space-x-2 text-xl font-bold"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  JS
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <span className="bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                Jo Sam
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-6">
                {mockNavItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={`#${item.name}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.name);
                      }}
                      className={`relative px-10 py-0 font-medium rounded-lg transition-all duration-300 group ${activeSection === item.name
                          ? 'text-blue-600'
                          : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                          {item.icon}
                        </span>
                      </span>

                      {/* Active indicator */}
                      {activeSection === item.name && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      )}

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-3">

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className="relative p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative z-10">
                  {darkMode ? (
                    <Sun
                      size={20}
                      className="text-yellow-500 group-hover:text-yellow-400 group-hover:rotate-180 transform transition-transform duration-500"
                    />
                  ) : (
                    <Moon
                      size={20}
                      className="text-slate-700 group-hover:text-blue-600 group-hover:-rotate-12 transform transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-blue-400/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="md:hidden relative p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
              >
                <div className="relative w-5 h-5">
                  <Menu
                    size={20}
                    className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                      }`}
                  />
                  <X
                    size={20}
                    className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/20 dark:border-slate-700/20 transition-all duration-300 ${isMobileMenuOpen
              ? 'opacity-100 visible transform translate-y-0'
              : 'opacity-0 invisible transform -translate-y-4'
            }`}
        >
          <nav className="container mx-auto px-6 py-4">
            <ul className="space-y-2">
              {mockNavItems.map((item, index) => (
                <li
                  key={item.name}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                >
                  <a
                    href={`#${item.name}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.name);
                    }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${activeSection === item.name
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {/* <span>{item.label || item.name}</span> */}
                    {activeSection === item.name && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile menu footer */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  © 2025 Jo Sam. All rights reserved.
                </p>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;