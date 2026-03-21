import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { aboutData } from '../mock/data';
import { Button } from './ui/button';
import { Card } from './ui/card';

const AboutSection = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src={aboutData.image}
              alt="TechKila Team"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
            {/* Badge Overlay */}
            <div className="absolute bottom-8 right-8 bg-[#1e3a5f] text-white p-8 rounded-lg shadow-2xl">
              <div className="text-center">
                <div className="text-5xl font-bold">{aboutData.badge}</div>
                <div className="text-sm font-semibold mt-1">{aboutData.badgeLabel}</div>
                <div className="text-xs mt-1">{aboutData.badgeSubLabel}</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
              {aboutData.sectionLabel}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {aboutData.title}
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              {aboutData.subtitle}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {aboutData.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {aboutData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1e3a5f] flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                className="bg-[#1e3a5f] hover:bg-[#152b47] text-white px-8 py-6 text-base font-semibold rounded-none transition-all duration-300"
                onClick={(e) => scrollToSection(e, aboutData.ctaLink)}
              >
                {aboutData.ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;