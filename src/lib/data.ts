// src/lib/data.ts

export type Program = {
  title: string;
  slug: string;
  description: string;
};

export type ThematicArea = {
  title: string;
  slug: string;
  description?: string; // optional in case you add top-level descriptions later
  programs: Program[];
};

export const thematicAreas: ThematicArea[] = [
  {
    title: 'Climate',
    slug: 'climate',
    programs: [
      {
        title: 'Blue Economy Program',
        slug: 'blue-economy-program',
        description:
          'This program focuses on achieving several key objectives: conserving ocean ecosystems, promoting ecotourism, and strengthening livelihoods through empowerment, education, training, and strategic partnerships.',
      },
      {
        title: 'Environmental Management & Conservation',
        slug: 'environmental-management-conservation',
        description:
          'Designed to enhance environmental quality through waste management strategies and comprehensive community education on ecological preservation.',
      },
      {
        title: 'Nature is Back',
        slug: 'nature-is-back',
        description:
          'Brings together climate champions, organizations, and youth to restore and protect the environment through mangrove restoration, tree planting, wildlife education, community dialogues, and awareness campaigns.',
      },
      {
        title: 'Climate Education',
        slug: 'climate-education',
        description:
          'Equips individuals with the knowledge, skills, values, and attitudes necessary to understand and respond effectively to climate change.',
      },
    ],
  },
  {
    title: 'Health',
    slug: 'health',
    programs: [
      {
        title: 'Pad Bank Program',
        slug: 'pad-bank-program',
        description:
          'A community-based initiative to collect, store, and distribute menstrual hygiene products to individuals lacking consistent access.',
      },
      {
        title: 'Mental Health and Menstrual Hygiene Management',
        slug: 'mental-health-mhm',
        description:
          'Recognizes the link between mental health and menstrual hygiene, addressing psychological distress caused by inadequate MHM and supporting well-being.',
      },
    ],
  },
  {
    title: 'Leadership & Governance',
    slug: 'leadership-governance',
    programs: [
      {
        title: 'Women and Youth in Leadership',
        slug: 'women-youth-leadership',
        description:
          'Empowers youth and women with skills, confidence, and opportunities to take on leadership roles and contribute to governance.',
      },
      {
        title: 'Youth Leaders Association Konekt',
        slug: 'youth-leaders-konekt',
        description:
          'Connects youth leaders across coastal Kenya to learn, network, and collaborate for regional leadership development.',
      },
    ],
  },
  {
    title: 'Entrepreneurship',
    slug: 'entrepreneurship',
    programs: [
      {
        title: 'Women and Youths in Business',
        slug: 'women-youths-business',
        description:
          'Trains and empowers young individuals and women to become self-sufficient entrepreneurs and ambassadors for economic empowerment.',
      },
      {
        title: 'Digi-entrepreneur Academy Program',
        slug: 'digi-entrepreneur-academy',
        description:
          'Equips individuals with digital skills and an entrepreneurial mindset to start, grow, and scale businesses in the digital economy.',
      },
    ],
  },
  {
    title: 'Technology',
    slug: 'technology',
    programs: [
      {
        title: 'Women in Tech',
        slug: 'women-in-tech',
        description:
          'Aims to increase representation, participation, and success of women in tech through roles in development, cybersecurity, AI, and more.',
      },
    ],
  },
  {
    title: 'Education',
    slug: 'education',
    programs: [
      {
        title: 'Mentor and Mentorship Konekt',
        slug: 'mentorship-konekt',
        description:
          'Connects youth and women with experienced mentors to foster growth, skill development, and professional advancement.',
      },
      {
        title: 'Women and Youths in Education',
        slug: 'women-youths-education',
        description:
          'Ensures equitable access, participation, and success in education through advocacy and empowerment of women and youth.',
      },
    ],
  },
];
