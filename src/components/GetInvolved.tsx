'use client';

export default function GetInvolved() {
  return (
    <section id="get-involved" className="bg-[#0a2e07] text-white px-6 py-16 font-body">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Be Part of the Change
        </h2>
        <p className="text-lg md:text-xl text-[#b3f7ec] mb-10">
          Whether you are an individual, organization, or corporate ally — your support fuels our mission to uplift 
          women and youth across Coastal Kenya. There are many ways to make an impact — choose what works best for you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left text-[#FFD700]">
          <div>
            <h4 className="text-xl font-semibold mb-2">🤝 Volunteer</h4>
            <p className="text-[#b3f7ec]">
              Share your skills, time, or knowledge. Help us run community programs, events, or trainings.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">💸 Donate</h4>
            <p className="text-[#b3f7ec]">
              Every contribution counts. Support our work financially to expand our reach and sustain our impact.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">🌍 Partner With Us</h4>
            <p className="text-[#b3f7ec]">
              We welcome NGOs, companies, and institutions to collaborate on initiatives that empower local communities.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">📣 Spread the Word</h4>
            <p className="text-[#b3f7ec]">
              Follow us, share our work, and advocate for change in your networks.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-[#FFD700] text-[#004d43] font-semibold rounded-full hover:bg-white transition"
          >
            Get in Touch Today
          </a>
        </div>
      </div>
    </section>
  );
}
