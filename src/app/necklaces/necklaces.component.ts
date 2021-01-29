import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-necklaces',
  templateUrl: './necklaces.component.html',
  styleUrls: ['./necklaces.component.css']
})
export class NecklacesComponent implements OnInit {

  constructor(private productService : ProductService) { }

  public necklaceList : any;

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
  }

}
