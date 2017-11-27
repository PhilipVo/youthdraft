import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-upload-team',
  templateUrl: './upload-team.component.html',
  styleUrls: ['./upload-team.component.css']
})
export class UploadTeamComponent implements OnInit {
  constructor(
    public session: SessionService,
    public router: Router,
  ) { }

  file = this.session.newUser.teams && this.session.newUser.teams.name ?
    this.session.newUser.teams.name : null;

  ngOnInit() {
    if (!this.session.newUser.players)
      this.router.navigate(['/league/register/upload-player']);
  }

  next(): void {
    this.router.navigate(['/league/register/select-dates']);
  }

  upload(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0].name;
      this.session.newUser = { teams: event.target.files[0] };
    }
  }
}
