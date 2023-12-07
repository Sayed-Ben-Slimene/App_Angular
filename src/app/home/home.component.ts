import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = "welcome 4SAE5"
  @Output() notif = new EventEmitter()
  color = "";
  price: number = 5;
  listproducts: Product[] = [
    { id: 1, title: 'produit1', price: 20, quantity: 10, like: 0, image: "" },
    { id: 2, title: 'produit2', price: 5, quantity: 0, like: 52, image: "" },
    { id: 3, title: 'produit3', price: 10, quantity: 20, like: 5, image: "" }
  ]

  sendDataToFather() {
    this.notif.emit('bonjour');
  }

  home() {

    alert("hello");
  }


  incrime(i: number) {
    this.listproducts[i].like++;
  }
  buy(i: number) {
    this.listproducts[i].quantity--;
  }



}


