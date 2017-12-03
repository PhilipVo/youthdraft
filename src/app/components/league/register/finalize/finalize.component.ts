import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.css']
})
export class FinalizeComponent implements OnInit {
  constructor(
    public session: SessionService,
    public router: Router,
  ) { }

  error = null;
  submitting = false;
  tryouts = [];

  ngOnInit() {
    if (!this.session.newUser.tryouts ||
      this.session.newUser.tryouts.length < 1 ||
      !this.session.newUser.tryouts[0].date ||
      !this.session.newUser.tryouts[0].address)
      this.router.navigate(['/league/register/select-dates']);
    else this.tryouts = this.session.newUser.tryouts.map(tryout =>
      moment(tryout.date).format('MMMM Do YYYY, h:mm:ss a'));
  }

  register(): void {
    this.submitting = true;
    this.session.registerLeague()
      .then(() => this.router.navigate(['league/register/complete']))
      .catch(error => {
        this.submitting = false;
        this.error = typeof error === 'string' ? error : 'Something went wrong.';
      })
  }
}
