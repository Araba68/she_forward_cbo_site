'use client';

import Image from 'next/image';

const galleryCategories = [
  {
    title: 'Education',
    folder: 'education',
    images: ['edu1.jpg', 'edu2.jpg', 'edu3.jpg', 'edu4.jpg'],
  },
  {
    title: 'Cleaning',
    folder: 'cleaning',
    images: ['clean1.jpg', 'clean2.jpg', 'clean3.jpg', 'clean4.jpg'],
  },
  {
    title: 'Entrepreneurship',
    folder: 'entrepreneurship',
    images: ['ent1.jpg', 'ent2.jpg', 'ent3.jpg', 'ent4.jpg'],
  },
  {
    title: 'Business Exhibition',
    folder: 'business',
    images: ['biz1.jpg', 'biz2.jpg', 'biz3.jpg', 'biz4.jpg'],
  },
  {
    title: 'Leadership & Governance',
    folder: 'leadership',
    images: ['lead1.jpg', 'lead2.jpg', 'lead3.jpg', 'lead4.jpg'],
  },
  {
    title: 'Health & Technology',
    folder: 'healthtech',
    images: ['health1.jpg', 'health2.jpg', 'health3.jpg', 'health4.jpg'],
  },
];

export default function GalleryPage() {
  return (
    <section className="bg-white text-textPrimary font-body px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-center mb-14">Photo Gallery</h2>

        {galleryCategories.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-[#004d43] mb-6">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {category.images.map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={`/gallery/${category.folder}/${img}`}
                    alt={`${category.title} image ${i + 1}`}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48 hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
