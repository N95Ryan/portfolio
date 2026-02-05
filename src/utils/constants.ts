// Constantes du portfolio

export const SITE_TITLE = 'Ryan Pina - Portfolio';
export const SITE_DESCRIPTION = 'Full Stack Developer Portfolio';
export const SITE_URL = 'https://www.ryan-pina.dev';

export const SOCIAL_LINKS = {
  github: 'https://github.com/N95Ryan',
  linkedin: 'https://linkedin.com/in/ryan-pina',
  email: 'contact@ryan-pina.dev',
} as const;

export const NAVIGATION_ITEMS = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
] as const;
