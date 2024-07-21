import { Injectable } from '@angular/core';
import { Login } from '../Models/Login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  loginData: Login[] = [];
  registerLogin(mail: string, password: string) {
    this.loginData.push(new Login(mail, password));
    console.log(this.loginData);
  }
  logOut() {
    this.loginData.length = 0;
    console.log(this.loginData);
  }
}
