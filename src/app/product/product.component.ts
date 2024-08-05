import { Component, ViewChild } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { RouterLink } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, LoginModalComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(
    public warehouse: WarehouseService,
    public shoppingCartService: ShoppingCartService,
    private toastr: ToastrService,
    private loginService: LoginService
  ) {}
  @ViewChild(LoginModalComponent) modal?: LoginModalComponent;
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
    if (this.loginService.isLoggedIn) {
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
          this.toastr.warning('Enter positive number!', 'Oops!');
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
    } else {
      this.showModal();
    }
  }
  showModal() {
    this.modal?.openModal();
  }
}
