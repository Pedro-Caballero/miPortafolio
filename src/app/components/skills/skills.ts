import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
  skillCategories = [
    {
      category: 'Scrum Master',
      icon: '🔄',
      skills: [
        { name: 'Jira', level: 100 },
        { name: 'Facilitador de procesos', level: 100 },
        { name: 'Confluence', level: 95 },
        { name: 'Agile Methodologies', level: 95 },
        { name: 'Resolución de conflictos', level: 95 },
        { name: 'Liderazgo servicial', level: 95 },
        { name: 'Planificación de sprints', level: 95 }
      ]
    },
    {
      category: 'Frontend Development',
      icon: '💻',
      skills: [
        { name: 'Lit', level: 100 },
        { name: 'Angular', level: 100 },
        { name: 'TypeScript', level: 100 },
        { name: 'NodeJs', level: 100 },
        { name: 'Diseño Responsivo', level: 100 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Sonnar', level: 95 },
      ]
    }
  ];
}