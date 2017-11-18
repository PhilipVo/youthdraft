import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../../../services/http.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {
  constructor(
    private http: HttpService,
    private session: SessionService
  ) { }

  coaches = [];
  error = null;
  index = null;
  modal = null;
  selected: any = {};

  ngOnInit() {
    this.http.get('/api/coaches/all')
      .then(data => this.coaches = data)
      .catch(error => console.log(error));
  }

  add() {
    this.http.post('/api/coaches', this.selected)
      .then(() => {
        this.coaches.unshift(this.selected);
        this.close();
      }).catch(error => this.error = typeof error === 'string' ?
        error : 'Something went wrong.');
  }

  click(event) {
    event.stopPropagation();
    return false;
  }

  close() {
    this.error = null;
    this.index = null;
    this.modal = null;
    this.selected = {};
  }

  delete() {
    this.http.delete(`/api/coaches/${this.selected.id}`)
      .then(() => {
        this.coaches.splice(this.index, 1);
        this.close();
      }).catch(error => this.error = typeof error === 'string' ?
        error : 'Something went wrong.');
  }

  edit() {
    this.http.put(`/api/coaches/${this.selected.id}`, this.selected)
      .then(() => {
        this.coaches[this.index] = Object.assign({}, this.selected);
        this.close();
      }).catch(error => this.error = typeof error === 'string' ?
        error : 'Something went wrong.');

  }

  select(modal, index, coach) {
    this.modal = modal;
    this.index = index;
    this.selected = Object.assign({}, coach);
  }

  stopPropagation(event) {
    event.stopPropagation();
    return false;
  }
}
