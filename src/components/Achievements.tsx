'use client';

import CountUp from 'react-countup';
import { Users, Briefcase, Globe, BookOpen } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    icon: <Users size={32} />,
    label: 'Women Empowered',
    value: 1200,
  },
  {
    icon: <Briefcase size={32} />,
    label: 'Jobs Created',
    value: 450,
  },
  {
    icon: <Globe size={32} />,
    label: 'Communities Reached',
    value: 25,
  },
  {
    icon: <BookOpen size={32} />,
    label: 'Training Sessions',
    value: 300,
  },
];

export default function Achievements() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Keep it false to re-trigger on every scroll into view
    threshold: 0.4,     // Adjust this value for when animation starts
  });

  return (
    <section
      ref={ref}
      className="bg-[#ffecd1] py-16 px-4 font-body scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-dark mb-12">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const isEven = index % 2 === 0;
            const bgColor = isEven ? '#0a2e07' : '#FFD700';
            const textColor = isEven ? 'text-white' : 'text-dark';

            return (
              <div
                key={stat.label}
                className={`rounded-xl p-6 shadow-sm ${textColor}`}
                style={{ backgroundColor: bgColor }}
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold">
                  {inView ? (
                    <CountUp end={stat.value} duration={2} />
                  ) : (
                    0
                  )}
                </div>
                <div className="mt-1 text-md font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
