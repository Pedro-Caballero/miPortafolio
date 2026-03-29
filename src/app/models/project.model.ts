export interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  tags: string[];
  link?: string; // El '?' significa que este campo es opcional
}