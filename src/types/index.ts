// Types globaux du portfolio

export interface Project {
  id: string;
  name: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  technologies: string[];
  image: string;
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
