import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as moment from 'moment';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  constructor(private http: HttpClient) { }

  error = null;
  _moment = moment;
  players = [];
  modal = null;
  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  selected: any = {};
  teams = [];
  tryouts = [];

  ngOnInit() {
    this.getPlayers();
    
    this.http.get<any>('https://youthdraft.com/api/teams')
      .subscribe(data => this.teams = data);
    
    this.http.get<any>('https://youthdraft.com/api/tryouts')
      .subscribe(tryouts => this.tryouts = tryouts);
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
    this.http.delete(`https://youthdraft.com/api/players/${this.selected.id}`)
      .subscribe(() => {
        this.getPlayers();
        this.close();
      }, error => this.error = error.error.message ? error.error.message : 'Oops, something went wrong.');
  }

  save() {
    this.error = null;
    this.selected.phoneNumber = `${this.selected.area}-${this.selected.prefix}-${this.selected.line}`;

    if (this.modal === 'add')
      this.http.post('https://youthdraft.com/api/players', this.selected, this.options)
        .subscribe(() => {
          this.getPlayers();
          this.close();
        }, error => this.error = error.error.message ? error.error.message : 'Oops, something went wrong.');
    else if (this.modal === 'edit')
      this.http.put(`https://youthdraft.com/api/players/${this.selected.id}`, this.selected, this.options)
        .subscribe(() => {
          this.getPlayers();
          this.close();
        }, error => this.error = error.error.message ? error.error.message : 'Oops, something went wrong.');
  }

  getPlayers() {
    this.http.get<any>('https://youthdraft.com/api/players')
      .subscribe(data => {
        this.players = data.map(player => {
          try {
            const number = player.phoneNumber.split('-');
            player.area = number[0];
            player.prefix = number[1];
            player.line = number[2];
            player.birthday = player.birthday.substring(0, 10);
          } catch (error) { }
          return player;
        });
      });
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
