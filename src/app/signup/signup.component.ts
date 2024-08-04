import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { Signup } from '../Models/Signup';
import { SignupModalComponent } from '../signup-modal/signup-modal.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, SignupModalComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @ViewChild('signupForm') signupForm!: NgForm;
  @ViewChild(SignupModalComponent) modal?: SignupModalComponent;
  constructor(private signupService: SignupService) {}
  editedClient: any;

  onSubmit(name: string, surname: string, email: string, password: string) {
    if (!this.signupService.signupData.map((e) => e.email).includes(email)) {
      //Checks if the same email already exists
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
            this.signupService.signupData.push(item); // Inputs new client into database
            this.signupForm.reset();
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      const pos = this.signupService.signupData
        .map((e) => e.email)
        .indexOf(email);
      this.editedClient = this.signupService.signupData[pos];
      this.editedClient.firstName = name;
      this.editedClient.lastName = surname;
      this.editedClient.email = email;
      this.editedClient.password = password;
      this.editedClient.id = this.signupService.signupData[pos].id;

      this.signupService.changeClientData(this.editedClient).subscribe({
        next: (item: any) => {
          let editedItemIndex = this.signupService.signupData.findIndex(
            (signupItem) => signupItem.id == item.id
          );
          if (editedItemIndex != -1) {
            this.signupService.signupData[editedItemIndex] = item; //Prevents from doubling clients with the same email
            this.signupForm.reset();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
    this.showModal();
  }
  showModal() {
    this.modal?.openModal();
  }
}
