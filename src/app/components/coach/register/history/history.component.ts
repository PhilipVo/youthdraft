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

  error = null;

  ngOnInit() {
    if (!(this.session.newUser.firstName &&
      this.session.newUser.lastName &&
      this.session.newUser.birthday &&
      this.session.newUser.gender &&
      this.session.newUser.leagueName &&
      this.session.newUser.leagueCity &&
      this.session.newUser.leagueState &&
      this.session.newUser.email &&
      this.session.newUser.phoneNumber &&
      this.session.newUser.address &&
      this.session.newUser.city &&
      this.session.newUser.state &&
      this.session.newUser.zip))
      this.router.navigate(['/coach/register']);
  }

  register(): void {
    this.session.registerCoach()
      .then(() => this.router.navigate(['/coach/register/complete']))
      .catch(error => this.error = typeof error === 'string' ? error : 'Something went wrong.')
  }
}
