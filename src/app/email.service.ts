import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiurl = 'http://localhost:8080/email';

  constructor(private http: HttpClient) { }


  sendEmail(data: any) {
      return this.http.post(this.apiurl, data);
  }

}