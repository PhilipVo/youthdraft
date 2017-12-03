import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  constructor(private http: HttpClient) { }

  players = [];

  ngOnInit() {
    this.http.get<any>('https://youthdraft.com/api/players')
      .subscribe(data => {
        this.players = data.map(player => {
          player.dob = moment(player.birthday.replace('T', ' ')).format('M/d/YYYY');
          return player;
        });
      });
  }

}
