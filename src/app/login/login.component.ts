import { Component, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}
  @ViewChild('loginForm') loginForm!: NgForm;
  onSubmit() {
    console.log(this.loginForm);
  }
}
