import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../Models/Offer';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  constructor(private router: Router, private httpClient: HttpClient) {
    this.showJson().subscribe({
      next: (data: Offer[]) => (this.flowers = data),
      error: (e: any) => console.log(e),
    });
  }

  private apiUrl = 'http://localhost:3000/goods'; //file dataBase.json is in the root directory
  flowers: Offer[] = [];

  currentIndex: number = 0;
  showProduct(index: number) {
    this.currentIndex = index;
    this.router.navigate(['/product', index]);
  }
  showAnother(way: string) {
    if (way === 'prev') {
      this.currentIndex--;
      if (this.currentIndex != -1) {
        this.showProduct(this.currentIndex);
      } else {
        this.showProduct(this.flowers.length - 1);
      }
    }
    if (way === 'next') {
      this.currentIndex++;
      if (this.currentIndex <= this.flowers.length - 1) {
        this.showProduct(this.currentIndex);
      } else {
        this.showProduct(0);
      }
    }
  }

  showJson(): any {
    return this.httpClient.get(this.apiUrl);
  }
}
