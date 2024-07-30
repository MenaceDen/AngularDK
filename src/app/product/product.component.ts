import { Component } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { RouterLink } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(
    public warehouse: WarehouseService,
    public shoppingCartService: ShoppingCartService
  ) {}
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
    if (!this.shoppingCartService.cartItems.map((e) => e.id).includes(id)) {
      if (parseInt(quantity) && quantity > 0) {
        this.shoppingCartService.addProductToCart(
          id,
          imgSrc,
          name,
          price,
          parseInt(quantity)
        );
      } else {
        console.log('not a number'); //Maybe some toast
      }
    } else {
      const pos = this.shoppingCartService.cartItems
        .map((e) => e.id)
        .indexOf(id);
      let newQuantity =
        this.shoppingCartService.cartItems[pos].quantity + parseInt(quantity);
      this.shoppingCartService.addQuantity(
        this.shoppingCartService.cartItems[pos],
        newQuantity
      );
    }
  }
}
