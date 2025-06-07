import { IconType } from 'react-icons';

export interface ProjectDetailLink {
  icon: IconType;
  label: string;
  href: string;
}

export interface ProjectDetail {
  title: string;
  images: Image[];
  problem: string;
  cause: string;
  alternatives: Alternative[];
  solution: string[];
  insights: string[];
  references: Reference[];
}

export interface Image {
  src: string;
  caption: string;
}

interface Alternative {
  text: string;
  selected: boolean;
}

interface Reference {
  label: string;
  href: string;
}
