import { notFound } from 'next/navigation';
import { thematicAreas } from '@/lib/data';

export default async function ProgramPage({ params }: { params: { slug: string } }) {
  const area = thematicAreas.find((item) => item.slug === params.slug);

  if (!area) return notFound();

  return (
    <section className="min-h-screen bg-white text-[#004d43] py-20 px-4 font-body">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-[#004d43] mb-4">
          {area.title} Programs
        </h1>
        {/* Only show description if it exists on area */}
        {'description' in area && area.description && (
          <p className="text-lg mb-10">{area.description}</p>
        )}

        {area.programs.map((program) => (
          <div
            key={program.slug}
            className="mb-12 p-6 rounded-xl border border-gray-200 shadow-md bg-[#f9f9f9]"
          >
            <h2 className="text-2xl font-semibold mb-2">{program.title}</h2>
            <p className="mb-4">{program.description}</p>
            {/* Only display fields that exist in your data */}
          </div>
        ))}
      </div>
    </section>
  );
}