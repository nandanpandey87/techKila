import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { progressData } from '../mock/data';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

const ProgressSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
              {progressData.sectionLabel}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {progressData.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {progressData.description1}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {progressData.description2}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="bg-[#1e3a5f] hover:bg-[#152b47] text-white px-6 py-6 rounded-none transition-all duration-300"
                onClick={() => window.location.href = `mailto:${progressData.email}`}
              >
                <Mail className="w-4 h-4 mr-2" />
                Mail us now
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-6 py-6 rounded-none transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Now
              </Button>
            </div>
          </div>

          {/* Right Side - Progress Bars */}
          <div className="space-y-8">
            {progressData.skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-[#1e3a5f]">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1e3a5f] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;