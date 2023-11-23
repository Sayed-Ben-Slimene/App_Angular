import { Component } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  home() {

    alert("hello");
  }


  incrime(i: number) {
    this.products[i].like++;
  }
  buy(i: number) {
    this.products[i].quantity--;
  }
  color = "gray";
  products: Product[] = [{ id: 1, title: 'product1', price: 20, quantity: 20, like: 10 }, { id: 2, title: 'product2', price: 50, quantity: 20, like: 10 }, { id: 3, title: 'product3', price: 20, quantity: 20, like: 20 }]


  price !: number;



}


