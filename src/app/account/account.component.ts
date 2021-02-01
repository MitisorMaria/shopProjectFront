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
    const userID = parseInt(<string>localStorage.getItem("userID"), 10);
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
    //code that calls the signup service
    this.userService.updateUser(data).subscribe (
      val => {
        this.updatedSuccessfully = true;
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
