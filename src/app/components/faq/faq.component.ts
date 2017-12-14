import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  styleUrls: ['./faq.component.css'],
  templateUrl: './faq.component.html'
})
export class FAQComponent {
  constructor(public router: Router) { }
}