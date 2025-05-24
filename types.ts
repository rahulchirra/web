// Add import React to ensure type consistency for React.FC and React.SVGProps
import React from 'react';

export interface NavLink {
  id: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Hobby {
  id: string;
  name: string;
  description: string;
  icon?: React.ReactNode; // Can be an SVG component or text
}

// Enum for section IDs to ensure consistency
export enum SectionId {
  Hero = 'hero',
  About = 'about',
  Work = 'work',
  Hobbies = 'hobbies',
  Contact = 'contact',
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  githubUrl?: string; // Added GitHub URL
  professionalSummary: string;
  // Optional: Add other personal details if needed
  // tagline?: string;
  // twitter?: string;
}

export interface SkillItem {
  name:string;
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
  animationClass?: 'animate-subtle-float' | 'animate-subtle-pulse';
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  location?: string; // Optional
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  grade?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  id?: string; // Optional
}

export interface LanguageSpoken {
  language: string;
  proficiency: string;
}
