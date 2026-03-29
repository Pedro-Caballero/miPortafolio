import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Configuramos el estado inicial (invisible y un poco abajo)
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(30px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.8s ease-out');

    // En servidor (SSR) IntersectionObserver no existe.
    if (typeof IntersectionObserver === 'undefined' || typeof window === 'undefined') {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Cuando el elemento entra en vista, lo animamos
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
          this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
          observer.unobserve(this.el.nativeElement); // Solo se anima una vez
        }
      });
    }, { threshold: 0.1 }); // Se activa cuando el 10% del elemento es visible

    observer.observe(this.el.nativeElement);
  }
}