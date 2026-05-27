// Shared content types consumed by both the 3D and the normal (2D) portfolio views.

export interface Project {
  id?: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubClient?: string;
  githubServer?: string;
  tags?: string[];
}

export interface ExperienceItem {
  id?: string;
  title: string;
  company: string;
  date: string;
  url?: string;
  description: string;
}

export interface EducationItem {
  id?: string;
  degree: string;
  institution: string;
  date?: string;
  year?: string;
  description: string;
}

export interface Achievement {
  id?: string;
  year: string;
  title: string;
  event: string;
  badge: string;
}
