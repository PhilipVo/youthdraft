import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  constructor() { }

  players = [];

  ngOnInit() {
    for (let i = 0; i < 20; i++)
      this.players.push({
        name: 'Craig Johnson',
        age: 12,
        gender: 'Male',
        number: '3-(620)270-8429',
        email: 'hcrawford@bluejam.info',
        league: 'Majors',
        dob: '9/24/2005'
      });
  }

}
