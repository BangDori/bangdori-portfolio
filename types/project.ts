import { IconType } from 'react-icons';

export interface ProjectDetailCard {
  title: string;
  image: string;
  problem: string;
  cause: string;
  solution: string;
  insight: string;
}

export interface ProjectDetailLink {
  icon: IconType;
  label: string;
  href: string;
}
