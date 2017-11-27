import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../../../../services/http.service';
import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-index',
  styleUrls: ['./index.component.css'],
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  constructor(
    public session: SessionService,
    public router: Router,
    private http: HttpService,
  ) { }

  leagues = [];

  ngOnInit() {
    this.http.get('/leagues')
      .then(data => this.leagues = data)
      .catch(() => { })
  }

  next(): void {
    this.session.newUser.leagueName = this.session.newUser.league.leagueName;
    this.session.newUser.leagueCity = this.session.newUser.league.city;
    this.session.newUser.leagueState = this.session.newUser.league.state;
    this.session.newUser.phoneNumber = `${this.session.newUser.area}-${this.session.newUser.prefix}-${this.session.newUser.line}`;
    this.router.navigate(['/coach/register/history']);
  }
}