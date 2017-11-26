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

  file = this.session.newUser.players && this.session.newUser.players.name ?
    this.session.newUser.players.name : null;

  ngOnInit() {
    if (!this.session.newUser.coaches)
      this.router.navigate(['/league/register/upload-coach']);
  }

  next(): void {
    this.router.navigate(['/league/register/upload-team']);
  }

  upload(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0].name;
      this.session.newUser = { players: event.target.files[0] };
    }
  }
}
