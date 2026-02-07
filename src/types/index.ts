// Types globaux du portfolio

export interface Project {
  id: string;
  title: string;
  name: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  technologies: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  bgcolor: string;
  textColor: string;
  link: string;
  linkColor?: string;
  linkTextColor?: string;
}

export interface Experience {
  id: string;
  technologies: string[];
  location?: string;
}

export type Language = 'en' | 'fr';
