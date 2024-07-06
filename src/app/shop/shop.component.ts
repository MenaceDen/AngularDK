import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../warehouse.service';
import { CategoryComponent } from '../category/category.component';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CategoryComponent, RouterLink, RouterOutlet],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  constructor(public warehouse: WarehouseService, private router: Router) {}
  ngOnInit(): void {
    //console.log(typeof this.warehouse.offer.goods[0].price);
  }
  selCategory(catName: string) {
    this.router.navigate(['/shop', catName]);
    console.log(`parent ${catName}`);
  }
}
