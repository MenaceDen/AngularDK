import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  constructor(
    public warehouse: WarehouseService,
    private route: ActivatedRoute
  ) {}
  categName?: string;
  ngOnInit(): void {
    this.routeChanged(this.route.snapshot.params['category']);
    this.route.params.subscribe((params: Params) => {
      this.routeChanged(params['category']);
    });
  }
  routeChanged(name: string) {
    this.categName = name;
  }
  chooseProduct(productId: number) {
    this.warehouse.showProduct(productId);
  }
}
