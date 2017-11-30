import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-select-dates',
  templateUrl: './select-dates.component.html',
  styleUrls: ['./select-dates.component.css']
})
export class SelectDatesComponent implements OnInit {
  constructor(
    public session: SessionService,
    public router: Router,
  ) { }

  days = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  hours = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  minutes = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  seconds = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  years = [];
  tryouts = this.session.newUser.tryouts ? this.session.newUser.tryouts : [{}];

  ngOnInit() {
    // if (!this.session.newUser.teams) {
    //   //   this.router.navigate(['/league/register/upload-player']);
    // } else {
      for (let i = 10; i < 61; i++) {
        if (i < 32) this.days.push(`${i}`)
        if (i >16) this.years.push(`20${i}`)
        this.minutes.push(`${i}`);
        this.seconds.push(`${i}`);
      }
    // }
  }

  next(): void {
    this.session.newUser = { tryouts: this.tryouts };
    this.router.navigate(['/league/register/finalize']);
  }
}