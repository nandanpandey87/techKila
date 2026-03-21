import React, { useState, useEffect } from 'react';
import { statsData } from '../mock/data';

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const intervals = statsData.map((stat, index) => {
      const increment = stat.value / steps;
      let current = 0;
      return setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.value;
            return newCounts;
          });
          clearInterval(intervals[index]);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }
      }, duration / steps);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-16 bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-7xl font-bold mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-xl text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;