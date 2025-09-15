'use client';
import React from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */


const iconMap: Record<string, React.ReactNode> = {
  // icons here
};


import Link from 'next/link';
import {
  Users,
  HeartPulse,
  BookOpen,
  Briefcase,
  Leaf,
  Cpu,
} from 'lucide-react';

const thematicAreas = [
  {
    slug: 'leadership-governance',
    icon: 'users',
    title: 'Leadership and Governance',
    description: 'Fostering civic responsibility, youth inclusion, and transparent institutions.',
  },
  {
    slug: 'health',
    icon: 'heart-pulse',
    title: 'Health',
    description: 'Promoting access to healthcare services, awareness, and wellness initiatives.',
  },
  {
    slug: 'education',
    icon: 'book-open',
    title: 'Education',
    description: 'Improving access to quality education and digital literacy for all.',
  },
  {
    slug: 'entrepreneurship',
    icon: 'briefcase',
    title: 'Entrepreneurship',
    description: 'Empowering youth with skills and resources for self-employment and innovation.',
  },
  {
    slug: 'climate',
    icon: 'leaf',
    title: 'Climate',
    description: 'Building resilience through environmental conservation and climate action.',
  },
  {
    slug: 'technology',
    icon: 'cpu',
    title: 'Technology',
    description: 'Leveraging tech for social change, education, and opportunity.',
  },
];


export default function ThematicAreasSection() {
  return (
    <section className="bg-[#004d43] text-white py-20 px-4 font-body">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#FFD700]">
          Our Thematic Areas
        </h2>
        <p className="mt-4 text-[#b3f7ec] max-w-2xl mx-auto">
          We drive impact across these interconnected areas to create a more inclusive, healthy, and empowered society.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {thematicAreas.map((theme) => (
          <div
            key={theme.slug}
            className="bg-white text-[#004d43] rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 flex items-center justify-center bg-[#FFD700] rounded-full mb-4">
                {iconMap[theme.icon] || <Cpu size={28} />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
              <p className="text-sm text-gray-700">{theme.description}</p>
            </div>
            <Link
              href={`/programs/${theme.slug}`}
              className="mt-6 inline-block bg-[#004d43] text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-[#003630] transition w-fit"
            >
              View Programs
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
