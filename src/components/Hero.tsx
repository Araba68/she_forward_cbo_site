// components/Hero.tsx
import { getHero } from '../lib/getHero';
import Image from 'next/image';

export default async function Hero() {
  const hero = await getHero();

  if (!hero) return null;

  // Safely resolve hero image URL
  const rawUrl: string | null =
    (hero.heroImage?.fields?.file?.url as string | undefined) || null;

  const imageUrl = rawUrl
    ? rawUrl.startsWith('//')
      ? 'https:' + rawUrl
      : rawUrl
    : null;

  // ✅ Ensure alt is always a string
  const rawDescription = hero.heroImage?.fields.description;
  const imageAlt: string =
    typeof rawDescription === 'string'
      ? rawDescription
      : 'Hero image';

  return (
    <section
      className="font-body px-6 py-20 md:py-28"
      style={{ background: hero.backgroundColor || '#0a2e07', color: '#fffffe' }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left: Text */}
        <div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-8">{hero.description}</p>
          {hero.ctaLink && hero.ctaText && (
            <a
              href={hero.ctaLink}
              className="inline-block bg-[#FFD700] text-[#1c2120] font-semibold text-lg px-6 py-3 rounded-full shadow hover:opacity-90 transition"
            >
              {hero.ctaText}
            </a>
          )}
        </div>

        {/* Right: Hero Image (only render if available) */}
        {imageUrl && (
          <div className="flex justify-center">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={800}
              height={500}
              className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
