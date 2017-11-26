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
  teams = [];
  error = null;
  modal = null;
  selected: any = {};

  ngOnInit() {
    this.getCoaches();
    this.http.get('/api/teams')
      .then(data => this.teams = data)
      .catch(error => console.log(error));
  }

  accept(id) {
    this.http.post(`/api/coaches/validate/${id}`, {})
      .then(() => this.getCoaches())
      .catch(error => console.log(error));
  }

  add() {
    this.error = null;
    this.selected.phoneNumber = `${this.selected.area}-${this.selected.prefix}-${this.selected.line}`;
    console.log(this.selected);
    this.http.post('/api/coaches', this.selected)
      .then(() => {
        this.getCoaches();
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
    this.modal = null;
    this.selected = {};
  }

  delete() {
    this.error = null;
    this.http.delete(`/api/coaches/${this.selected.id}`)
      .then(() => {
        this.getCoaches();
        this.close();
      }).catch(error => this.error = typeof error === 'string' ?
        error : 'Something went wrong.');
  }

  edit() {
    console.log(this.selected)
    this.error = null;
    this.http.put(`/api/coaches/${this.selected.id}`, this.selected)
      .then(() => {
        this.getCoaches();
        this.close();
      }).catch(error => this.error = typeof error === 'string' ?
        error : 'Something went wrong.');

  }

  getCoaches() {
    this.http.get('/api/coaches/all')
      .then(data => {
        console.log(data)
        this.coaches = data
      })
      .catch(error => console.log(error));
  }

  reject(id) {
    this.http.post(`/api/coaches/reject/${id}`, {})
      .then(() => this.getCoaches())
      .catch(error => console.log(error));
  }

  select(modal, coach) {
    this.modal = modal;
    this.selected = Object.assign({}, coach);
  }

  stopPropagation(event) {
    event.stopPropagation();
    return false;
  }
}
