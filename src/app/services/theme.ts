import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Usamos un 'signal' para que Angular reaccione al cambio instantáneamente
  darkMode = signal<boolean>(false);

  constructor() {
    // Revisamos si el usuario ya tenía una preferencia guardada
    // Solo en el navegador, no en SSR
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.enableDarkMode();
      }
    }
  }

  toggleTheme() {
    this.darkMode.set(!this.darkMode());
    if (this.darkMode()) {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  private enableDarkMode() {
    document.documentElement.classList.add('dark');
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', 'dark');
    }
    this.darkMode.set(true);
  }

  private disableDarkMode() {
    document.documentElement.classList.remove('dark');
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', 'light');
    }
    this.darkMode.set(false);
  }
}