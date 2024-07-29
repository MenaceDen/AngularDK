import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CartItem } from '../Models/CartItem';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../Models/Offer';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  //showBadgeNumber: Subject<number> = new Subject<number>();
  constructor(private router: Router, private httpClient: HttpClient) {
    this.showJson().subscribe({
      next: (data: Offer[]) => (this.flowers = data),
      error: (e: any) => console.log(e),
    });
  }

  private apiUrl = 'http://localhost:3000/goods'; //file dataBase.json is in the root directory
  flowers: Offer[] = [];

  currentIndex: number = 0;
  //quantityToShow: number = 0;

  //cartItems: CartItem[] = [];
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
  // showOnTheNav(quantity: number) {
  //   this.showBadgeNumber.next(quantity);
  // }
  // addProductToCart(
  //   id: number,
  //   imgSrc: string,
  //   name: string,
  //   price: number,
  //   quantity: number
  // ) {
  //   if (this.cartItems.map((e) => e.id).includes(id)) {
  //     const pos = this.cartItems.map((e) => e.id).indexOf(id);
  //     this.cartItems[pos].quantity += quantity;
  //     this.quantityToShow += quantity;
  //     this.showOnTheNav(this.quantityToShow);
  //   } else {
  //     this.cartItems.push(new CartItem(id, imgSrc, name, price, quantity));
  //     this.quantityToShow += quantity;
  //     this.showOnTheNav(this.quantityToShow);
  //   }
  // }
  // removeFromCart(index: number, quantity: number) {
  //   this.cartItems.splice(index, 1);
  //   this.quantityToShow -= quantity;
  //   this.showOnTheNav(this.quantityToShow);
  // }
  // changeProductQuantity(index: number, quantity: number) {
  //   let prevQuantity = this.cartItems[index].quantity;
  //   this.cartItems[index].quantity = quantity;

  //   if (this.cartItems[index].quantity > prevQuantity) {
  //     this.quantityToShow += this.cartItems[index].quantity - prevQuantity;
  //   } else {
  //     this.quantityToShow -= prevQuantity - this.cartItems[index].quantity;
  //   }
  //   this.showOnTheNav(this.quantityToShow);
  // }
  // calculateCart(): any[] {
  //   let calculations: any[] = [];
  //   let subtotal: number = 0;
  //   let shipping: number = 0;
  //   let total: number = 0;
  //   if (this.cartItems.length) {
  //     this.cartItems.forEach((item) => {
  //       subtotal += item.price * item.quantity;
  //       shipping = subtotal >= 100 ? 0 : 100;
  //       total = subtotal + shipping;
  //     });
  //     calculations.push(subtotal);
  //     if (shipping) {
  //       calculations.push(shipping);
  //     } else {
  //       calculations.push('FREE');
  //     }
  //     calculations.push(total);
  //   }
  //   return calculations;
  // }
  showJson(): any {
    return this.httpClient.get(this.apiUrl);
  }
}
