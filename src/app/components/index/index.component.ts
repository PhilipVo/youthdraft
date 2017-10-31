import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-index',
  styleUrls: ['./index.component.css'],
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() { }

}