import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor(
    private session: SessionService
  ) { }

  user = {};

  ngOnInit() {
  }

}
