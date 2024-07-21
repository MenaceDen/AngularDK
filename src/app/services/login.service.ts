import { Injectable } from '@angular/core';
import { Login } from '../Models/Login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  loginData: Login[] = [];
}
