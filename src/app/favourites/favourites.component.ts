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
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private productService : ProductService) { this.productList = new Array<Product>(); }

  public productList: Array<Product>;
  
  getArrayOfProductsFromStoredString(s: string, type: string) {
      this.productService.getProductsByTypeAndIds(type, s).subscribe(
        val => {
          let returnedArray = <Array<Product>>val;
          for (let i=0; i<returnedArray.length; i++) {
            this.productList.push(<Product>returnedArray[i]);
          }
        },
        response => {
          alert("Error!");
        },
        () => {
        }
      );
    }
  

  ngOnInit(): void {
    
    let storedStr: any;
    if (localStorage.getItem("favouritesNecklaces") != null) {
      storedStr = localStorage.getItem("favouritesNecklaces");
      this.getArrayOfProductsFromStoredString(storedStr, "NECKLACE");
    }

    if (localStorage.getItem("favouritesBracelets") != null) {
      storedStr = localStorage.getItem("favouritesBracelets");
      this.getArrayOfProductsFromStoredString(storedStr, "BRACELET");
    }

    if (localStorage.getItem("favouritesRings") != null) {
      storedStr = localStorage.getItem("favouritesRings");
      this.getArrayOfProductsFromStoredString(storedStr, "RING");
    }
  }

  addToCart(data: Product){
    switch (data.type) {
      case "NECKLACE":
        var old = localStorage.getItem("cartNecklaces");
        if(old === null) old = "";
        var array = old.split(" ");
        if (!array.includes(data.id + "")) {
          localStorage.setItem("cartNecklaces", old + " " + data.id);
        }
        break;
      case "BRACELET":
        var old = localStorage.getItem("cartBracelets");
        if(old === null) old = "";
        var array = old.split(" ");
        if (!array.includes(data.id + "")) {
          localStorage.setItem("cartBracelets", old + " " + data.id);
        }
        break;
      case "RING":
        var old = localStorage.getItem("cartRings");
        if(old === null) old = "";
        var array = old.split(" ");
        if (!array.includes(data.id + "")) {
          localStorage.setItem("cartRings", old + " " + data.id);
        }
        break;
    }    
    this.removeFromFavourites(data);
  }

  removeFromFavourites(data : Product) {
    let storedStr: string;
    switch(data.type) {
        case "NECKLACE":
          storedStr = <string>localStorage.getItem("favouritesNecklaces");
          storedStr = storedStr.replace(data.id.toString(), "");
          localStorage.setItem("favouritesNecklaces", storedStr);
          location.reload();
          break;
        case "BRACELET":
          storedStr = <string>localStorage.getItem("favouritesBracelets");
          storedStr = storedStr.replace(data.id.toString(), "");
          localStorage.setItem("favouritesBracelets", storedStr);
          location.reload();
          break;
        case "RING":
          storedStr = <string>localStorage.getItem("favouritesRings");
          storedStr = storedStr.replace(data.id.toString(), "");
          localStorage.setItem("favouritesRings", storedStr);
          location.reload();
          break;
        default:
          alert("No favourites!");
    }

    
  }
}
