import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-upload-player',
  templateUrl: './upload-player.component.html',
  styleUrls: ['./upload-player.component.css']
})
export class UploadPlayerComponent implements OnInit {
  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  file = this.session.newUser.playerRoster && this.session.newUser.playerRoster.name ?
    this.session.newUser.playerRoster.name : null;

  ngOnInit() {
    if (!this.session.newUser.coachRoster)
      this.router.navigate(['/league/register/upload-coach']);
  }

  next(): void {
    this.router.navigate(['/league/register/select-dates']);
  }

  upload(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0].name;
      this.session.newUser = { playerRoster: event.target.files[0] };
    }
  }
}
