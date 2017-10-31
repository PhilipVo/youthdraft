import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  private coach = {};

  constructor(
    private location: Location,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    console.log('register');
  }

  back(): void {
    this.location.back();
  }

  register(): void {
    this.session.register('coaches', this.coach)
      .then(() => this.router.navigate(['coach/dashboard']))
      .catch(error => {
        console.log(error)
      })
  }

}