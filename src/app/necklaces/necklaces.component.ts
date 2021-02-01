import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
//import { Product } from '../Product';

interface Product {
  id: number,
  type: string,
  name: string,
  price: number,
  picPath: string
}

@Component({
  selector: 'app-necklaces',
  templateUrl: './necklaces.component.html',
  styleUrls: ['./necklaces.component.css']
})
export class NecklacesComponent implements OnInit {

  constructor(private productService : ProductService) { }

  public necklaceList : any;
  public addedFav : any;
  public addedCart : any;

  addToCart(data: Product) {
    var old = localStorage.getItem("cartNecklaces");
    if(old === null) old = "";
    var array = old.split(" ");
    if (!array.includes(data.id + "")) {
      localStorage.setItem("cartNecklaces", old + " " + data.id);
    }
    this.addedCart = true;
  }

  addToFavourites(data: Product) {
    var old = localStorage.getItem("favouritesNecklaces");
    if(old === null) old = "";
    var array = old.split(" ");
    if (!array.includes(data.id + "")) {
      localStorage.setItem("favouritesNecklaces", old + " " + data.id);
    }
    this.addedFav = true;
  }

  ngOnInit(): void {
    this.productService.getAllNecklaces().subscribe(
      val => {
        this.necklaceList = val;
      },
      response => {
        alert("Error from necklaces!");
      },
      () => {
      }
    );
    this.addedFav = false;
    this.addedCart = false;
  }

}
