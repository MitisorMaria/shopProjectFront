import { render } from 'creditcardpayments/creditCardPayments';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private orderService: OrderService) { 
    render(
      {
        id: "#myPaypalButtons",
        currency: "USD",
        value: <string>localStorage.getItem("total"),
        onApprove: (details) => {
          this.placeOrder();
        }
      }
    );
  }

  public total: any;
  public orderAddedSuccessfully: any;

  ngOnInit(): void {
    this.total = localStorage.getItem("total");
  }


  convertUTCDateToLocalDate(date : Date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
}


  placeOrder() {
    let orderDate = this.convertUTCDateToLocalDate(new Date());
    let data = {
      "total": this.total.toString(),
      "userId": localStorage.getItem("userId"),
      "dateTime": orderDate,
      "status": "PENDING"
    }
    this.orderService.addOrder(data).subscribe(
      val => {
        this.orderAddedSuccessfully = true;
        localStorage.removeItem("cartBracelets");
        localStorage.removeItem("cartRings");
        localStorage.removeItem("cartNecklaces");
      },
      response => {
        this.orderAddedSuccessfully = false;
      },
      () => {
      }
    );
  }

  closeAlert() {
    this.orderAddedSuccessfully = undefined;
   }

}
