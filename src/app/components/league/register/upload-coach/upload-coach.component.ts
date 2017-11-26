import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-upload-coach',
  templateUrl: './upload-coach.component.html',
  styleUrls: ['./upload-coach.component.css']
})
export class UploadCoachComponent implements OnInit {
  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  file = this.session.newUser.coaches && this.session.newUser.coaches.name ?
    this.session.newUser.coaches.name : null;

  ngOnInit() {
    if (!(this.session.newUser.firstName &&
      this.session.newUser.lastName &&
      this.session.newUser.leagueName &&
      this.session.newUser.email &&
      this.session.newUser.phoneNumber &&
      this.session.newUser.city &&
      this.session.newUser.state))
      this.router.navigate(['/league/register']);
  }

  next(): void {
    this.router.navigate(['/league/register/upload-player']);
  }

  upload(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0].name;
      this.session.newUser = { coaches: event.target.files[0] };
    }
  }
}
