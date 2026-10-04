
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
}

export interface FieldStudy {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  location?: string;
}

export interface Hobby {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export enum Section {
  Home = 'home',
  About = 'about',
  FieldStudies = 'field-studies',
  Projects = 'projects',
  Hobbies = 'hobbies',
  Leaderships = 'leaderships'
}

