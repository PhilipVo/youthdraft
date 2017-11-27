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
    public session: SessionService,
    private http: HttpService,
    public router: Router
  ) { }

  error = null;
  leagues = [];
  user: any = {};

  ngOnInit() {
    this.http.get('/leagues')
      .then(data => this.leagues = data)
      .catch(() => { })
  }

  submit(): void {
    this.error = null;
    this.user = { ...this.user, ...this.user.league };

    this.session.login('coaches', this.user)
      .then(() => this.router.navigate(['/coach/players']))
      .catch(error => this.error = typeof error === 'string' ? error : 'Oops, something went wrong.');
  }

}