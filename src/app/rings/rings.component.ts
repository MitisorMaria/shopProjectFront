import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.css']
})
export class RingsComponent implements OnInit {

  constructor(private productService : ProductService) { }

  public ringList : any;

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
  }

}
