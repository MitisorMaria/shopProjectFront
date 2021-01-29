import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-bracelets',
  templateUrl: './bracelets.component.html',
  styleUrls: ['./bracelets.component.css']
})
export class BraceletsComponent implements OnInit {

  constructor(private productService : ProductService) { }

  public braceletList : any;

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
  }

}
