import { Component, ViewChild } from '@angular/core';
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
  @ViewChild('inputAlert') inputAl: any;
  delFromCart(index: number, quantity: number) {
    this.warehouseService.removeFromCart(index, quantity);
  }
  addQuantity(index: number, quantity: any) {
    if (parseInt(quantity) && quantity > 0) {
      this.warehouseService.changeProductQuantity(index, parseInt(quantity));
      this.inputAl.nativeElement.style = 'display: none';
    } else {
      console.log('not a number');
      this.inputAl.nativeElement.style = 'display: flex';
    }
  }
}
