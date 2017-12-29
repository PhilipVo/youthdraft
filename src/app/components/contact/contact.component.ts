import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  styleUrls: ['./contact.component.css'],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  constructor(
    private http: HttpClient,
    public router: Router
  ) { }
  
  feedback: any = {};
  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  submitted = false;
  
  submit(): void {
    this.http.post(`https://youthdraft.com/contact/send`, this.feedback, this.options)
      .subscribe(() => this.submitted = true);
  }
}