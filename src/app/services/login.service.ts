import { Injectable } from '@angular/core';
import { SignupService } from './signup.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private signupService: SignupService,
    private toastr: ToastrService
  ) {}

  isLoggedIn: boolean = false;
  nameToSow: string = '';
  registerLogin(mail: string, password: string) {
    if (
      !this.isLoggedIn &&
      this.signupService.signupData
        .map((e) => e.email + e.password)
        .includes(mail + password)
    ) {
      this.isLoggedIn = true;
      const pos = this.signupService.signupData
        .map((e) => e.email)
        .indexOf(mail);
      this.nameToSow = this.signupService.signupData[pos].firstName;
    } else if (this.isLoggedIn) {
      this.toastr.warning('Already logged in!', 'Oops!');
    } else {
      this.toastr.warning('Either email or password is incorrect', 'Oops!');
    }
  }
  logOut() {
    this.isLoggedIn = false;
    this.nameToSow = '';
  }
}
