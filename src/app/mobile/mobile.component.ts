import { Component } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  listproducts: Product[] = [
    { id: 1, title: 'TV 1', price: 20, quantity: 10, like: 0, image: "../../assets/image/mobile.png" },
    { id: 2, title: 'TV 2', price: 5, quantity: 0, like: 52, image: "../../assets/image/mobile.png" },
    { id: 3, title: 'TV 3', price: 10, quantity: 20, like: 5, image: "../../assets/image/mobile.png" }
  ]
  afterRecieverData(t: Product) {
    //alert(t)
    let index = this.listproducts.indexOf(t);
    this.listproducts[index].like++;

  }


}
