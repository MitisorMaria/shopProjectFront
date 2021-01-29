import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getAllNecklaces() {
    let apiurl = "http://localhost:8080/NECKLACE";
    return this.http.get(apiurl);
  }

  getAllBracelets() {
    let apiurl = "http://localhost:8080/BRACELET";
    return this.http.get(apiurl);
  }

  getAllRings() {
    let apiurl = "http://localhost:8080/RING";
    return this.http.get(apiurl);
  }
}
