import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CartItem } from '../Models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class InMemoryService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let cartItems: CartItem[] = []; // this service is not in use because of interference with json-server
    return { cartItems };
  }
}
