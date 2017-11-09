import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-select-dates',
  templateUrl: './select-dates.component.html',
  styleUrls: ['./select-dates.component.css']
})
export class SelectDatesComponent implements OnInit {
  dates = [{}, {}, {}, {}, {}, {}, {}, {}];
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
    this.router.navigate(['/league/register/finalize']);
    // this.session.register('leagues', this.league)
    //   .then(() => this.router.navigate(['league/dashboard']))
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
}