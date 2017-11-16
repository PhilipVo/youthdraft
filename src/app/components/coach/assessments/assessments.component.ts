import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  constructor() { }

  defaultFormula = {
    hittingMechanics: 100,
    batSpeed: 100,
    batContact: 100,
    throwingMechanics: 100,
    armStrength: 100,
    armAccuracy: 100,
    infield: 100,
    outfield: 100,
    mechanics: 100,
    speed: 100
  };
  formula = this.defaultFormula;
  formulas = [];
  Math = Math;
  players = [];

  ngOnInit() {
    for (let i = 0; i < 5; i++)
      this.players.push({
        name: `Player ${i}`,
        number: Math.floor(Math.random() * 100 + 1),
        hittingMechanics: Math.floor(Math.random() * 11),
        batSpeed: Math.floor(Math.random() * 11),
        batContact: Math.floor(Math.random() * 11),
        throwingMechanics: Math.floor(Math.random() * 11),
        armStrength: Math.floor(Math.random() * 11),
        armAccuracy: Math.floor(Math.random() * 11),
        infield: Math.floor(Math.random() * 11),
        outfield: Math.floor(Math.random() * 11),
        mechanics: Math.floor(Math.random() * 11),
        speed: Math.floor(Math.random() * 11),
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
        mechanics: Math.floor(Math.random() * 100 + 50),
        speed: Math.floor(Math.random() * 100 + 50)
      });
  }
}
