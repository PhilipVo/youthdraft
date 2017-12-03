import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    private http: HttpClient
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
    
    const formData = new FormData();
    Object.keys(this.session.newUser).map(key => {
      if (key === 'coaches' || key === 'teams' || key === 'players') {
        formData.append(key, this.session.newUser[key], this.session.newUser[key].name);
      } else if (key === 'tryouts') {
        formData.append(key, JSON.stringify(this.session.newUser.tryouts));
      } else formData.append(key, this.session.newUser[key]);
    });

    this.http.post(`https://youthdraft.com/league/register`, formData)
      .subscribe(() => {
        this.session.newUser = null;
        this.router.navigate(['league/register/complete'])
      }, error => {
        this.submitting = false;
        this.error = error.error.message ? error.error.message : 'Something went wrong.'
      });      
  }
}
