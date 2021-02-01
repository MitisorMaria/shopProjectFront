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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService : ProductService) { this.productList = new Array<Product>(); }

  public productList: Array<Product>;
  public total: any;
  
  getArrayOfProductsFromStoredString(s: string, type: string) {
      this.productService.getProductsByTypeAndIds(type, s).subscribe(
        val => {
          let returnedArray = <Array<Product>>val;
          for (let i=0; i<returnedArray.length; i++) {
            this.productList.push(<Product>returnedArray[i]);
            this.total += (<Product>returnedArray[i]).price;
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
    this.total = 0;
    let storedStr: any;
    if (localStorage.getItem("cartNecklaces") != null) {
      storedStr = localStorage.getItem("cartNecklaces");
      this.getArrayOfProductsFromStoredString(storedStr, "NECKLACE");
    }

    if (localStorage.getItem("cartBracelets") != null) {
      storedStr = localStorage.getItem("cartBracelets");
      this.getArrayOfProductsFromStoredString(storedStr, "BRACELET");
    }

    if (localStorage.getItem("cartRings") != null) {
      storedStr = localStorage.getItem("cartRings");
      this.getArrayOfProductsFromStoredString(storedStr, "RING");
    }
  }


  removeFromCart(data : Product) {
    let storedStr: string;
    switch(data.type) {
        case "NECKLACE":
          storedStr = <string>localStorage.getItem("cartNecklaces");
          storedStr = storedStr.replace(data.id.toString(), "");
          localStorage.setItem("cartNecklaces", storedStr);
          location.reload();
          break;
        case "BRACELET":
          storedStr = <string>localStorage.getItem("cartBracelets");
          storedStr = storedStr.replace(data.id.toString(), "");
          localStorage.setItem("cartBracelets", storedStr);
          location.reload();
          break;
        case "RING":
          storedStr = <string>localStorage.getItem("cartRings");
          storedStr = storedStr.replace(data.id.toString(), "");
          localStorage.setItem("cartRings", storedStr);
          location.reload();
          break;
        default:
          alert("No items!");
    }

    
  }

  checkout() {
    
    alert("checkout");
  }
}
