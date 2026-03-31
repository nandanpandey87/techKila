import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { footerData } from '../mock/data';
import Logo from './Logo';

const iconMap = {
  Facebook,
  Twitter,
  Linkedin,
  Instagram
};

const Footer = () => {
  return (
    <footer className="bg-[#1e3a5f] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-20 w-auto" />
            </div>
            <p className="text-gray-300 text-sm">
              {footerData.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {footerData.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    className="w-10 h-10 bg-white/10 hover:bg-white hover:text-[#1e3a5f] rounded-lg flex items-center justify-center transition-all duration-300"
                    aria-label={social.id}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-300 text-sm">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;