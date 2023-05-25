export interface Project {
  name: string;
  shortDescription: string;
  longDescription: string;
  technologies: string;
  sourceCodeLink: string;
  images: Array<{ title: string; src: string }>;
}
