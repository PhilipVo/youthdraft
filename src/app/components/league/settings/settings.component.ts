import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../services/http.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor(
    private http: HttpService,
    public session: SessionService
  ) { }

  league: any = {};
  password: any = {};

  accountError = null;
  accountSuccess = false;
  passwordError = null;
  passwordSuccess = false;

  ngOnInit() {
    this.http.get('/api/league')
      .then(data => {
        try {
          const number = data.phoneNumber.split('-');
          data.area = number[0];
          data.prefix = number[1];
          data.line = number[2];
          data.birthday = data.birthday.substring(0, 10);
        } catch (error) { }
        this.league = data;
      }).catch(() => { });
  }

  updateLeague() {
    this.accountError = null;
    this.accountSuccess = false;

    this.league.phoneNumber = `${this.league.area}-${this.league.prefix}-${this.league.line}`;

    this.http.put(`/api/league`, this.league)
      .then(() => this.accountSuccess = true)
      .catch(error => this.accountError = typeof error === 'string' ? error : 'Something went wrong.');
  }

  updatePassword() {
    this.passwordError = null;
    this.passwordSuccess = false;

    this.http.put(`/api/league/password`, this.password)
      .then(() => this.passwordSuccess = true)
      .catch(error => this.passwordError = typeof error === 'string' ? error : 'Something went wrong.');
  }
}
