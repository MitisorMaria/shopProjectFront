import { Component, OnInit } from '@angular/core';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public emailSuccessfullySent : any;

  sendButtonClicked(data : any) {
    alert(data);
    this.emailSuccessfullySent = true;
  }

  ngOnInit(): void {
  }


  closeAlert() {
    this.emailSuccessfullySent = undefined;
   }
}
