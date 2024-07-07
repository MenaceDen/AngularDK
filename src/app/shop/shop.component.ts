import { Component } from '@angular/core';

import { CategoryComponent } from '../category/category.component';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CategoryComponent, RouterLink, RouterOutlet],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  constructor(private router: Router) {}

  selCategory(catName: string) {
    this.router.navigate(['/shop', catName]);
  }
}
