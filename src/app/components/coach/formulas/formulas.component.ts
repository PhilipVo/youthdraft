import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.css']
})
export class FormulasComponent implements OnInit {
  constructor() { }

  formulas = [];

  ngOnInit() {
    for (let i = 0; i < 5; i++)
      this.formulas.push({
        name: 'Swingers',
        hitting: 'Hitting',
        throwing: 'Throwing',
        fielding: 'Fielding',
        baserunning: 'Baserunning'
      });
  }

  edit(formula) {

  }

  delete(formula) {

  }
}
