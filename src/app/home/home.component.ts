import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {}
  @ViewChild('contactForm') contactForm!: NgForm;
  @ViewChild('newsletterForm') newsletterForm!: NgForm;
  goShopping() {
    this.router.navigate(['/shop']);
  }
  onSubmit() {
    this.contactsService.getContact(
      this.contactForm.form.value.nameField,
      this.contactForm.form.value.emailField,
      this.contactForm.form.value.subjectField,
      this.contactForm.form.value.messageField
    );
    this.contactForm.reset();
  }
  onSubscribe() {
    this.contactsService.subscribeMails(
      this.newsletterForm.form.value.newsEmailField
    );
    this.newsletterForm.reset();
  }
}
