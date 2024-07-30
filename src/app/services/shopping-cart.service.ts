import { Injectable } from '@angular/core';
import { CartItem } from '../Models/CartItem';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private apiUrl = 'http://localhost:3000/cart'; //file dataBase.json is in the root directory
  showBadgeNumber: Subject<number> = new Subject<number>();
  cartItems: CartItem[] = [];
  quantityToShow: number = 0;
  editedCartItem: any;
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
    this.accessShoppingCart().subscribe({
      next: (data: CartItem[]) => (this.cartItems = data),
      error: (e: any) => console.log(e),
    });
  }

  accessShoppingCart(): any {
    return this.httpClient.get(this.apiUrl);
  }
  addProd(newProd: CartItem) {
    return this.httpClient.post(this.apiUrl, newProd);
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
        this.cartItems.push(item);
        this.showOnTheNav();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  removeFromCart(cartID: number) {
    return this.httpClient.delete(this.apiUrl + '/' + cartID);
  }
  delFromCart(id: number) {
    this.removeFromCart(id).subscribe({
      next: (data: any) => {
        let deletedItemIndex = this.cartItems.findIndex(
          (item) => item.id == data.id
        );
        this.cartItems.splice(deletedItemIndex, 1);
      },
    });
    setTimeout(() => {
      this.showOnTheNav();
    }, 100);
  }

  changeProductQuantity(item: CartItem, quantity?: number) {
    return this.httpClient.put(this.apiUrl + '/' + item.id, item);
  }
  addQuantity(item: CartItem, quantity: any) {
    this.editedCartItem = item;
    if (parseInt(quantity) && quantity > 0) {
      this.editedCartItem.id = item.id;
      this.editedCartItem.imgSrc = item.imgSrc;
      this.editedCartItem.name = item.name;
      this.editedCartItem.price = item.price;
      this.editedCartItem.quantity = parseInt(quantity);
      this.changeProductQuantity(this.editedCartItem).subscribe({
        next: (item: any) => {
          let editedItemIndex = this.cartItems.findIndex(
            (cartItem) => cartItem.id == item.id
          );
          if (editedItemIndex != -1) {
            this.cartItems[editedItemIndex] = item;
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.toastr.warning('Input positive number or delete item!', 'Oops!');
    }
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
    let numb: number = 0;
    if (this.cartItems) {
      this.cartItems.forEach((item) => {
        numb += item.quantity;
      });
    }
    this.showBadgeNumber.next(numb);
  }
}
