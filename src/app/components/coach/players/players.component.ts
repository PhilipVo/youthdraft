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

  ngOnInit() {
    this.http.get('/api/players')
      .then(data => {
        this.players = data.map(player => {
          player.dob = moment(player.birthday.replace('T', ' ')).format('M/d/YYYY');
          return player;
        });
      }).catch(() => { });
  }

}
