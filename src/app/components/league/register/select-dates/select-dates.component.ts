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

  tryouts = this.session.newUser.tryouts ? this.session.newUser.tryouts : [{}];

  ngOnInit() {
    if (!this.session.newUser.playerRoster)
      this.router.navigate(['/league/register/upload-player']);
  }

  next(): void {
    console.log('next')
    this.session.newUser = { tryouts: this.tryouts };
    this.router.navigate(['/league/register/finalize']);
  }
}