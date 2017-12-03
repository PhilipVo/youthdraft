import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css']
})
export class RejectComponent {
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  jwt = this.route.snapshot.paramMap.get('jwt');
  options = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.jwt}`
    })
  };
  success = false;

  reject() {
    this.http.post('https://youthdraft.com/api/league/reject', { JWT: this.jwt }, this.options)
      .subscribe(() => this.success = true);
  }
}