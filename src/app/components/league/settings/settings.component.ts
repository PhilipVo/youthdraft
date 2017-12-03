import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public session: SessionService
  ) { }

  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  league: any = {};
  password: any = {};

  accountError = null;
  accountSuccess = false;
  passwordError = null;
  passwordSuccess = false;

  ngOnInit() {
    this.http.get<any>('https://youthdraft.com/api/league')
      .subscribe(data => {
        try {
          const number = data.phoneNumber.split('-');
          data.area = number[0];
          data.prefix = number[1];
          data.line = number[2];
          data.birthday = data.birthday.substring(0, 10);
        } catch (error) { }
        this.league = data;
      });
  }

  updateLeague() {
    this.accountError = null;
    this.accountSuccess = false;

    this.league.phoneNumber = `${this.league.area}-${this.league.prefix}-${this.league.line}`;

    this.http.put(`https://youthdraft.com/api/league`, this.league, this.options)
      .subscribe(() => this.accountSuccess = true,
        error => this.accountError = error.error.message ? error.error.message : 'Something went wrong.')
  }

  updatePassword() {
    this.passwordError = null;
    this.passwordSuccess = false;

    this.http.put(`https://youthdraft.com/api/league/password`, this.password, this.options)
      .subscribe(() => this.passwordSuccess = true, 
        error => this.passwordError = error.error.message ? error.error.message : 'Something went wrong.')
  }
}
