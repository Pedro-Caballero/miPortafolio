import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


bootstrapApplication(App, {
  providers: [
    provideAnimations() // Opcional: para animaciones más fluidas
  ]
}).catch(err => console.error(err));