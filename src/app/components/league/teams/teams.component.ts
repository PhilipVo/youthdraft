import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  constructor(private http: HttpClient) { }

  error = null;
  modal = null;
  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  selected: any = {};
  teams = [];

  ngOnInit() {
    this.getTeams();
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
    this.http.delete(`https://youthdraft.com/api/teams/${this.selected.id}`)
      .subscribe(() => {
        this.getTeams();
        this.close();
      }, error => this.error = error.error.message ? error.error.message : 'Oops, something went wrong.');
  }

  save() {
    this.error = null;

    if (this.modal === 'add')
      this.http.post('https://youthdraft.com/api/teams', this.selected, this.options)
        .subscribe(() => {
          this.getTeams();
          this.close();
        }, error => this.error = error.error.message ? error.error.message : 'Oops, something went wrong.');
    else if (this.modal === 'edit')
      this.http.post(`https://youthdraft.com/api/teams/${this.selected.id}`, this.selected, this.options)
        .subscribe(() => {
          this.getTeams();
          this.close();
        }, error => this.error = error.error.message ? error.error.message : 'Oops, something went wrong.');
  }

  getTeams() {
    this.http.get<any>('https://youthdraft.com/api/teams')
      .subscribe(data => this.teams = data);
  }

  select(modal, teams) {
    this.modal = modal;
    this.selected = Object.assign({}, teams);
  }

  stopPropagation(event) {
    event.stopPropagation();
    return false;
  }
}
