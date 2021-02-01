import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

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
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService : UserService) { 
  }

  public updatedSuccessfully : any;
  public user: any;
  
  

  ngOnInit(): void {
    //const routeParams = this.route.snapshot.paramMap;
    //const userIDFromRoute = String(routeParams.get('id'));
    const userID = parseInt(<string>localStorage.getItem("userId"), 10);
    this.userService.getUserById(userID).subscribe (
      val => {        
        this.user = val;
      },
      response => {
        alert("Error getting user");
        this.updatedSuccessfully = false;
      },
      () => {
      }
    );

  }

  updateButtonClicked (data : any) {
    let user = <User>data;
    if (user.name == null || user.name === "") user.name = this.user.name;
    if (user.surname == null || user.surname === "") user.surname = this.user.surname;
    if (user.email == null || user.email === "") user.email = this.user.email;
    if (user.address == null || user.address === "") user.address = this.user.address;
    if (user.telephoneNo == null || user.telephoneNo === "") user.telephoneNo = this.user.telephoneNo;
    if (user.id == null) user.id = this.user.id;
    if (user.password == null || user.password === "") user.password = this.user.password;

    this.userService.updateUser(user).subscribe (
      val => {
        this.updatedSuccessfully = true;
        this.user=user;
      },
      response => {
        alert("Error updating user!");
        this.updatedSuccessfully = false;
      },
      () => {
      }
    );
  }

  closeAlert() {
    this.updatedSuccessfully = undefined;
   }

}
