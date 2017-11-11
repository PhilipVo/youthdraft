import { Component, OnInit, OnDestroy } from '@angular/core';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.css'],
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  constructor(
    private session: SessionService,
  ) { }

  ngOnInit() { console.log('init') }

  ngOnDestroy() { }

}
