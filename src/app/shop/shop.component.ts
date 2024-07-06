import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  constructor(public warehouse: WarehouseService) {}
  ngOnInit(): void {
    console.log(this.warehouse.offer.goods[0]);
  }
}
