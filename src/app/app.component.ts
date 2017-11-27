import { Component, OnInit } from '@angular/core';

import { Cookie } from 'ng2-cookies';

import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    public session: SessionService
  ) { }

  ngOnInit() {
    const youthdraftToken: string = Cookie.get('youthdraftToken');
    if (youthdraftToken)
      this.session.setSession(youthdraftToken);
  }

}