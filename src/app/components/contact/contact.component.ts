import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  styleUrls: ['./contact.component.css'],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  constructor(public router: Router) { }

  contact: any = {};
  submitted = false;
  
  submit(): void {
    this.submitted = true;
  }
}