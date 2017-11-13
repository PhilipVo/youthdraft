import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-index',
  styleUrls: ['./index.component.css'],
  templateUrl: './index.component.html'
})
export class IndexComponent {
  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  next(): void {
    this.router.navigate(['/coach/register/history']);
  }
}