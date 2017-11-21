import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  constructor(private http: HttpService) { }

  players = [];
  error = null;
  index = null;
  modal = null;
  selected: any = {};

  ngOnInit() {
    this.http.get('/api/players')
      .then(data => {
        this.players = data.map(player => {
          const number = player.phoneNumber.split('-');
          player.area = number[0];
          player.prefix = number[1];
          player.line = number[2];
          player.dob = moment.utc(player.birthday).format('M/D/YYYY');
          player.birthday = player.birthday.substring(0, 10);
          return player;
        });
      }).catch(() => { });
  }

  add() {
    this.http.post('/api/players', this.selected)
      .then(() => {
        this.players.unshift(this.selected);
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
    this.http.delete(`/api/players/${this.selected.id}`)
      .then(() => {
        this.players.splice(this.index, 1);
        this.close();
      }).catch(error => this.error = typeof error === 'string' ?
        error : 'Something went wrong.');
  }

  edit() {
    this.http.put(`/api/players/${this.selected.id}`, this.selected)
      .then(() => {
        this.players[this.index] = Object.assign({}, this.selected);
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
