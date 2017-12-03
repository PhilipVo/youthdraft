import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  constructor(
    public session: SessionService,
    public router: Router,
    private http: HttpClient
  ) { }

  error = null;
  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

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
    this.http.post('https://youthdraft.com/coaches/register', this.session.newUser, this.options)
      .subscribe(() => {
        this.session.newUser = null;
        this.router.navigate(['/coach/register/complete']);
      }, error => this.error = error.error.message ? error.error.message : 'Something went wrong.');
  }
}
