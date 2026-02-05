import type { Experience } from '@types/index';

export const experiences: Experience[] = [
  {
    id: 'midbec-2025',
    company: 'Midbec Ltee',
    position: 'Software Engineer',
    period: '2025 - current',
    location: 'Drummondville, Quebec (Hybrid)',
    description: [
      'Sole engineer modernizing a 20-year legacy PHP/Python system by migrating to a React frontend connected to an ERP and Python ETL managing 400K+ inventory records.',
    ],
    technologies: ['React', 'Python', 'PHP', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'neat-2025',
    company: 'Neat Barber',
    position: 'Full Stack Developer (Freelance)',
    period: '2025',
    location: 'Paris, France (Remote)',
    description: [
      'Rebuilt a legacy site with Astro and TypeScript, cutting JS payload by 93% and improving Lighthouse score from 68 to 94 with a 3× faster mobile experience.',
    ],
    technologies: ['Astro', 'WordPress', 'Cloudinary', 'Playwright'],
  },
  {
    id: 'konbini-2022',
    company: 'Konbini',
    position: 'Frontend Developer',
    period: '2022 - 2024',
    location: 'Paris, France (Hybrid)',
    description: [
      'Rebuilt the homepage with Next.js SSR and GraphQL, reducing load times by 40% and enabling real-time editorial updates.',
    ],
    technologies: ['Next.js', 'GraphQL', 'WordPress', 'Tailwind CSS'],
  },
  {
    id: 'french-innov-2020',
    company: 'French Innov',
    position: 'Web Developer',
    period: '2020 - 2022',
    location: 'Stains, France (On-site)',
    description: [
      'Delivered 10+ production websites with consistent 90+ Lighthouse scores across Performance, SEO, Accessibility.',
      'Built interactive touchscreen kiosks for high-traffic retail: real-time order systems with customer-facing UIs.',
    ],
    technologies: ['JavaScript', 'React', 'Bootstrap'],
  },
];
