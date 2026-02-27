export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  score: string;
}

export interface CertificationItem {
  title: string;
  date: string;
}

export interface CompetitiveProgrammingItem {
  platform: string;
  rating: string;
  problems: string;
  contests: string;
  streak: string;
  url: string;
}

export interface SkillItem {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface ProjectItem {
  title: string;
  period: string;
  stack: string[];
  description: string;
  achievements: string[];
  github: string;
  live: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  summary: string;
}