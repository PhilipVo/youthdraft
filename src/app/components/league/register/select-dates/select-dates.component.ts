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
    private router: Router,
    private session: SessionService
  ) { }

  dates = this.session.newUser.dates ? this.session.newUser.dates : [{}];

  ngOnInit() {
    if (!this.session.newUser.playerRoster)
      this.router.navigate(['/league/register/upload-player']);
  }

  next(): void {
    this.session.newUser = { dates: this.dates };
    this.router.navigate(['/league/register/finalize']);
  }
}