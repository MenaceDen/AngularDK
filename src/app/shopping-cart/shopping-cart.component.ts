import { Component } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { CartItem } from '../Models/CartItem';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  constructor(
    public warehouseService: WarehouseService,
    private router: Router,
    public shoppingCartService: ShoppingCartService
  ) {}
  //editedCartItem: any;
  delFromCart(id: number) {
    this.shoppingCartService.removeFromCart(id).subscribe({
      next: (data: any) => {
        let deletedItemIndex = this.shoppingCartService.cartItems.findIndex(
          (item) => item.id == data.id
        );
        this.shoppingCartService.cartItems.splice(deletedItemIndex, 1);
      },
    });
    setTimeout(() => {
      this.shoppingCartService.showOnTheNav();
    }, 100);
  }
  // addQuantity(item: CartItem, quantity: any) {
  //   this.editedCartItem = item;
  //   if (parseInt(quantity) && quantity > 0) {
  //     this.editedCartItem.id = item.id;
  //     this.editedCartItem.imgSrc = item.imgSrc;
  //     this.editedCartItem.name = item.name;
  //     this.editedCartItem.price = item.price;
  //     this.editedCartItem.quantity = parseInt(quantity);
  //     this.shoppingCartService
  //       .changeProductQuantity(this.editedCartItem)
  //       .subscribe({
  //         next: (item: any) => {
  //           let editedItemIndex = this.shoppingCartService.cartItems.findIndex(
  //             (cartItem) => cartItem.id == item.id
  //           );
  //           if (editedItemIndex != -1) {
  //             this.shoppingCartService.cartItems[editedItemIndex] = item;
  //           }
  //         },
  //         error: (err) => {
  //           console.log(err);
  //         },
  //       });
  //   } else {
  //     alert('Input positive number or remove item from the cart');
  //   }
  //   this.shoppingCartService.showOnTheNav();
  // }
  completeOrder() {
    this.router.navigate(['/order']);
  }
}
