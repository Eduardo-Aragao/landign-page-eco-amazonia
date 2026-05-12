export type AccentTone = 'primary' | 'accent';

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: AccentTone;
}

export interface AppScreen {
  id: string;
  title: string;
  description: string;
  badge: string;
  accent: AccentTone;
  src: string;
}

export interface WasteType {
  id: 'organic' | 'recyclable' | 'special' | 'hospital';
  title: string;
  short: string;
  description: string;
  examples: string[];
  gradient: string;
  iconBg: string;
  glow: string;
  icon: string;
  screenshot?: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
}

export type TeamTrackId = 'design' | 'backend' | 'mobile' | 'web';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  track: TeamTrackId;
  photo?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface SustainabilityPillar {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export interface Technology {
  id: string;
  name: string;
  icon: string;
  gradient: string;
}

export interface TechDomain {
  id: 'mobile' | 'backend' | 'web';
  number: string;
  domain: string;
  architecture: {
    label: string;
    subtitle: string;
  };
  description: string;
  technologies: Technology[];
}
