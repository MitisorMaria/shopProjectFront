import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  

  constructor(private loginService : LoginService) { }

  public loggedIn : any;
  public valueToDisplay : any;
  public userID: any;

  ngOnInit(): void {
    if (localStorage.getItem("user") != null) {
      this.valueToDisplay = localStorage.getItem("user");
      this.loggedIn = true;      
    } else {
      this.valueToDisplay = "Login";
    }

    if(localStorage.getItem("userId") != null) {
      this.userID = localStorage.getItem("userId");
    }

    
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("loggedIn");
    this.loggedIn = false;

    this.userID = undefined;
    location.reload();    
  }

  loginButtonClicked (data : any) {
    this.loginService.tryLogin(data).subscribe(
      val => {
        if (val!=null) {
          this.loggedIn = true;
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("user", (<User>val).name + " " + (<User>val).surname);
          localStorage.setItem("userId", (<User>val).id.toString());
          location.reload();
        } else {
          this.loggedIn = false;
        }              
      },
      response => {
        this.loggedIn = false;
        this.valueToDisplay = "Login";
      },
      () => {
      }
    );
  }

}
