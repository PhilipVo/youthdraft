import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public session: SessionService
  ) { }

  coaches = [];
  teams = [];
  error = null;
  modal = null;
  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  selected: any = {};

  ngOnInit() {
    this.getCoaches();
    this.http.get<any>('https://youthdraft.com/api/teams')
      .subscribe(data => this.teams = data);
  }

  accept(id) {
    this.http.post(`https://youthdraft.com/api/coaches/validate/${id}`, {}, this.options)
      .subscribe(() => this.getCoaches());
  }

  add() {
    this.error = null;
    this.selected.phoneNumber = `${this.selected.area}-${this.selected.prefix}-${this.selected.line}`;

    this.http.post('https://youthdraft.com/api/coaches', this.selected, this.options)
      .subscribe(() => {
        this.getCoaches();
        this.close();
      }, error => this.error = error.error.message ? error.error.message : 'Something went wrong.');
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
    this.http.delete(`https://youthdraft.com/api/coaches/${this.selected.id}`)
      .subscribe(() => {
        this.getCoaches();
        this.close();
      }, error => this.error = error.error.message ? error.error.message : 'Something went wrong.')
  }

  edit() {
    this.error = null;
    this.http.put(`https://youthdraft.com/api/coaches/${this.selected.id}`, this.selected)
      .subscribe(() => {
        this.getCoaches();
        this.close();
      }, error => this.error = error.error.message ? error.error.message : 'Oops, something went wrong.');
  }

  getCoaches() {
    this.http.get<any>('https://youthdraft.com/api/coaches/all')
      .subscribe(data => this.coaches = data);
  }

  reject(id) {
    this.http.delete(`https://youthdraft.com/api/coaches/${id}`)
      .subscribe(() => this.getCoaches());
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
