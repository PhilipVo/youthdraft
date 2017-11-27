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
    public session: SessionService,
    public router: Router,
  ) { }

  next(): void {
    this.session.newUser.phoneNumber = `${this.session.newUser.area}-${this.session.newUser.prefix}-${this.session.newUser.line}`;
    this.router.navigate(['/league/register/upload-coach']);
  }

}