import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {
  constructor() { }

  coaches = [];

  ngOnInit() {
    for (let i = 0; i < 20; i++)
      this.coaches.push({
        name: 'Craig Johnson',
        type: 'Assistant',
        number: '3-(620)270-8429',
        email: 'hcrawford@bluejam.info',
        league: 'Majors',
        team: 'Team Name'
      });
  }
}
