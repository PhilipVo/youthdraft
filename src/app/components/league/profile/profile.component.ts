import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../../../services/http.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  private user = {};

  constructor(
    private http: HttpService,
    private router: Router,
    private session: SessionService,
  ) { }

  ngOnInit() { }
}
