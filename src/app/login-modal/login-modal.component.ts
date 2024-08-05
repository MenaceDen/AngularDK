import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css',
})
export class LoginModalComponent {
  @ViewChild('superButton') dugme!: ElementRef;

  openModal() {
    this.dugme.nativeElement.click();
  }
}
