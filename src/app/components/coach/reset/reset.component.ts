import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  styleUrls: ['./reset.component.css'],
  templateUrl: './reset.component.html'
})
export class ResetComponent implements OnInit {
  constructor(
    public router: Router,
    private http: HttpClient,
  ) { }

  error = null;
  leagues = [];
  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  success = false;
  user: any = {};

  ngOnInit() {
    this.http.get<any>('https://youthdraft.com/leagues')
      .subscribe(data => this.leagues = data);
  }

  submit(): void {
    this.error = null;
    this.user = { ...this.user, ...this.user.league };

    this.http.post<any>(`https://youthdraft.com/coaches/reset`, this.user, this.options)
      .subscribe(() => {
        this.success = true;
      }, error => this.error = error.error.message ? error.error.message : 'Something went wrong.');
  }
}