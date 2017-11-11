import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../../../services/http.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpService,
    private router: Router,
    private session: SessionService,
  ) { }

  error = null;
  league = {
    city: '',
    leagueName: '',
    state: ''
  };
  leagues = [];
  user = {
    city: '',
    email: '',
    leagueName: '',
    password: '',
    state: ''
  };

  ngOnInit() {
    this.http.get('/leagues')
      .then(data => this.leagues = data)
      .catch(error => console.log(error))
  }

  submit(): void {
    this.error = null;
    this.user = { ...this.user, ...this.league };
    console.log(this.user)

    this.session.login('coaches', this.user)
      .then(() => this.router.navigate(['league']))
      .catch(error => this.error = typeof error === 'string' ? error : 'Oops, something went wrong.');
  }

}