import React from 'react';
import { Share2, Globe, Palette, Search, Megaphone, PenTool, ArrowRight } from 'lucide-react';
import { servicesData } from '../mock/data';
import { Card, CardHeader, CardContent } from './ui/card';

const iconMap = {
  Share2,
  Globe,
  Palette,
  Search,
  Megaphone,
  PenTool
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-4">
            {servicesData.sectionLabel}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {servicesData.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {servicesData.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group bg-gray-50 border-none hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1e3a5f] transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-[#1e3a5f] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href={service.link}
                    className="inline-flex items-center text-[#1e3a5f] font-semibold hover:gap-2 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;