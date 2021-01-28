import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  public signedUpSuccessfully : any;

  ngOnInit(): void {
  }

  signupButtonClicked (data : any) {
    //code that calls the signup service
    this.signedUpSuccessfully = true;
  }

  closeAlert() {
    this.signedUpSuccessfully = undefined;
   }

}
