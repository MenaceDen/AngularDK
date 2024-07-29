import { Injectable } from '@angular/core';
import { CartItem } from '../Models/CartItem';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private apiUrl = 'http://localhost:3000/cart'; //file dataBase.json is in the root directory
  showBadgeNumber: Subject<number> = new Subject<number>();
  cartItems: CartItem[] = [];
  quantityToShow: number = 0;
  constructor(private httpClient: HttpClient) {
    this.accessShoppingCart().subscribe({
      next: (data: CartItem[]) => (this.cartItems = data),
      error: (e: any) => console.log(e),
    });
  }

  accessShoppingCart(): any {
    return this.httpClient.get(this.apiUrl);
  }
  addProd(newProd: CartItem) {
    return this.httpClient.post('http://localhost:3000/cart', newProd);
  }
  addProductToCart(
    id: number,
    imgSrc: string,
    name: string,
    price: number,
    quantity: number
  ) {
    this.addProd(new CartItem(id, imgSrc, name, price, quantity)).subscribe({
      next: (item: any) => {
        if (this.cartItems.map((e) => e.id).includes(id)) {
          const pos = this.cartItems.map((e) => e.id).indexOf(id);
          this.cartItems[pos].quantity += quantity;
          this.showOnTheNav();
        } else {
          this.cartItems.push(item);
          this.showOnTheNav();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  removeFromCart(cartID: number) {
    //this.cartItems.splice(index, 1);

    return this.httpClient.delete(`http://localhost:3000/cart/${cartID}`);
    //this.showOnTheNav();
  }
  changeProductQuantity(index: number, quantity: number) {
    let prevQuantity = this.cartItems[index].quantity;
    this.cartItems[index].quantity = quantity;

    // if (this.cartItems[index].quantity > prevQuantity) {
    //   this.quantityToShow += this.cartItems[index].quantity - prevQuantity;
    // } else {
    //   this.quantityToShow -= prevQuantity - this.cartItems[index].quantity;
    // }
    this.showOnTheNav();
  }
  calculateCart(): any[] {
    let calculations: any[] = [];
    let subtotal: number = 0;
    let shipping: number = 0;
    let total: number = 0;
    if (this.cartItems.length) {
      this.cartItems.forEach((item) => {
        subtotal += item.price * item.quantity;
        shipping = subtotal >= 100 ? 0 : 100;
        total = subtotal + shipping;
      });
      calculations.push(subtotal);
      if (shipping) {
        calculations.push(shipping);
      } else {
        calculations.push('FREE');
      }
      calculations.push(total);
    }
    return calculations;
  }
  showOnTheNav() {
    let numb = 0;
    if (this.cartItems) {
      this.cartItems.forEach((item) => {
        numb += item.quantity;
      });
    }
    this.showBadgeNumber.next(numb);
  }
}
