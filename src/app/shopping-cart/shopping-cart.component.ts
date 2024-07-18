import { Component } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  constructor(public warehouseService: WarehouseService) {}
  delFromCart(index: number, quantity: number) {
    this.warehouseService.removeFromCart(index, quantity);
  }
}
