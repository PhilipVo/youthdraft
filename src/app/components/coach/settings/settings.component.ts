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
    public session: SessionService,
    private http: HttpClient,
  ) { }

  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  
  coach: any = {};
  password: any = {};

  accountError = null;
  accountSuccess = false;
  passwordError = null;
  passwordSuccess = false;

  ngOnInit() {
    this.http.get<any>('https://youthdraft.com/api/coaches')
      .subscribe(data => {
        try {
          const number = data.phoneNumber.split('-');
          data.area = number[0];
          data.prefix = number[1];
          data.line = number[2];
          data.birthday = data.birthday.substring(0, 10);
        } catch (error) { }
        this.coach = data;
      });
  }

  updateCoach() {
    this.accountError = null;
    this.accountSuccess = false;

    this.coach.phoneNumber = `${this.coach.area}-${this.coach.prefix}-${this.coach.line}`;
    this.http.put(`https://youthdraft.com/api/coaches/${this.session.id}`, this.coach)
      .subscribe(() => this.accountSuccess = true,
        error => this.accountError = error.error.message ? error.error.message : 'Something went wrong.')
  }

  updatePassword() {
    this.passwordError = null;
    this.passwordSuccess = null;
    
    this.http.post(`https://youthdraft.com/api/coaches/password`, this.password)
      .subscribe(() => this.passwordSuccess = true,
        error => this.passwordError = error.error.message ? error.error.message : 'Something went wrong.')
  }
}
