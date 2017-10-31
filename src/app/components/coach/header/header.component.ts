import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private session: SessionService) { }

  ngOnInit() { }

  ngOnDestroy() { }

  logout(): void {
    this.session.logout();
    this.router.navigate(['']);
  }

}