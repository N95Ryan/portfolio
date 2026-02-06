import type { Project } from '@types/index';

export const projects: Project[] = [
  {
    id: '0',
    title: 'Leaf',
    name: {
      en: 'Leaf',
      fr: 'Leaf',
    },
    description: {
      en: 'Leaf is an elegant and fast markdown note manager that runs entirely in your terminal. It allows you to create, edit, search, and organize markdown notes with an intuitive TUI interface.',
      fr: 'Leaf est un gestionnaire de notes markdown élégant et rapide qui fonctionne entièrement dans votre terminal. Il vous permet de créer, modifier, rechercher et organiser des notes markdown avec une interface TUI intuitive.',
    },
    technologies: 'Go • Bubbletea • Lipgloss',
    image: '/images/projects/Leaf.jpg',
    link: 'https://github.com/N95Ryan/leaf',
    bgcolor: '#63b853',
    textColor: '#ffffff',
    linkColor: '#343a40',
    linkTextColor: '#ffffff',
    tags: [],
  },
  {
    id: '1',
    title: 'The 8bits Hangman',
    name: {
      en: 'The 8bits Hangman',
      fr: 'The 8bits Hangman',
    },
    description: {
      en: 'The 8bits Hangman is a hangman game online. You have to find words in the video game domain.',
      fr: 'The 8bits Hangman est un jeu de pendu en ligne. Vous devez trouver des mots dans le domaine du jeu vidéo.',
    },
    technologies: 'React • Vite • Gin',
    image: '/images/projects/The-8bits-hangman.jpg',
    link: 'https://the-8bits-hangman.vercel.app/',
    bgcolor: '#ffffff',
    textColor: '#000000',
    linkColor: '#f4a45d',
    linkTextColor: '#000000',
    tags: [],
  },
  {
    id: '2',
    title: 'Movie Mate',
    name: {
      en: 'Movie Mate',
      fr: 'Movie Mate',
    },
    description: {
      en: 'React Native mobile application that displays popular movies from The Movie Database (TMDB) API. Features include welcome screen, search functionality, animated carousels, and detailed movie views.',
      fr: 'Application mobile React Native qui affiche les films populaires depuis l\'API The Movie Database (TMDB). Fonctionnalités : écran d\'accueil, recherche, carrousels animés et vues détaillées des films.',
    },
    technologies: 'React Native • Expo • TMDB API',
    image: '/images/projects/Loading.jpg', // Placeholder en attendant l'image Movie-Mate.jpg
    link: 'https://github.com/N95Ryan/movie-mate',
    bgcolor: '#1a1a1a',
    textColor: '#ffffff',
    linkColor: '#e50914',
    linkTextColor: '#ffffff',
    tags: [],
  },
  {
    id: '3',
    title: 'Spotr',
    name: {
      en: 'Spotr',
      fr: 'Spotr',
    },
    description: {
      en: 'Spotr is a mobile application designed for photographers in search of unique locations. It allows users to easily scout, save, and explore photo spots around the world.',
      fr: 'Spotr est une application mobile conçue pour les photographes à la recherche d\'emplacements uniques. Elle permet aux utilisateurs de repérer, sauvegarder et explorer facilement des spots photo à travers le monde.',
    },
    technologies: 'Swift • GraphQL • Firebase',
    image: '/images/projects/Spotr.jpg',
    link: 'https://apps.apple.com/fr/app/spotr-tous-les-spots-photo/id1151859681',
    bgcolor: '#ffffff',
    textColor: '#000000',
    linkColor: '#07e7a8',
    linkTextColor: '#000000',
    tags: [],
  },
    
  {
    id: '4',
    title: 'Bumble B',
    name: {
      en: 'Bumble B',
      fr: 'Bumble B',
    },
    description: {
      en: 'Developed as part of my final school project, Bumble B is a mobile application that controls a small car equipped with an ESP32 module provided by the school.',
      fr: 'Développé dans le cadre de mon projet de fin d\'études, Bumble B est une application mobile qui contrôle une petite voiture équipée d\'un module ESP32 fourni par l\'école.',
    },
    technologies: 'React Native • Expo • C++',
    image: '/images/projects/Bumble-B.jpg',
    link: 'https://github.com/N95Ryan/Bumble-B',
    bgcolor: '#322c2b',
    textColor: '#ffffff',
    linkColor: '#fef9c2',
    linkTextColor: '#000000',
    tags: [],
  },
  {
    id: '5',
    title: 'Bitjutsu',
    name: {
      en: 'Bitjutsu',
      fr: 'Bitjutsu',
    },
    description: {
      en: 'AI-powered image editor that allows you to edit pictures using written instructions. Built with Next.js and powered by Replicate\'s InstructPix2Pix model.',
      fr: 'Éditeur d\'images alimenté par l\'IA qui permet de modifier des photos en utilisant des instructions écrites. Construit avec Next.js et alimenté par le modèle InstructPix2Pix de Replicate.',
    },
    technologies: 'Next.js • Tailwind CSS • Replicate API',
    image: '/images/projects/Bitjutsu.jpg',
    link: 'https://bijutsu.vercel.app/',
    bgcolor: '#ffffff',
    textColor: '#000000',
    linkColor: '#1d1d1d',
    linkTextColor: '#ffffff',
    tags: [],
  },
  
];
