import { Component, OnInit } from '@angular/core';
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
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.selCategory('simpathy');
  }

  selCategory(catName: string) {
    this.router.navigate(['/shop', catName]);
  }
}
