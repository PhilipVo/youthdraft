import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.css']
})
export class FormulasComponent implements OnInit {
  constructor() { }

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
    mechanics: '',
    speed: ''
  }
  formulas = [];
  index;
  Math = Math;

  ngOnInit() {
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
      mechanics: '',
      speed: ''
    }
    this.index = null;
  }

  edit(formula, index) {
    this.formula = Object.assign({}, formula);
    this.index = index;
  }

  delete(index) {
    if (this.index) {
      if (index === this.index) this.index = null;
      if (index < this.index) this.index--;
    }

    this.formulas.splice(index, 1);
  }

  save() {
    this.error = null;

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
