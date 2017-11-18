import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.css']
})
export class FormulasComponent implements OnInit {
  constructor(private http: HttpService) { }

  error = null;
  formula = {
    name: '',
    hittingMechanics: '',
    batSpeed: '',
    batContact: '',
    throwingMechanics: '',
    armStrength: '',
    armAccuracy: '',
    infield: '',
    outfield: '',
    baserunMechanics: '',
    baserunSpeed: ''
  }
  formulas = [];
  index = null;
  Math = Math;

  ngOnInit() {
    this.http.get('/api/formulas')
      .then(data => this.formulas = data)
      .catch(() => { });
  }

  clear() {
    this.error = null;
    this.formula = {
      name: '',
      hittingMechanics: '',
      batSpeed: '',
      batContact: '',
      throwingMechanics: '',
      armStrength: '',
      armAccuracy: '',
      infield: '',
      outfield: '',
      baserunMechanics: '',
      baserunSpeed: ''
    }
    this.index = null;
  }

  edit(formula, index) {
    this.formula = Object.assign({}, formula);
    this.index = index;
  }

  delete(index) {
    if (this.index === null) {
      if (index === this.index) this.index = null;
      if (index < this.index) this.index--;
    }

    this.formulas.splice(index, 1);
  }

  save() {
    this.error = null;

    if (this.index && this.formulas.length === 5) {
      this.error = "You can only save up to 5 formulas."
      return;
    } else if (!this.index)
      this.index = this.formulas.length;


    Object.keys(this.formula).map(key => {
      console.log(key, /^\d+$/.test(this.formula[key]))
      if (key !== 'name' && (!/^\d+$/.test(this.formula[key]) ||
        this.formula[key] < 50 || this.formula[key] > 150)) {
        this.error = 'Weights must be an integer between 50 and 150.';
        return;
      }
    });

    this.formulas[this.index] = Object.assign({}, this.formula);
  }

  saveAsNew() {
    this.index = this.formulas.length;
    this.save();
  }
}
