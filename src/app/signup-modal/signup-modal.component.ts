import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-modal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signup-modal.component.html',
  styleUrl: './signup-modal.component.css',
})
export class SignupModalComponent {
  @ViewChild('superButton') dugme!: ElementRef;

  openModal() {
    this.dugme.nativeElement.click();
    console.log('drugi poziv');
  }
}
