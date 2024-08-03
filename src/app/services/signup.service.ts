import { Injectable } from '@angular/core';
import { Signup } from '../Models/Signup';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private httpClient: HttpClient) {
    this.accessSignupData().subscribe({
      next: (data: Signup[]) => (this.signupData = data),
      error: (e: any) => console.log(e),
    });
  }
  signupData: Signup[] = [];

  private apiUrl = 'http://localhost:3000/clients'; //file dataBase.json is in the root directory

  accessSignupData(): any {
    return this.httpClient.get(this.apiUrl);
  }
  addClient(newClient: Signup) {
    return this.httpClient.post(this.apiUrl, newClient);
  }
  showClients() {
    console.log(this.signupData);
  }
}
