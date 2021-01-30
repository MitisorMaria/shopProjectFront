import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  createUser(data : any) {
    let apiurl = "http://localhost:8080/users";
    return this.http.post(apiurl, data);
  }
}
