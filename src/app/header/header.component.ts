import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WarehouseService } from '../services/warehouse.service';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(
    private warehouseService: WarehouseService,
    public loginService: LoginService
  ) {}
  numb: number = 0;
  ngOnInit(): void {
    this.warehouseService.showBadgeNumber.subscribe({
      next: (digit: any) => {
        if (!digit) {
          this.numb = 0;
        } else {
          this.numb = digit;
        }
      },
      error: (err: Error) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
