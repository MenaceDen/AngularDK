import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-product-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-order.component.html',
  styleUrl: './product-order.component.css',
})
export class ProductOrderComponent implements OnInit {
  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}
  orderForm!: FormGroup;
  ngOnInit(): void {
    this.orderForm = new FormGroup({
      nameField: new FormControl(null, Validators.required),
      surnameField: new FormControl(null, Validators.required),
      emailField: new FormControl(null, [
        Validators.email,
        Validators.required,
      ]),
      phoneField: new FormControl(null, Validators.required),
      addressField: new FormControl(null, Validators.required),
      commentField: new FormControl(null),
      paymentField: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    console.log(this.orderForm);
    if (this.shoppingCartService.cartItems) {
      this.shoppingCartService.cartItems.forEach((item) => {
        this.shoppingCartService.delFromCart(item.id);
      });
    }
    this.router.navigate(['/home']);
  }
}
