import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './services.html'
})
export class Services {
  services = [
    {
      title: 'Diseño UI/UX',
      description: 'Creación de interfaces intuitivas y experiencias centradas en el usuario, desde el wireframe hasta el prototipo funcional.',
      icon: '📐'
    },
    {
      title: 'Desarrollo Frontend',
      description: 'Conversión de diseños en aplicaciones web rápidas, responsivas y escalables usando Angular y Tailwind CSS.',
      icon: '⚡'
    },
    {
      title: 'Auditoría de Usabilidad',
      description: 'Análisis profundo de plataformas existentes para identificar puntos de fricción y mejorar la retención de usuarios.',
      icon: '🔍'
    }
  ];
}