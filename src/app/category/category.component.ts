import { Component, Input, OnInit } from '@angular/core';
import { WarehouseService } from '../warehouse.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  constructor(
    public warehouse: WarehouseService,
    private route: ActivatedRoute
  ) {}
  categName: string = this.route.snapshot.params['category'];

  // ngOnInit(): void {
  //   let name = this.route.snapshot.params['category'];
  //   this.categName = name;
  //   console.log(name);
  //   this.route.params.subscribe((params: Params) => {
  //     this.categName = name;
  //     console.log(this.categName);
  //   });
  // }
}
