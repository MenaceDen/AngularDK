import { Injectable } from '@angular/core';
import { Signup } from '../Models/Signup';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor() {}
  signupData: Signup[] = [];
  enterSignup(name: string, surname: string, email: string, password: string) {
    this.signupData.push(new Signup(name, surname, email, password));
    console.log(this.signupData);
  }
}
