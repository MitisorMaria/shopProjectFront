import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ProductService } from '../product.service';
interface Product {
  id: number,
  type: string,
  name: string,
  price: number,
  picPath: string
}


interface User {
  name: string;
  surname: string;
  email: string;
  address: string;
  telephoneNo: string;
  password: string;
  id: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private loginService : LoginService, private productService : ProductService) { this.productList = new Array<Product>(); }

  public productList: Array<Product>;
  public total: any;
  public loggedIn: any;
  
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

    if (localStorage.getItem("user") != null) {
      this.loggedIn = true;
    } else this.loggedIn = false;

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
    localStorage.setItem("total", this.total.toString());
  }

  loginButtonClicked (data : any) {
    this.loginService.tryLogin(data).subscribe(
      val => {
        this.loggedIn = true;
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("user", (<User>val).name + " " + (<User>val).surname);
        localStorage.setItem("userId", (<User>val).id.toString());
        
        location.reload();
      },
      response => {
        this.loggedIn = false;
      },
      () => {
      }
    );
  }
}
