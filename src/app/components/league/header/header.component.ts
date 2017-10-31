import { Component, OnInit, OnDestroy } from '@angular/core';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    private session: SessionService,
  ) { }

  ngOnInit() { }

  ngOnDestroy() { }

}
