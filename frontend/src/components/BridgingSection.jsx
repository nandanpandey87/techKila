import React from 'react';
import { bridgingData } from '../mock/data';

const BridgingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {bridgingData.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-2">
            {bridgingData.highlight}
          </h3>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            {bridgingData.description}
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8">
            {bridgingData.features.map((feature, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-2xl font-bold text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right Side - Badge */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Circular Badge */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-[#1e3a5f] mb-4">
                    {bridgingData.badge}
                  </div>
                  <div className="text-lg font-semibold text-gray-700">
                    {bridgingData.badgeLabel}
                  </div>
                </div>
              </div>
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-[#1e3a5f] opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgingSection;