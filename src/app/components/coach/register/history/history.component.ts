import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    if (!(this.session.newUser.firstName &&
      this.session.newUser.lastName &&
      this.session.newUser.leagueName &&
      this.session.newUser.email &&
      this.session.newUser.phoneNumber &&
      this.session.newUser.city &&
      this.session.newUser.state))
      this.router.navigate(['/coach/register']);
  }

  register(): void {
    this.router.navigate(['/coach/register/complete']);
  }
}
