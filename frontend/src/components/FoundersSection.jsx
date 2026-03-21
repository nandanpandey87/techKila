import React from 'react';
import { foundersData } from '../mock/data';
import { Card, CardContent } from './ui/card';

const FoundersSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-4">
            {foundersData.sectionLabel}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {foundersData.title}
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {foundersData.founders.map((founder) => (
            <Card
              key={founder.id}
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6 text-center bg-white">
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    {founder.role}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;