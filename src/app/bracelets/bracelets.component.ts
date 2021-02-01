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
  selector: 'app-bracelets',
  templateUrl: './bracelets.component.html',
  styleUrls: ['./bracelets.component.css']
})
export class BraceletsComponent implements OnInit {

  constructor(private productService : ProductService) { }

  public braceletList : any;
  public addedFav : any;
  public addedCart : any;

  addToCart(data: Product) {
    var old = localStorage.getItem("cartBracelets");
    if(old === null) old = "";
    var array = old.split(" ");
    if (!array.includes(data.id + "")) {
      localStorage.setItem("cartBracelets", old + " " + data.id);
    }
    this.addedCart = true;
  }

  addToFavourites(data: Product) {
    var old = localStorage.getItem("favouritesBracelets");
    if(old === null) old = "";
    var array = old.split(" ");
    if (!array.includes(data.id + "")) {
      localStorage.setItem("favouritesBracelets", old + " " + data.id);
    }
    this.addedFav = true;
  }

  ngOnInit(): void {
    this.productService.getAllBracelets().subscribe(
      val => {
        this.braceletList = val;
      },
      response => {
        alert("Error from bracelets!");
      },
      () => {
      }
    );
    this.addedFav = false;
    this.addedCart = false;
  }

  

}
