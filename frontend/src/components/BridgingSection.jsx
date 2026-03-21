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

          {/* Right Side - Video */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Video Container */}
              <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://customer-assets.emergentagent.com/job_learning-code-hub/artifacts/7zszlwva_WhatsApp%20Video%202026-03-21%20at%2012.33.13%20PM.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
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