import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.html'
})
export class PrivacyPolicy {
  @Input() isOpen: boolean = false; // Recibe la orden de abrirse
  @Output() close = new EventEmitter<void>(); // Avisa cuando quiere cerrarse

  closeModal() {
    this.close.emit();
  }
}