import { Injectable } from '@angular/core';
import { Contact } from '../Models/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}
  contactData: Contact[] = [];
  newsSubs: string[] = [];
  getContact(name: string, email: string, subject: string, message: string) {
    this.contactData.push(new Contact(name, email, subject, message));
    console.log(this.contactData);
  }
  subscribeMails(mail: string) {
    this.newsSubs.push(mail);
    console.log(this.newsSubs);
  }
}
