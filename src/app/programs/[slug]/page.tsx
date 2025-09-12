import { notFound } from 'next/navigation';
import { thematicAreas } from '@/lib/data';
import Image from 'next/image';

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProgramPage(props: Props) {
  const { params } = await props;
  const area = thematicAreas.find((item) => item.slug === params.slug);

  if (!area) return notFound();

  return (
    <section className="min-h-screen bg-white text-[#004d43] py-20 px-4 font-body">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-[#004d43] mb-4">
          {area.title} Programs
        </h1>
        <p className="text-lg mb-10">{area.description}</p>

        {area.programs.map((program) => (
          <div
            key={program.id}
            className="mb-12 p-6 rounded-xl border border-gray-200 shadow-md bg-[#f9f9f9]"
          >
            <h2 className="text-2xl font-semibold mb-2">{program.title}</h2>

            {program.targetGroup && (
              <p className="mb-2">
                <strong>Target Group:</strong> {program.targetGroup}
              </p>
            )}

            <p className="mb-4">{program.description}</p>

            {program.pastActivities?.length > 0 && (
              <details className="mb-2">
                <summary className="cursor-pointer font-medium text-[#004d43]">✅ Past Activities</summary>
                <ul className="list-disc ml-6 mt-2">
                  {program.pastActivities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </details>
            )}

            {program.upcomingEvents?.length > 0 && (
              <details className="mb-2">
                <summary className="cursor-pointer font-medium text-[#004d43]">📅 Upcoming Events</summary>
                <ul className="list-disc ml-6 mt-2">
                  {program.upcomingEvents.map((event) => (
                    <li key={event}>{event}</li>
                  ))}
                </ul>
              </details>
            )}

            {program.gallery?.length > 0 && (
              <details className="mb-2">
                <summary className="cursor-pointer font-medium text-[#004d43]">🖼️ Gallery</summary>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {program.gallery.map((url) => (
                    <Image key={url} src={url} alt="Program image" className="rounded-lg" />
                  ))}
                </div>
              </details>
            )}

            {program.impact && (
              <details className="mb-2">
                <summary className="cursor-pointer font-medium text-[#004d43]">📝 Impact Summary</summary>
                <p className="mt-2">{program.impact}</p>
              </details>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}