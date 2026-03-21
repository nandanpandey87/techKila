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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-gray-50 border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="text-center border-t pt-6">
                  <h4 className="text-lg font-bold text-gray-900">
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