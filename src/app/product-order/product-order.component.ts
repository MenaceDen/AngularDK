import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-order',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-order.component.html',
  styleUrl: './product-order.component.css',
})
export class ProductOrderComponent {}
