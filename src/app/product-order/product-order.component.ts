import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WarehouseService } from '../services/warehouse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-order.component.html',
  styleUrl: './product-order.component.css',
})
export class ProductOrderComponent implements OnInit {
  constructor(
    private warehouseService: WarehouseService,
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
    this.warehouseService.cartItems.length = 0;
    this.warehouseService.quantityToShow = 0;
    this.warehouseService.showOnTheNav(0);
    this.router.navigate(['/home']);
  }
}
