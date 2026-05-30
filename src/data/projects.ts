import type { Project } from '@types/index';

export const projects: Project[] = [
  {
    id: '0',
    title: 'Flip',
    name: {
      en: 'Flip',
      fr: 'Flip',
    },
    description: {
      en: 'Judo pocket companion. Free technique library, premium training journal behind a Stripe paywall. Built end-to-end, from the Go API to the App Store.',
      fr: 'Application compagnon pour judokas. Bibliothèque de techniques gratuite, journal d\'entraînement premium derrière un paywall Stripe. Construit de bout en bout, de l\'API Go à l\'App Store.',
    },
    technologies: ['Go (Chi)', 'Expo', 'Neon', 'Stripe'],
    image: '/images/projects/Flip.jpg',
    link: 'https://github.com/N95Ryan/Flip',
    bgcolor: '#34344A', 
    textColor: '#F7F2E9',
    linkColor: '#F7F2E9',
    linkTextColor: '#34344A',
    tags: [],
  },
  {
    id: '1',
    title: 'Midbec Journey',
    name: {
      en: 'Midbec Journey',
      fr: 'Midbec Journey',
    },
    description: {
      en: 'Solo engineer at a home appliance distributor. Migrating a legacy PHP/Python system to Go/Next.js, managing 2M+ inventory records in production.',
      fr: 'Ingénieur solo chez un distributeur d\'électroménager. Migration d\'un système legacy PHP/Python vers Go + Next.js, 2M+ références en production.',
    },
    technologies: ['Go (Chi)', 'Next.js', 'PostgreSQL'],
    image: '/images/projects/Midbec-Journey.jpg',
    link: 'https://github.com/N95Ryan/midbec-journey',
    bgcolor: '#be0c16',
    textColor: '#ffffff',
    linkColor: '#ffffff',
    linkTextColor: '#be0c16',
    tags: [],
  },
  {
    id: '2',
    title: 'Leaf',
    name: {
      en: 'Leaf',
      fr: 'Leaf',
    },
    description: {
      en: 'Markdown notes in your terminal. No app, no cloud, no noise. Just write.',
      fr: 'Des notes markdown dans ton terminal. Pas d\'app, pas de cloud, pas de bruit. Juste écrire.',
    },
    technologies: ['Go', 'Bubbletea', 'Lipgloss'],
    image: '/images/projects/Leaf.jpg',
    link: 'https://github.com/N95Ryan/leaf',
    bgcolor: '#63b853',
    textColor: '#ffffff',
    linkColor: '#343a40',
    linkTextColor: '#ffffff',
    tags: [],
  },
  {
    id: '3',
    title: 'The 8bits Hangman',
    name: {
      en: 'The 8bits Hangman',
      fr: 'The 8bits Hangman',
    },
    description: {
      en: 'A retro hangman game with a proper frontend/backend split. Old school vibe, clean architecture.',
      fr: 'Un jeu de pendu rétro avec une séparation propre frontend/backend. Ambiance old school, architecture propre.',
    },
    technologies: ['React', 'Vite', 'Go (Gin)'],
    image: '/images/projects/The-8bits-hangman.jpg',
    link: 'https://the-8bits-hangman.vercel.app/',
    bgcolor: '#ffffff',
    textColor: '#000000',
    linkColor: '#f4a45d',
    linkTextColor: '#000000',
    tags: [],
  },
];