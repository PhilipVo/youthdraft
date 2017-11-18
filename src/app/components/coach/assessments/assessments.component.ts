import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  constructor(private http: HttpService) { }

  defaultFormula = {
    hittingMechanics: 100,
    batSpeed: 100,
    batContact: 100,
    throwingMechanics: 100,
    armStrength: 100,
    armAccuracy: 100,
    infield: 100,
    outfield: 100,
    baserunMechanics: 100,
    baserunSpeed: 100
  };
  formula = this.defaultFormula;
  formulas = [];
  Math = Math;
  players = [];

  ngOnInit() {
    for (let i = 0; i < 5; i++)
      this.players.push({
        name: `Player ${i}`,
        number: Math.floor(Math.random() * 101),
        hittingMechanics: Math.floor(Math.random() * 101) / 10,
        batSpeed: Math.floor(Math.random() * 101) / 10,
        batContact: Math.floor(Math.random() * 101) / 10,
        throwingMechanics: Math.floor(Math.random() * 101) / 10,
        armStrength: Math.floor(Math.random() * 101) / 10,
        armAccuracy: Math.floor(Math.random() * 101) / 10,
        infield: Math.floor(Math.random() * 101) / 10,
        outfield: Math.floor(Math.random() * 101) / 10,
        baserunMechanics: Math.floor(Math.random() * 101) / 10,
        baserunSpeed: Math.floor(Math.random() * 101) / 10,
        div: 'AAA',
      });
    for (let i = 0; i < 5; i++)
      this.formulas.push({
        name: `Formula ${i + 1}`,
        hittingMechanics: Math.floor(Math.random() * 100 + 50),
        batSpeed: Math.floor(Math.random() * 100 + 50),
        batContact: Math.floor(Math.random() * 100 + 50),
        throwingMechanics: Math.floor(Math.random() * 100 + 50),
        armStrength: Math.floor(Math.random() * 100 + 50),
        armAccuracy: Math.floor(Math.random() * 100 + 50),
        infield: Math.floor(Math.random() * 100 + 50),
        outfield: Math.floor(Math.random() * 100 + 50),
        baserunMechanics: Math.floor(Math.random() * 100 + 50),
        baserunSpeed: Math.floor(Math.random() * 100 + 50)
      });

    this.http.get('/api/formulas')
      .then(data => this.formulas = data)
      .catch(() => { });

    this.http.get('/api/stats')
      .then(data => this.players = data)
      .catch(() => { });
  }
}
