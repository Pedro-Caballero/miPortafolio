import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrivacyPolicy } from '../privacy-policy/privacy-policy';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PrivacyPolicy],
  templateUrl: './contact.html'
})
export class Contact implements OnInit {
  contactForm!: FormGroup;
  isLoading: boolean = false; // Estado de carga
  showPrivacyModal = false; // Controla la visibilidad

  constructor(private fb: FormBuilder) {
  }

  togglePrivacyModal() {
    this.showPrivacyModal = !this.showPrivacyModal;
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      acceptPrivacy: [false, Validators.requiredTrue] // <--- Debe ser true para ser válido
    });
  }

  onSubmit() {
  if (this.contactForm.valid) {
    this.isLoading = true;

    // 1. Extraemos los datos
    const { name, email, message } = this.contactForm.value;
    
    // 2. Tu número de teléfono (Formato internacional sin el '+')
    // Ejemplo para México: 5215512345678
    const myPhoneNumber = '5215535132465'; 

    // 3. Creamos el mensaje codificado para la URL
    const text = `Hola, mi nombre es *${name}*.\n\n` +
                 `Me gustaría contactarte por: ${message}\n\n` +
                 `Mi correo es: ${email}`;
    
    const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(text)}`;

    // 4. Simulamos una pequeña carga para mejorar la UX
    setTimeout(() => {
      this.isLoading = false;
      window.open(whatsappUrl, '_blank'); // Abre WhatsApp en otra pestaña
      this.contactForm.reset();
    }, 1000);
  }
}
}