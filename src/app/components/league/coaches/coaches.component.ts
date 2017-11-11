import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html'
})
export class CoachesComponent implements OnInit {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() { }

}
