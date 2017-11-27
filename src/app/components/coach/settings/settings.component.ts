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
    public session: SessionService,
    private http: HttpService,
  ) { }

  coach: any = {};
  password: any = {};

  accountError = null;
  accountSuccess = false;
  passwordError = null;
  passwordSuccess = false;

  ngOnInit() {
    this.http.get('/api/coaches')
      .then(data => {
        try {
          const number = data.phoneNumber.split('-');
          data.area = number[0];
          data.prefix = number[1];
          data.line = number[2];
          data.birthday = data.birthday.substring(0, 10);
        } catch (error) { }
        this.coach = data;
      }).catch(() => { });
  }

  updateCoach() {
    this.accountError = null;
    this.accountSuccess = false;

    this.coach.phoneNumber = `${this.coach.area}-${this.coach.prefix}-${this.coach.line}`;
    this.http.put(`/api/coaches/${this.session.id}`, this.coach)
      .then(() => this.accountSuccess = true)
      .catch(error => this.accountError = typeof error === 'string' ? error : 'Something went wrong.');
  }

  updatePassword() {
    this.passwordError = null;
    this.passwordSuccess = null;

    this.http.post(`/api/coaches/password`, this.password)
      .then(() => this.passwordSuccess = true)
      .catch(error => this.passwordError = typeof error === 'string' ? error : 'Something went wrong.');
  }
}
