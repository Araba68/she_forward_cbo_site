'use client';

import { Lightbulb, School, Briefcase, Handshake } from 'lucide-react';

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-[#004d43] text-white font-body px-4 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-8 font-heading">
          Our Impact
        </h1>
        <p className="text-lg md:text-xl mb-12 text-[#b3f7ec]">
          At She Forward Coast, we don't just serve — we transform. Our work aligns with key 
          <span className="text-[#FFD700] font-semibold"> UN Sustainable Development Goals (SDGs)</span>, 
          especially <span className="text-[#FFD700] font-semibold">Gender Equality (SDG 5)</span>, 
          <span className="text-[#FFD700] font-semibold">Quality Education (SDG 4)</span>, 
          <span className="text-[#FFD700] font-semibold">Decent Work (SDG 8)</span>, 
          and <span className="text-[#FFD700] font-semibold">Reduced Inequality (SDG 10)</span>.
        </p>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="bg-[#00a88f] p-6 rounded-2xl shadow-lg text-left hover:scale-105 transition">
            <Lightbulb className="text-[#FFD700] mb-4" size={40} />
            <h3 className="text-2xl font-bold text-[#FFD700] mb-2">Menstrual Health Access</h3>
            <p>
              Successfully distributed <strong>200+ sanitary kits</strong> to young mothers in Kisauni, removing 
              menstrual hygiene barriers and helping girls stay in school.
            </p>
          </div>
          <div className="bg-[#00a88f] p-6 rounded-2xl shadow-lg text-left hover:scale-105 transition">
            <School className="text-[#FFD700] mb-4" size={40} />
            <h3 className="text-2xl font-bold text-[#FFD700] mb-2">Awareness Campaigns</h3>
            <p>
              Launched health campaigns in <strong>10+ schools and communities</strong>, 
              promoting open conversations on menstrual health and dismantling stigma.
            </p>
          </div>
          <div className="bg-[#00a88f] p-6 rounded-2xl shadow-lg text-left hover:scale-105 transition">
            <Briefcase className="text-[#FFD700] mb-4" size={40} />
            <h3 className="text-2xl font-bold text-[#FFD700] mb-2">Youth Empowerment</h3>
            <p>
              Trained <strong>100+ youth</strong> in digital skills and entrepreneurship, unlocking 
              new income opportunities and strengthening their role in the digital economy.
            </p>
          </div>
          <div className="bg-[#00a88f] p-6 rounded-2xl shadow-lg text-left hover:scale-105 transition">
            <Handshake className="text-[#FFD700] mb-4" size={40} />
            <h3 className="text-2xl font-bold text-[#FFD700] mb-2">Strategic Partnerships</h3>
            <p>
              Built strong alliances with <strong>community leaders and organizations</strong> to 
              co-design solutions, amplify impact, and ensure long-term sustainability.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white text-[#004d43] rounded-xl p-6 shadow-md">
            <p className="italic">"She Forward Coast gave me the skills and confidence to launch my own business."</p>
            <p className="mt-4 font-semibold">— Aisha, Mombasa</p>
          </div>
          <div className="bg-white text-[#004d43] rounded-xl p-6 shadow-md">
            <p className="italic">"Thanks to their climate training, our village now has a thriving tree nursery."</p>
            <p className="mt-4 font-semibold">— Fatma, Kisauni</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <h2 className="text-2xl font-heading font-semibold text-[#FFD700]">Ready to Make a Difference?</h2>
          <p className="mb-4 text-[#b3f7ec]">Join us as a volunteer, donor, or partner in change.</p>
          <a
            href="/contact"
            className="inline-block bg-[#FFD700] text-[#004d43] px-6 py-3 font-semibold rounded-full hover:bg-white transition"
          >
           

          </a>
        </div>
      </div>
    </div>
  );
}
