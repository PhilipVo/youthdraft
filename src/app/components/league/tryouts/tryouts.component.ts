import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tryouts',
  templateUrl: './tryouts.component.html',
  styleUrls: ['./tryouts.component.css']
})
export class TryoutsComponent implements OnInit {
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
