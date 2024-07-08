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
}
