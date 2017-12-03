import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.css']
})
export class FormulasComponent implements OnInit {
  constructor(private http: HttpClient) { }

  error = null;
  formula: any = {
    title: '',
    hittingMechanics: '',
    batSpeed: '',
    batContact: '',
    throwingMechanics: '',
    armStrength: '',
    armAccuracy: '',
    inField: '',
    outField: '',
    baserunMechanics: '',
    baserunSpeed: ''
  }
  formulas = [];
  Math = Math;
  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  ngOnInit() {
    this.getFormulas();
  }

  clear() {
    this.error = null;
    this.formula = {
      title: '',
      hittingMechanics: '',
      batSpeed: '',
      batContact: '',
      throwingMechanics: '',
      armStrength: '',
      armAccuracy: '',
      inField: '',
      outField: '',
      baserunMechanics: '',
      baserunSpeed: ''
    }
  }

  edit(formula) {
    this.formula = Object.assign({}, formula);
  }

  delete(formula) {
    this.http.delete(`https://youthdraft.com/api/formulas/${formula.id}`)
      .subscribe(() => {
        if (this.formula.id === formula.id)
          this.formula.id === null;
        this.getFormulas();
      });
  }

  getFormulas() {
    this.http.get<any>('https://youthdraft.com/api/formulas')
      .subscribe(data => this.formulas = data);
  }

  save() {
    this.error = null;

    if (this.formulas.length === 5 && !this.formula.id)
      this.error = "You can only save up to 5 formulas."
    else if (!this.formula.title) this.error = 'Formula Name cannot be blank.';
    else if (!this.formula.hittingMechanics ||
      this.formula.hittingMechanics < 50 ||
      this.formula.hittingMechanics > 150)
      this.error = 'Hitting Mechanics must be an integer between 50 and 150.';
    else if (!this.formula.batSpeed ||
      this.formula.batSpeed < 50 ||
      this.formula.batSpeed > 150)
      this.error = 'Bat Speed must be an integer between 50 and 150.';
    else if (!this.formula.batContact ||
      this.formula.batContact < 50 ||
      this.formula.batContact > 150)
      this.error = 'Bat Contact must be an integer between 50 and 150.';
    else if (!this.formula.throwingMechanics ||
      this.formula.throwingMechanics < 50 ||
      this.formula.throwingMechanics > 150)
      this.error = 'Throwing Mechanics must be an integer between 50 and 150.';
    else if (!this.formula.armStrength ||
      this.formula.armStrength < 50 ||
      this.formula.armStrength > 150)
      this.error = 'Arm Strength must be an integer between 50 and 150.';
    else if (!this.formula.armAccuracy ||
      this.formula.armAccuracy < 50 ||
      this.formula.armAccuracy > 150)
      this.error = 'Arm Accuracy must be an integer between 50 and 150.';
    else if (!this.formula.inField ||
      this.formula.inField < 50 ||
      this.formula.inField > 150)
      this.error = 'Infield must be an integer between 50 and 150.';
    else if (!this.formula.outField ||
      this.formula.outField < 50 ||
      this.formula.outField > 150)
      this.error = 'Outfield must be an integer between 50 and 150.';
    else if (!this.formula.baserunMechanics ||
      this.formula.baserunMechanics < 50 ||
      this.formula.baserunMechanics > 150)
      this.error = 'Baserunning Mechanics must be an integer between 50 and 150.';
    else if (!this.formula.baserunSpeed ||
      this.formula.baserunSpeed < 50 ||
      this.formula.baserunSpeed > 150)
      this.error = 'Baserunning Speed must be an integer between 50 and 150.';
    else if (this.formula.id) {
      this.http.put<any>(
        `https://youthdraft.com/api/formulas/${this.formula.id}`,
        this.formula,
        this.options).subscribe(() => this.getFormulas());
    } else {
      this.http.post<any>('https://youthdraft.com/api/formulas', this.formula, this.options)
        .subscribe(id => {
          this.formula.id = id;
          this.getFormulas();
        });
    }
  }

  saveAsNew() {
    this.formula.id = null;
    this.save();
  }
}
