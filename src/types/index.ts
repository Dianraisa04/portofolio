export type ProjectCategory = 
  | 'All' 
  | 'AI & Machine Learning' 
  | 'NLP & Data Science' 
  | 'Computer Vision' 
  | 'Mobile & IoT'
  | 'Software & Graphics';

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectImpact {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  tags: string[];
  featured: boolean;
  image?: string;
  gallery?: string[];
  githubUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
  overview: string;
  problem: string;
  approach: string;
  contribution: string[];
  results: string[];
  metrics?: ProjectMetric[];
  impacts?: ProjectImpact[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  type: 'Work' | 'Research' | 'Education' | 'Organization' | 'Community';
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

export interface DocumentationImage {
  url: string;
  title: string;
  caption?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  score?: string;
  category?: 'Certification' | 'Award' | 'Publication' | 'Copyright';
  credentialId?: string;
  description: string;
  skills: string[];
  docImage?: string;
  gallery?: DocumentationImage[];
  link?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  venue: string;
  date: string;
  type: 'Journal' | 'Conference' | 'Copyright';
  description: string;
  link?: string;
}
