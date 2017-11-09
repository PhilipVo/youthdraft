import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
    private location: Location,
    private router: Router,
    private session: SessionService,
  ) { }

  private user = {};
  private leagues = []

  ngOnInit() {
    this.http.get('/leagues')
      .then(data => this.leagues = data)
      .catch(error => console.log(error))
  }

  back(): void {
    this.location.back();
  }

  get diagnostic() { return JSON.stringify(this.user); }

  login(): void {
    // this.session.login('leagues', this.user)
    //   .then(() => this.router.navigate(['league/dashboard']))
    //   .catch(error => {
    //     console.log(error)
    //   })
  }

}