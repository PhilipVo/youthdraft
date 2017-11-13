import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {
    if (!(this.session.newUser.pastLeague &&
      this.session.newUser.desired &&
      this.session.newUser.pastDivision &&
      this.session.newUser.years))
      this.router.navigate(['/coach/register/history']);
  }
}
