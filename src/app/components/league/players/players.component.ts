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

  _moment = moment;
  players = [];
  error = null;
  modal = null;
  selected: any = {};
  teams: {};

  ngOnInit() {
    this.getPlayers();
    this.http.get('/api/teams')
      .then(data => this.teams = data)
      .catch(error => console.log(error));
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
    this.http.delete(`/api/players/${this.selected.id}`)
      .then(() => {
        this.getPlayers();
        this.close();
      }).catch(error => this.error = typeof error === 'string' ?
        error : 'Something went wrong.');
  }

  save() {
    console.log(this.selected)
    this.error = null;

    const temp = Object.assign({}, this.selected);

    this.selected.catcher = this.selected.catcher === 1 ? 'true' : 'false';
    this.selected.pitcher = this.selected.pitcher === 1 ? 'true' : 'false';
    this.selected.coachsKid = this.selected.coachsKid === 1 ? 'true' : 'false';
    this.selected.phoneNumber = `${this.selected.area}-${this.selected.prefix}-${this.selected.line}`;

    if (this.modal === 'add')
      this.http.post('/api/players', this.selected)
        .then(() => {
          this.getPlayers();
          this.close();
        }).catch(error => {
          this.selected = Object.assign({}, temp);
          this.error = typeof error === 'string' ? error : 'Something went wrong.'
        });
    else if (this.modal === 'edit')
      this.http.put(`/api/players/${this.selected.id}`, this.selected)
        .then(() => {
          this.getPlayers();
          this.close();
        }).catch(error => {
          this.selected = Object.assign({}, temp);
          this.error = typeof error === 'string' ? error : 'Something went wrong.'
        });
  }

  getPlayers() {
    this.http.get('/api/players')
      .then(data => {
        console.log(data)
        this.players = data.map(player => {
          const number = player.phoneNumber.split('-');
          player.area = number[0];
          player.prefix = number[1];
          player.line = number[2];
          player.birthday = player.birthday.substring(0, 10);
          return player;
        });
      }).catch(() => { });
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
