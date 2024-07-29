import { Component } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';

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
  addQuantity(index: number, quantity: any) {
    if (parseInt(quantity) && quantity > 0) {
      this.shoppingCartService.changeProductQuantity(index, parseInt(quantity));
    } else {
      //alert('Input positive number or remove item from the cart');
    }
  }
  completeOrder() {
    this.router.navigate(['/order']);
  }
}
