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
  hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
  minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
  months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years = [];
  tryouts = this.session.newUser.tryouts ? this.session.newUser.tryouts : [{}];

  ngOnInit() {
    if (!this.session.newUser.teams) {
      this.router.navigate(['/league/register/upload-player']);
    } else {
      for (let i = 10; i < 60; i++) {
        if (i > 16) this.years.push(`20${i}`);
        if (i < 24) this.hours.push(`${i}`);
        if (i < 32) this.days.push(`${i}`);
        this.minutes.push(`${i}`);
      }
    }
  }

  next(): void {
    for (let i = 0; i < this.tryouts.length; i++) {
      this.tryouts[i].date =
        `${this.tryouts[i].yyyy}-` + `${this.tryouts[i].mm}-` + `${this.tryouts[i].dd} ` +
        `${this.tryouts[i].hh}:` + `${this.tryouts[i].min}`;
    }

    this.session.newUser = { tryouts: this.tryouts };
    this.router.navigate(['/league/register/finalize']);
  }
}