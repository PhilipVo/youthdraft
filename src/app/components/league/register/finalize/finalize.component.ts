import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.css']
})
export class FinalizeComponent implements OnInit {
  data = {
    firstName: 'Chris',
    lastName: 'Thompson',
    email: 'chris@youthdraft.com',
    leagueName: 'Diablo Valley Little League',
    dates: [
      { date: moment().format('MMMM Do YYYY, h:mm:ss a') },
      { date: moment().format('MMMM Do YYYY, h:mm:ss a') },
      { date: moment().format('MMMM Do YYYY, h:mm:ss a') },
      { date: moment().format('MMMM Do YYYY, h:mm:ss a') }
    ]
  };
  screen = 0;

  constructor(
    private location: Location,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() { }

  back(): void {
    this.location.back();
  }

  register(): void {
    this.router.navigate(['/league/register/complete']);
    // this.session.register('leagues', this.league)
    //   .then(() => this.router.navigate(['league/dashboard']))
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
}
