import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';
// Se evita la dependencia de tipos externos para evitar inconsistencias de resolución.
type ProjectItem = {
  id: number;
  title: string;
  description: string;
  img: string;
  tags: string[];
  link?: string;
};

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Desarrollo con Nodejs',
      description: 'Rediseño completo de la experiencia de usuario para una app de meditación.',
      img: 'assets/images/arvice.png',
      tags: ['NodeJs', 'HMTL', 'CSS', 'JavaScript'],
      link: 'https://www.colegioarvice.com/'
    },
    {
      id: 2,
      title: 'Menú digital',
      description: 'Plataforma de ventas minimalista desarrollada con Angular y Tailwind CSS.',
      img: 'assets/images/evita-covid.png',
      tags: ['Angular', 'Tailwind', 'Web'],
      link: 'https://evita-covid.vercel.app/home'
    },
    {
      id: 3,
      title: 'Administrador de Pacientes',
      description: 'Plataforma de ventas minimalista desarrollada con Angular y Tailwind CSS.',
      img: 'assets/images/administrador-citas.png',
      tags: ['React'],
      link: 'https://administradorwebcaballero.netlify.app/'
    },
    {
      id: 4,
      title: 'Blog Café',
      description: 'Plataforma de ventas minimalista desarrollada con Angular y Tailwind CSS.',
      img: 'assets/images/blog-cafe.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://caballero-cafeblog.netlify.app'
    },
        {
      id: 5,
      title: 'App Tareas',
      description: 'Plataforma de ventas minimalista desarrollada con Angular y Tailwind CSS.',
      img: 'assets/images/apptarea.PNG',
      tags: ['Angular'],
      link: 'https://app-tareas-angular.vercel.app/'
    },
    {
      id: 6,
      title: 'Menú Digital Crepas',
      description: 'Plataforma de ventas minimalista desarrollada con Angular y Tailwind CSS.',
      img: 'assets/images/crepas.PNG',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://aca-las-crepas.vercel.app/crepas'
    },
        {
      id: 6,
      title: 'Gasto semanal',
      description: 'Plataforma de ventas minimalista desarrollada con Angular y Tailwind CSS.',
      img: 'assets/images/Caappgasto.PNG',
      tags: ['React'],
      link: 'https://app-gastosemanal-caballero.netlify.app/'
    }
  ];
}