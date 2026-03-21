import React from 'react';
import { heroData } from '../mock/data';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-6">
          {/* Tagline */}
          <p className="text-sm md:text-base tracking-widest text-gray-600 font-medium">
            {heroData.tagline}
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
            {heroData.title}
            <br />
            <span className="text-gray-600">{heroData.highlight}</span>
          </h1>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              className="bg-[#1e3a5f] hover:bg-[#152b47] text-white px-10 py-6 text-base font-semibold rounded-none transition-all duration-300 hover:shadow-lg"
              onClick={(e) => scrollToSection(e, heroData.ctaLink)}
            >
              {heroData.ctaText}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;