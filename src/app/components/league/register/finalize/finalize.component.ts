import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.css']
})
export class FinalizeComponent implements OnInit {
  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  dates = [];

  ngOnInit() {
    if (!this.session.newUser.dates ||
      this.session.newUser.dates.length < 1 ||
      !this.session.newUser.dates[0].date ||
      !this.session.newUser.dates[0].address)
      this.router.navigate(['/league/register/select-dates']);
    else this.dates = this.session.newUser.dates.map(date =>
      moment(date.date).format('MMMM Do YYYY, h:mm:ss a'));
  }

  register(): void {
    this.session.register('league')
      .then(() => this.router.navigate(['league/register/complete']))
      .catch(error => {
        console.log(error)
      })
  }
}
