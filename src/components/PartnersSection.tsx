'use client';

import Image from 'next/image';

const partnerLogos = [
  '/partners/TechIT Eazy logo.jpg',
  '/partners/keyam.jpg',
  '/partners/hope.jpg',
  '/partners/quora.jpg',
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-heading">Our Partners</h2>
        <div className="relative w-full overflow-hidden">
          <div className="animate-scroll flex w-max gap-12">
            {partnerLogos.concat(partnerLogos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-24 relative">
                <Image src={logo} alt={`Partner ${index + 1}`} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
