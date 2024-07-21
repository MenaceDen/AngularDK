import { Component } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  delFromCart(index: number, quantity: number) {
    this.warehouseService.removeFromCart(index, quantity);
  }
  addQuantity(index: number, quantity: any) {
    if (parseInt(quantity) && quantity > 0) {
      this.warehouseService.changeProductQuantity(index, parseInt(quantity));
    } else {
      //alert('Input positive number or remove item from the cart');
    }
  }
  completeOrder() {
    this.router.navigate(['/order']);
  }
}
