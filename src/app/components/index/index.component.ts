import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  styleUrls: ['./index.component.css'],
  templateUrl: './index.component.html'
})
export class IndexComponent {
  constructor(public router: Router) { }
}