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
    inField: 100,
    outField: 100,
    baserunMechanics: 100,
    baserunSpeed: 100
  };
  formula = this.defaultFormula;
  formulas = [];
  Math = Math;
  players = [];

  ngOnInit() {
    this.http.get('/api/formulas')
      .then(data => this.formulas = data)
      .catch(() => { });

    this.http.get('/api/stats')
      .then(data => this.players = data)
      .catch(() => { });
  }
}
