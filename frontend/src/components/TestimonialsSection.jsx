import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../mock/data';
import { Card, CardContent } from './ui/card';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-4">
            {testimonialsData.sectionLabel}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {testimonialsData.title}
          </h2>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          {testimonialsData.testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-gray-50 border-none shadow-lg"
            >
              <CardContent className="p-10">
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;