import { Component } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(public warehouse: WarehouseService) {}
}
