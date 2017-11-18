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
    private session: SessionService
  ) { }

  league = {};
  password = {};

  accountError = null;
  accountSuccess = false;
  passwordError = null;
  passwordSuccess = false;

  ngOnInit() {
    this.http.get('/api/league')
      .then(data => this.league = data)
      .catch(() => { });
  }

  updateLeague() {
    this.accountError = null;
    this.accountSuccess = false;

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
