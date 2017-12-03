import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  constructor(private http: HttpClient) { }

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
    this.http.get<any>('https://youthdraft.com/api/formulas')
      .subscribe(data => this.formulas = data);

    this.http.get<any>('https://youthdraft.com/api/stats')
      .subscribe(data => this.players = data);
  }
}
