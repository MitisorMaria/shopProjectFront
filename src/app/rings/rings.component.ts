import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

interface Product {
  id: number,
  type: string,
  name: string,
  price: number,
  picPath: string
}

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.css']
})
export class RingsComponent implements OnInit {

  constructor(private productService : ProductService) { }

  public ringList : any;
  public addedFav : any;
  public addedCart : any;
  
  addToCart(data: Product) {
    var old = localStorage.getItem("cartRings");
    if(old === null) old = "";
    var array = old.split(" ");
    if (!array.includes(data.id + "")) {
      localStorage.setItem("cartRings", old + " " + data.id);
    }
    this.addedCart = true;
  }

  addToFavourites(data: Product) {
    var old = localStorage.getItem("favouritesRings");
    if(old === null) old = "";
    var array = old.split(" ");
    if (!array.includes(data.id + "")) {
      localStorage.setItem("favouritesRings", old + " " + data.id);
    }
    this.addedFav = true;
  }

  ngOnInit(): void {
    this.productService.getAllRings().subscribe(
      val => {
        this.ringList = val;
      },
      response => {
        alert("Error from rings!");
      },
      () => {
      }
    );
    this.addedFav = false;
    this.addedCart = false;
  }

}
