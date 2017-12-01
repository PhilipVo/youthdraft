import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-tryouts',
  templateUrl: './tryouts.component.html',
  styleUrls: ['./tryouts.component.css']
})
export class TryoutsComponent implements OnInit {
  constructor(private http: HttpService) { }

  days = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
  minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
  months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years = [];

  error = null;
  success = false;
  tryouts = [];

  ngOnInit() {
    const exp = new RegExp(['\\\-', ' ', 'T', ':'].join('|'), 'g');
    
    for (let i = 10; i < 60; i++) {
      if (i > 16) this.years.push(`20${i}`);
      if (i < 24) this.hours.push(`${i}`);
      if (i < 32) this.days.push(`${i}`);
      this.minutes.push(`${i}`);
    }

    this.http.get('/api/tryouts')
      .then(tryouts => {
        this.tryouts = tryouts.map(tryout => {
          const tokens = tryout.date.split(exp);
          tryout.date = tryout.date.substring(0, 16);
          tryout.yyyy = tokens[0];
          tryout.mm = tokens[1];
          tryout.dd = tokens[2];
          tryout.hh = tokens[3];
          tryout.min = tokens[4];
          return tryout;
        });
      }).catch(() => { });
  }

  submit() {
    this.error = null;
    this.success = false;

    for (let i = 0; i < this.tryouts.length; i++) {
      this.tryouts[i].date =
        `${this.tryouts[i].yyyy}-` + `${this.tryouts[i].mm}-` + `${this.tryouts[i].dd} ` +
        `${this.tryouts[i].hh}:` + `${this.tryouts[i].min}`;
    }

    this.http.post('/api/tryouts', { tryouts: this.tryouts })
      .then(() => this.success = true)
      .catch(error => this.error = typeof error === 'string' ? error : 'Something went wrong.');
  }
}