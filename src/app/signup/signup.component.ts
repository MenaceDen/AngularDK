import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { Signup } from '../Models/Signup';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @ViewChild('signupForm') signupForm!: NgForm;
  constructor(private signupService: SignupService) {}
  // onSubmit() {
  //   this.signupService.enterSignup(
  //     this.signupForm.form.value.nameField,
  //     this.signupForm.value.surnameField,
  //     this.signupForm.value.emailField,
  //     this.signupForm.value.passwordField
  //   );
  //   this.signupForm.reset();
  // }
  onSubmit() {
    this.signupService
      .addClient(
        new Signup(
          this.signupForm.form.value.nameField,
          this.signupForm.value.surnameField,
          this.signupForm.value.emailField,
          this.signupForm.value.passwordField
        )
      )
      .subscribe({
        next: (item: any) => {
          this.signupService.signupData.push(item);
          this.signupForm.reset();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
