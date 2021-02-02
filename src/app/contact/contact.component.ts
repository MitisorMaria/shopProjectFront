import { Component, OnInit } from '@angular/core';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  public emailSuccessfullySent : any;

  sendButtonClicked(data : any) {
    this.emailService.sendEmail(data).subscribe(
      val => {
        this.emailSuccessfullySent = true;
      },
      response => {
        this.emailSuccessfullySent = false;
      },
      () => {
      }
 )
  }

  ngOnInit(): void {
  }


  closeAlert() {
    this.emailSuccessfullySent = undefined;
   }
}
