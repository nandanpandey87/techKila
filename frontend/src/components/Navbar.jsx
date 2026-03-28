import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Phone } from 'lucide-react';
import { navigationLinks, contactData } from '../mock/data';
import { Button } from './ui/button';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Logo className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button className="text-gray-700 hover:text-blue-900 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              className="bg-[#1e3a5f] hover:bg-[#152b47] text-white px-6 py-6 rounded-none flex items-center space-x-2 transition-colors duration-200"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              <Phone className="w-4 h-4" />
              <div className="text-left">
                <div className="text-xs">{contactData.phoneLabel}</div>
                <div className="text-sm font-bold">{contactData.phone}</div>
              </div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="w-full bg-[#1e3a5f] hover:bg-[#152b47] text-white"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              <Phone className="w-4 h-4 mr-2" />
              {contactData.phone}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;