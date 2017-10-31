import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private league = {};

  constructor(
    private location: Location,
    private router: Router,
    private session: SessionService,
  ) { }

  ngOnInit() { }

  back(): void {
    this.location.back();
  }

  login(): void {
    this.session.login('leagues', this.league)
      .then(() => this.router.navigate(['league/dashboard']))
      .catch(error => {
        console.log(error)
      })
  }

}