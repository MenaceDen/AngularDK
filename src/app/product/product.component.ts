import { Component } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(public warehouse: WarehouseService) {}
  chooseAnother(dest: string) {
    this.warehouse.showAnother(dest);
  }
  addToCart(
    id: number,
    imgSrc: string,
    name: string,
    price: number,
    quantity: any
  ) {
    if (parseInt(quantity) && quantity > 0) {
      this.warehouse.addProductToCart(
        id,
        imgSrc,
        name,
        price,
        parseInt(quantity)
      );
    } else {
      console.log('not a number'); //Maybe some toast
    }
  }
}
