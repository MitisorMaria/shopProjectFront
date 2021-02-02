import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrdersByUserId (userId:any) {
    let apiurl="http://localhost:8080/orders?userId=" + userId;
    return this.http.get(apiurl);
  }

  addOrder(data: any) {
    let apiurl="http://localhost:8080/orders";
    return this.http.post(apiurl, data);
  }
}
