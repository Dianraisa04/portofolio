export type ProjectCategory = 
  | 'All' 
  | 'AI & Machine Learning' 
  | 'NLP & Data Science' 
  | 'Computer Vision' 
  | 'Mobile & IoT';

export interface Project {
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  tags: string[];
  featured: boolean;
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
  overview: string;
  problem: string;
  approach: string;
  contribution: string[];
  results: string[];
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  type: 'Work' | 'Research' | 'Education' | 'Community';
  description: string;
  contributions: string[];
  skills: string[];
  link?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    highlight?: boolean;
    level?: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  score?: string;
  credentialId?: string;
  description: string;
  skills: string[];
}
