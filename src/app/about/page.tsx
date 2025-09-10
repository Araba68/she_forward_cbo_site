// src/app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-[#004d43] text-white px-4 py-10 font-body">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4">About She Forward Coast</h1>
        <p className="text-lg">
         She Forward Coast is a dynamic and impactful community-based organization (CBO) located in 
Kisauni Constituency, Mombasa County, Kenya. Founded in 2024 by a group of passionate 
young women, She Forward Coast is committed to empowering and uplifting women and youth 
in Coastal Kenya through a holistic approach encompassing advocacy, education, innovation, 
and inclusive community development. The organization focuses on critical areas including 
health, climate change and environment, entrepreneurship and economic empowerment, and 
democracy, human rights, and governance.
        </p>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 font-heading text-center">Meet Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {/* Replace with actual team images */}
          <div className="text-center">
            <Image
              src="/team/rehema_chivatsi.jpg"
              alt="Team member"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <p className="mt-2 font-medium">Rehema Chivatsi</p>
            <p className="text-sm text-gray-600">Executive Director</p>
          </div>
           <div className="text-center">
            <Image
              src="/team/Ahmed.jpg"
              alt="Team member"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <p className="mt-2 font-medium">Ahmed Ajiambo</p>
            <p className="text-sm text-gray-600">Deputy Director</p>
          </div>
          <div className="text-center">
            <Image
              src="/team/risper_akinyi.jpg"
              alt="Team member"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <p className="mt-2 font-medium">Risper Akinyi</p>
            <p className="text-sm text-gray-600">Finance Officer</p>
          </div>
             <div className="text-center">
            <Image
              src="/team/fatma_awadh.jpg"
              alt="Team member"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <p className="mt-2 font-medium">Fatma Awadh</p>
            <p className="text-sm text-gray-600">Secretary</p>
          </div>
             <div className="text-center">
            <Image
              src="/team/mercylonna_kendi.jpg"
              alt="Team member"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <p className="mt-2 font-medium">Mercylonna Kendi</p>
            <p className="text-sm text-gray-600">Project Officer</p>
          </div>
             <div className="text-center">
            <Image
              src="/team/khadija_halfan.jpg"
              alt="Team member"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <p className="mt-2 font-medium">Khadija Halfan</p>
            <p className="text-sm text-gray-600">Monitoring & Evalution Officer</p>
          </div>
        </div>
      </section>
    </main>
  );
}
