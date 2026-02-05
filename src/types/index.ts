// Types globaux du portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  bgcolor: string;
  textColor: string;
  link: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
  location?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export type Language = 'en' | 'fr';
