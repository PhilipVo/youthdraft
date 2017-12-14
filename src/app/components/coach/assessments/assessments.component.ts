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
  order = null;
  players = [];
  reverse = false;

  ngOnInit() {
    this.http.get<any>('https://youthdraft.com/api/formulas')
      .subscribe(data => this.formulas = data);

    this.http.get<any>('https://youthdraft.com/api/stats')
      .subscribe(data => {
        this.players = data;
        this.onChange();
      });
  }

  onChange() {
    this.players.forEach(player => {
      player.hitting = ((
        player.hittingMechanics * this.formula.hittingMechanics +
        player.batSpeed * this.formula.batSpeed +
        player.batContact * this.formula.batContact) / 300).toFixed(1);
      player.throwing = ((
        player.throwingMechanics * this.formula.throwingMechanics +
        player.armStrength * this.formula.armStrength +
        player.armAccuracy * this.formula.armAccuracy) / 300).toFixed(1);
      player.fielding = ((
        player.inField * this.formula.inField +
        player.outField * this.formula.outField) / 200).toFixed(1);
      player.baserunning = ((
        player.baserunMechanics * this.formula.baserunMechanics +
        player.baserunSpeed * this.formula.baserunSpeed) / 200).toFixed(1);
      player.raw = (
        player.hittingMechanics +
        player.batSpeed +
        player.batContact +
        player.throwingMechanics +
        player.armStrength +
        player.armAccuracy +
        player.inField +
        player.outField +
        player.baserunMechanics +
        player.baserunSpeed).toFixed(1);
      player.weighted = ((
        (player.hittingMechanics * this.formula.hittingMechanics) +
        (player.batSpeed * this.formula.batSpeed) +
        (player.batContact * this.formula.batContact) +
        (player.throwingMechanics * this.formula.throwingMechanics) +
        (player.armStrength * this.formula.armStrength) +
        (player.armAccuracy * this.formula.armAccuracy) +
        (player.inField * this.formula.inField) +
        (player.outField * this.formula.outField) +
        (player.baserunMechanics * this.formula.baserunMechanics) +
        (player.baserunSpeed * this.formula.baserunSpeed)) / 100).toFixed(1);
    });
  }

  orderBy(order) {
    if (this.order === order) {
      this.reverse = this.reverse ? false : true;
      this.players.reverse();
    } else {
      this.order = order;
      this.reverse = false;
      this.players.sort((a, b) => b[order] - a[order]);
    }
  }
}
