import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  tryLogin(data : any) {
    let apiurl = "http://localhost:8080/login?email=" + data.email + "&password=" + data.password;
    return this.http.get(apiurl);
  }

}
