import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
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
