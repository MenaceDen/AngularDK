import { Component, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}
  @ViewChild('loginForm') loginForm!: NgForm;
  onSubmit() {
    this.loginService.registerLogin(
      this.loginForm.form.value.emailField,
      this.loginForm.form.value.passwordField
    );
    this.loginForm.reset();
  }
}
