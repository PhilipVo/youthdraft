import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(
    public session: SessionService,
    public router: Router,
    private http: HttpClient,
  ) { }

  error = null;
  leagues = [];
  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  user: any = {};

  ngOnInit() {
    this.http.get<any>('https://youthdraft.com/leagues')
      .subscribe(data => this.leagues = data)
  }

  submit(): void {
    this.error = null;
    this.user = { ...this.user, ...this.user.league };

    this.http.post<any>(`https://youthdraft.com/coaches/login`, this.user, this.options)
      .subscribe(youthdraftToken => {
        Cookie.set('youthdraftToken', youthdraftToken, undefined, '/');
        this.session.setSession();
        this.router.navigate(['/coach/players'])
      }, error => this.error = error.error.message ? error.error.message : 'Something went wrong.');
  }

}