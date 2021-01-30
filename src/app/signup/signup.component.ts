import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService : UserService) { }

  public signedUpSuccessfully : any;

  ngOnInit(): void {
  }

  signupButtonClicked (data : any) {
    //code that calls the signup service
    this.userService.createUser(data).subscribe (
      val => {
        this.signedUpSuccessfully = true;
      },
      response => {
        alert("Error creating user!");
        this.signedUpSuccessfully = false;
      },
      () => {
      }
    );
  }

  closeAlert() {
    this.signedUpSuccessfully = undefined;
   }

}
